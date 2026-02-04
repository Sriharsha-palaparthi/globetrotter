import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { arcsData, majorHubs, mockCountries, countryNameMap } from '../data/locations';

const GlobeView = ({ selectedCountry, onCountryClick }) => {
    const globeEl = useRef();
    const [dimensions, setDimensions] = useState({ width: window.innerWidth * 0.5, height: window.innerHeight });
    const [countries, setCountries] = useState({ features: [] });
    const [hoveredCountry, setHoveredCountry] = useState(null);

    // Fetch country GeoJSON data and debug
    useEffect(() => {
        console.log("GlobeView mounted. Mock countries loaded:", mockCountries.length);
        fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.error('Failed to load country data:', err));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // Mobile check: if width < 1024, globe takes full width
            if (window.innerWidth < 1024) {
                setDimensions({ width: window.innerWidth, height: window.innerHeight * 0.4 });
            } else {
                setDimensions({ width: window.innerWidth * 0.5, height: window.innerHeight });
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (selectedCountry && globeEl.current) {
            globeEl.current.pointOfView({
                lat: selectedCountry.lat,
                lng: selectedCountry.lng,
                altitude: 1.8 // Zoom level
            }, 2000);
        }
    }, [selectedCountry]);

    useEffect(() => {
        // Disabled auto-rotate as requested
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = false;
        }
    }, []);

    // Calculate centroid for a country polygon
    const getCountryCentroid = (geometry) => {
        if (geometry.type === 'Polygon') {
            const coords = geometry.coordinates[0];
            const lat = coords.reduce((sum, c) => sum + c[1], 0) / coords.length;
            const lng = coords.reduce((sum, c) => sum + c[0], 0) / coords.length;
            return { lat, lng };
        } else if (geometry.type === 'MultiPolygon') {
            const firstPolygon = geometry.coordinates[0][0];
            const lat = firstPolygon.reduce((sum, c) => sum + c[1], 0) / firstPolygon.length;
            const lng = firstPolygon.reduce((sum, c) => sum + c[0], 0) / firstPolygon.length;
            return { lat, lng };
        }
        return { lat: 0, lng: 0 };
    };

    // Handle country click - zoom to country and notify parent
    const handleCountryClick = (polygon) => {
        if (globeEl.current && polygon) {
            const centroid = getCountryCentroid(polygon.geometry);
            globeEl.current.pointOfView({
                lat: centroid.lat,
                lng: centroid.lng,
                altitude: 1.5
            }, 1500);

            // Robust country finding logic
            const props = polygon.properties;
            const possibleNames = [
                props.NAME,
                props.ADMIN,
                props.NAME_LONG,
                props.SOVEREIGNT,
                props.NAME_SORT
            ].filter(Boolean);

            console.log("Clicked country properties:", props);
            console.log("Possible names:", possibleNames);

            let countryData = null;

            // 1. Try exact match in map
            for (const name of possibleNames) {
                const cleanName = name.trim();
                // Try original and lowercase keys in map if needed
                if (countryNameMap[cleanName]) {
                    countryData = mockCountries.find(c => c.id === countryNameMap[cleanName]);
                    if (countryData) {
                        console.log(`Match found via map: ${cleanName} -> ${countryData.name}`);
                        break;
                    }
                }
            }

            // 2. If not found, try finding by name in mockCountries directly (case-insensitive)
            if (!countryData) {
                for (const name of possibleNames) {
                    const normalizedName = name.trim().toLowerCase();
                    countryData = mockCountries.find(c => {
                        const mockName = c.name.toLowerCase();
                        return mockName === normalizedName ||
                            mockName === normalizedName.replace("the ", "") ||
                            normalizedName.includes(mockName);
                    });
                    if (countryData) {
                        console.log(`Match found via fuzzy search: ${normalizedName} -> ${countryData.name}`);
                        break;
                    }
                }
            }

            if (countryData && onCountryClick) {
                console.log("Found country data, notifying parent:", countryData);
                onCountryClick(countryData);
            } else {
                console.warn("No matching country data found for:", possibleNames);
            }
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a1929_0%,#000000_100%)] opacity-60 pointer-events-none" />

            <Globe
                ref={globeEl}
                width={dimensions.width}
                height={dimensions.height}

                // Use black globe with no texture for Iron Man look
                globeImageUrl={null}
                backgroundColor="rgba(0,0,0,0)"

                // Country polygons - Iron Man aesthetic
                polygonsData={countries.features}
                polygonCapColor={d => d === hoveredCountry ? 'rgba(0, 200, 255, 0.15)' : 'rgba(10, 25, 41, 0.8)'}
                polygonSideColor={() => 'rgba(0, 50, 100, 0.05)'}
                polygonStrokeColor={() => '#00d9ff'}
                polygonAltitude={d => d === hoveredCountry ? 0.01 : 0.001}
                polygonLabel={({ properties: d }) => `
                    <div style="
                        background: rgba(0, 0, 0, 0.85);
                        backdrop-filter: blur(10px);
                        padding: 8px 12px;
                        border-radius: 8px;
                        border: 1px solid rgba(0, 217, 255, 0.3);
                        color: #00d9ff;
                        font-family: system-ui, -apple-system, sans-serif;
                        font-size: 14px;
                        font-weight: 600;
                        box-shadow: 0 4px 12px rgba(0, 217, 255, 0.2);
                    ">
                        ${d.NAME || d.ADMIN}
                    </div>
                `}
                onPolygonHover={setHoveredCountry}
                onPolygonClick={handleCountryClick}
                polygonsTransitionDuration={300}

                // Keep the arcs for network visualization
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}

                // Labels for major hubs
                labelsData={[...majorHubs, ...(selectedCountry ? [selectedCountry] : [])]}
                labelLat={d => d.lat}
                labelLng={d => d.lng}
                labelText="name"
                labelSize={d => d === selectedCountry ? 2.5 : 1.5}
                labelDotRadius={d => d === selectedCountry ? 1.5 : 0.5}
                labelColor={() => "rgba(0, 217, 255, 0.9)"}
                labelResolution={2}

                // Atmosphere with cyan glow
                atmosphereColor="#00d9ff"
                atmosphereAltitude={0.2}
            />
        </div>
    );
};

export default GlobeView;
