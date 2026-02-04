import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockCountries } from '../data/locations';
import { motion } from 'framer-motion';

const CountryDetail = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();
    const country = mockCountries.find(c => c.id === countryId);

    if (!country) {
        return (
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-3xl mb-4">Country Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors"
                    >
                        Back to Globe
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-black text-white overflow-y-auto">
            {/* Header */}
            <div className="relative bg-gradient-to-b from-cyan-900/20 to-black border-b border-cyan-500/30 p-6 md:p-8">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Globe
                </button>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{country.name}</h1>
                <p className="text-white/50">Comprehensive Operations & Analytics</p>
            </div>

            <div className="container mx-auto p-6 md:p-8">
                {/* Status and Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                >
                    <div className="glass-panel p-6 border-l-4 border-cyan-500">
                        <p className="text-white/50 text-sm mb-2">Status</p>
                        <p className={`text-2xl font-bold ${country.metrics.status === 'Booming' ? 'text-emerald-400' :
                            country.metrics.status === 'Growing' ? 'text-blue-400' :
                                'text-gray-400'
                            }`}>
                            {country.metrics.status}
                        </p>
                    </div>
                    <div className="glass-panel p-6 border-l-4 border-emerald-500">
                        <p className="text-white/50 text-sm mb-2">Annual Revenue</p>
                        <p className="text-2xl font-bold text-emerald-400">{country.metrics.revenue}</p>
                    </div>
                    <div className="glass-panel p-6 border-l-4 border-blue-500">
                        <p className="text-white/50 text-sm mb-2">YoY Growth</p>
                        <p className="text-2xl font-bold text-blue-400">{country.metrics.growth}</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Head Office Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-6"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Head Office
                        </h2>
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30 mb-4">
                            <div className="mb-4">
                                <p className="text-white/50 text-sm mb-1">Location</p>
                                <p className="text-white text-xl font-semibold">{country.headOffice.city}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-white/50 text-sm mb-1">Address</p>
                                <p className="text-white">{country.headOffice.address}</p>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Staff Count</p>
                                <p className="text-cyan-400 text-3xl font-bold">{country.headOffice.staff}</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 h-64 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-cyan-400/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <p className="text-white/30 text-sm">Country Map</p>
                                <p className="text-white/20 text-xs mt-1">{country.name}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Operations Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel p-6"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Operations
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Offices</p>
                                <p className="text-white text-3xl font-bold">{country.operations.offices}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Employees</p>
                                <p className="text-white text-3xl font-bold">{country.operations.employees}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Active Projects</p>
                                <p className="text-cyan-400 text-3xl font-bold">{country.operations.activeProjects}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Clients</p>
                                <p className="text-emerald-400 text-3xl font-bold">{country.operations.clients}</p>
                            </div>
                        </div>

                        {/* Regions */}
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
                            <h3 className="text-white font-semibold mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Active Regions ({country.operations.regions.length})
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {country.operations.regions.map((region, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-2 bg-white/10 text-white rounded-lg text-sm border border-white/20 hover:bg-white/20 transition-colors"
                                    >
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Insights Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 mt-8"
                >
                    <h2 className="text-2xl font-bold mb-4">Key Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4">
                            <div className="text-4xl font-bold text-cyan-400 mb-2">
                                {Math.round(country.operations.employees / country.operations.offices)}
                            </div>
                            <p className="text-white/50 text-sm">Avg. Employees/Office</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">
                                {Math.round(country.operations.activeProjects / country.operations.offices)}
                            </div>
                            <p className="text-white/50 text-sm">Avg. Projects/Office</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl font-bold text-blue-400 mb-2">
                                {Math.round(country.operations.clients / country.operations.offices)}
                            </div>
                            <p className="text-white/50 text-sm">Avg. Clients/Office</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CountryDetail;
