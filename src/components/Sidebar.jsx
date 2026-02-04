import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockCountries } from '../data/locations';

const Sidebar = ({ onSelectCountry, selectedCountry }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCountries = mockCountries.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-full w-full flex flex-col p-6 z-10 glass-panel">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Global Intel</h1>
                <p className="text-white/50 text-sm">Real-time network analytics</p>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search region..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute right-4 top-3.5 w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {/* List / Results */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-3">
                    <AnimatePresence>
                        {filteredCountries.map((country) => (
                            <motion.div
                                key={country.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onSelectCountry(country)}
                                className={`p-4 rounded-xl cursor-pointer transition-colors border ${selectedCountry?.id === country.id
                                    ? 'bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-white font-medium text-lg">{country.name}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full ${country.metrics.status === 'Booming' ? 'bg-emerald-500/20 text-emerald-300' :
                                        country.metrics.status === 'Growing' ? 'bg-blue-500/20 text-blue-300' :
                                            'bg-gray-500/20 text-gray-300'
                                        }`}>
                                        {country.metrics.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider">Revenue</p>
                                        <p className="text-white text-md font-semibold">{country.metrics.revenue}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white/40 text-xs uppercase tracking-wider">Growth</p>
                                        <p className="text-emerald-400 text-md font-semibold">{country.metrics.growth}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredCountries.length === 0 && (
                        <div className="text-center text-white/30 py-8">
                            No regions found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
