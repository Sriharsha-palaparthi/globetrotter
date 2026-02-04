export const majorHubs = [
    { name: "New York", lat: 40.7128, lng: -74.0060, color: "#4ade80" },
    { name: "London", lat: 51.5074, lng: -0.1278, color: "#facc15" },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, color: "#60a5fa" },
    { name: "Singapore", lat: 1.3521, lng: 103.8198, color: "#f472b6" },
    { name: "Dubai", lat: 25.2048, lng: 55.2708, color: "#a78bfa" }
];

export const arcsData = [
    { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: ["#4ade80", "#facc15"] }, // NY -> London
    { startLat: 51.5074, startLng: -0.1278, endLat: 25.2048, endLng: 55.2708, color: ["#facc15", "#a78bfa"] }, // London -> Dubai
    { startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198, color: ["#a78bfa", "#f472b6"] }, // Dubai -> Singapore
    { startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, color: ["#f472b6", "#60a5fa"] }, // Singapore -> Tokyo
    { startLat: 35.6762, startLng: 139.6503, endLat: 40.7128, endLng: -74.0060, color: ["#60a5fa", "#4ade80"] }  // Tokyo -> NY
];

export const mockCountries = [
    {
        id: "usa",
        name: "USA",
        iso: "US",
        lat: 37.0902,
        lng: -95.7129,
        metrics: {
            revenue: "$4.2M",
            growth: "+12%",
            status: "Stable"
        },
        headOffice: {
            city: "New York",
            address: "350 Fifth Avenue",
            staff: 145
        },
        operations: {
            offices: 5,
            employees: 450,
            regions: ["East Coast", "West Coast", "Midwest"],
            activeProjects: 28,
            clients: 156
        }
    },
    {
        id: "gbr",
        name: "United Kingdom",
        iso: "GB",
        lat: 55.3781,
        lng: -3.4360,
        metrics: {
            revenue: "$1.8M",
            growth: "+5%",
            status: "Stable"
        },
        headOffice: {
            city: "London",
            address: "1 Canada Square",
            staff: 89
        },
        operations: {
            offices: 3,
            employees: 220,
            regions: ["London", "Manchester", "Edinburgh"],
            activeProjects: 15,
            clients: 78
        }
    },
    {
        id: "jpn",
        name: "Japan",
        iso: "JP",
        lat: 36.2048,
        lng: 138.2529,
        metrics: {
            revenue: "$3.5M",
            growth: "+8%",
            status: "Growing"
        },
        headOffice: {
            city: "Tokyo",
            address: "1-1-2 Otemachi",
            staff: 120
        },
        operations: {
            offices: 4,
            employees: 380,
            regions: ["Kanto", "Kansai", "Chubu"],
            activeProjects: 22,
            clients: 134
        }
    },
    {
        id: "sgp",
        name: "Singapore",
        iso: "SG",
        lat: 1.3521,
        lng: 103.8198,
        metrics: {
            revenue: "$900K",
            growth: "+22%",
            status: "Booming"
        },
        headOffice: {
            city: "Singapore",
            address: "1 Marina Boulevard",
            staff: 56
        },
        operations: {
            offices: 1,
            employees: 95,
            regions: ["Central", "East"],
            activeProjects: 12,
            clients: 45
        }
    },
    {
        id: "uae",
        name: "UAE",
        iso: "AE",
        lat: 23.4241,
        lng: 53.8478,
        metrics: {
            revenue: "$2.1M",
            growth: "+15%",
            status: "Stable"
        },
        headOffice: {
            city: "Dubai",
            address: "Sheikh Zayed Road",
            staff: 78
        },
        operations: {
            offices: 2,
            employees: 180,
            regions: ["Dubai", "Abu Dhabi"],
            activeProjects: 18,
            clients: 92
        }
    },
    {
        id: "deu",
        name: "Germany",
        iso: "DE",
        lat: 51.1657,
        lng: 10.4515,
        metrics: {
            revenue: "$3.1M",
            growth: "+4%",
            status: "Stable"
        },
        headOffice: {
            city: "Frankfurt",
            address: "Mainzer Landstraße 16",
            staff: 102
        },
        operations: {
            offices: 4,
            employees: 310,
            regions: ["Hesse", "Bavaria", "North Rhine"],
            activeProjects: 19,
            clients: 115
        }
    },
    {
        id: "fra",
        name: "France",
        iso: "FR",
        lat: 46.2276,
        lng: 2.2137,
        metrics: {
            revenue: "$2.9M",
            growth: "+3%",
            status: "Stable"
        },
        headOffice: {
            city: "Paris",
            address: "8 Rue de Londres",
            staff: 95
        },
        operations: {
            offices: 3,
            employees: 280,
            regions: ["Île-de-France", "Provence", "Rhône-Alpes"],
            activeProjects: 17,
            clients: 98
        }
    },
    {
        id: "ind",
        name: "India",
        iso: "IN",
        lat: 20.5937,
        lng: 78.9629,
        metrics: {
            revenue: "$1.5M",
            growth: "+18%",
            status: "Booming"
        },
        headOffice: {
            city: "Mumbai",
            address: "Bandra Kurla Complex",
            staff: 134
        },
        operations: {
            offices: 6,
            employees: 520,
            regions: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
            activeProjects: 31,
            clients: 187
        }
    },
    {
        id: "aus",
        name: "Australia",
        iso: "AU",
        lat: -25.2744,
        lng: 133.7751,
        metrics: {
            revenue: "$2.2M",
            growth: "+7%",
            status: "Stable"
        },
        headOffice: {
            city: "Sydney",
            address: "100 Market Street",
            staff: 87
        },
        operations: {
            offices: 3,
            employees: 245,
            regions: ["New South Wales", "Victoria", "Queensland"],
            activeProjects: 16,
            clients: 89
        }
    },
    {
        id: "bra",
        name: "Brazil",
        iso: "BR",
        lat: -14.2350,
        lng: -51.9253,
        metrics: {
            revenue: "$1.2M",
            growth: "+9%",
            status: "Stable"
        },
        headOffice: {
            city: "São Paulo",
            address: "Avenida Paulista 1578",
            staff: 71
        },
        operations: {
            offices: 2,
            employees: 195,
            regions: ["São Paulo", "Rio de Janeiro"],
            activeProjects: 14,
            clients: 67
        }
    }
];

// Map GeoJSON country names to our mock data
export const countryNameMap = {
    "United States of America": "usa",
    "United Kingdom": "gbr",
    "Japan": "jpn",
    "Singapore": "sgp",
    "United Arab Emirates": "uae",
    "Germany": "deu",
    "France": "fra",
    "India": "ind",
    "Australia": "aus",
    "Brazil": "bra"
};
