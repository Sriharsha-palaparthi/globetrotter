import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobeView from './components/GlobeView';
import Sidebar from './components/Sidebar';
import StatsPanel from './components/StatsPanel';
import CountryDetail from './pages/CountryDetail';

function MainDashboard() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Handle selection from sidebar or globe
    const handleSelect = (country) => {
        console.log("Selection event! New country:", country?.name);
        setSelectedCountry(country);
    };

    return (
        <div className="w-full h-screen bg-black flex flex-col lg:flex-row overflow-hidden relative">
            {/* Left Pane: Globe (50% desktop, full mobile) */}
            <div className="w-full lg:w-[50%] h-[50%] lg:h-full relative order-2 lg:order-1 border-b lg:border-r border-white/10">
                <GlobeView
                    selectedCountry={selectedCountry}
                    onCountryClick={handleSelect}
                />
            </div>

            {/* Middle Pane: Stats Panel (20% desktop, auto mobile) */}
            <div className="w-full lg:w-[20%] h-auto lg:h-full bg-zinc-900/50 relative z-20 order-3 lg:order-2 border-b lg:border-r border-white/10">
                <StatsPanel selectedCountry={selectedCountry} />
            </div>

            {/* Right Pane: Sidebar (30% desktop, top mobile) */}
            <div className="w-full lg:w-[30%] h-[30%] lg:h-full bg-black relative z-20 p-4 lg:p-6 lg:pl-0 order-1 lg:order-3">
                <Sidebar
                    onSelectCountry={handleSelect}
                    selectedCountry={selectedCountry}
                />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainDashboard />} />
                <Route path="/country/:countryId" element={<CountryDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
