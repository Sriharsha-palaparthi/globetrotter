import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StatsPanel = ({ selectedCountry }) => {
    const navigate = useNavigate();

    console.log("StatsPanel rendering with country:", selectedCountry?.name);

    return (
        <div className="h-full w-full flex flex-col p-4 md:p-6 glass-panel overflow-y-auto custom-scrollbar min-h-[300px]">
            {!selectedCountry ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <svg className="w-16 h-16 text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-white/50 text-lg font-medium mb-2">No Country Selected</h3>
                    <p className="text-white/30 text-sm">Click on a country to view statistics</p>
                </div>
            ) : (
                <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                            {selectedCountry.name}
                        </h2>
                        <p className="text-white/50 text-sm">Country Operations Overview</p>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-6">
                        <span className={`inline-block text-xs px-3 py-1.5 rounded-full font-medium ${selectedCountry.metrics.status === 'Booming'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : selectedCountry.metrics.status === 'Growing'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                            }`}>
                            {selectedCountry.metrics.status}
                        </span>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Revenue</p>
                            <p className="text-white text-xl font-bold">{selectedCountry.metrics.revenue}</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Growth</p>
                            <p className="text-emerald-400 text-xl font-bold">{selectedCountry.metrics.growth}</p>
                        </div>
                    </div>

                    {/* Head Office */}
                    <div className="mb-6">
                        <h3 className="text-white/70 text-sm uppercase tracking-wider mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Head Office
                        </h3>
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                            <p className="text-white font-semibold text-lg mb-1">{selectedCountry.headOffice.city}</p>
                            <p className="text-white/50 text-sm mb-3">{selectedCountry.headOffice.address}</p>
                            <div className="flex items-center text-cyan-400 text-sm">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {selectedCountry.headOffice.staff} Staff
                            </div>
                        </div>
                    </div>

                    {/* Operations */}
                    <div className="mb-6 flex-1">
                        <h3 className="text-white/70 text-sm uppercase tracking-wider mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Operations
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                <p className="text-white/40 text-xs mb-1">Offices</p>
                                <p className="text-white text-lg font-semibold">{selectedCountry.operations.offices}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                <p className="text-white/40 text-xs mb-1">Employees</p>
                                <p className="text-white text-lg font-semibold">{selectedCountry.operations.employees}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                <p className="text-white/40 text-xs mb-1">Projects</p>
                                <p className="text-white text-lg font-semibold">{selectedCountry.operations.activeProjects}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                <p className="text-white/40 text-xs mb-1">Clients</p>
                                <p className="text-white text-lg font-semibold">{selectedCountry.operations.clients}</p>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-white/40 text-xs mb-2">Active Regions</p>
                            <div className="flex flex-wrap gap-2">
                                {selectedCountry.operations.regions.map((region, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500/30"
                                    >
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(`/country/${selectedCountry.id}`)}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20"
                    >
                        View Detailed Analytics
                    </motion.button>
                </div>
            )}
        </div>
    );
};

export default StatsPanel;
