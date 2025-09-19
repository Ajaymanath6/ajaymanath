import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function EnterpriseDesignSystemProcess() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">

      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">

        {/* Enterprise Design System Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Project Header - Two Column Layout */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - Logo, Name, Description */}
              <div className="flex flex-col items-start">
                {/* Logo and Project Name - Left Side */}
                <div className="flex items-start justify-between w-full mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-layout-grid-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
              Grid Design System
            </h1>
                      <div className="bg-gray-800 px-3 py-1 rounded text-white text-sm font-bold">
                2022-2025
              </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-bold">
                      Ongoing
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                  Grid reached out to us for a comprehensive design system that would unify their legal tech 
                  ecosystem. Over several years, we worked together to create a robust system with Figma 
                  documentation, reusable components, and clear structure for multiple products. We made sure 
                  everything was scalable, consistent, and worked seamlessly across their entire platform suite. 
                  The system brought coherence to what was previously a fragmented user experience.
                </p>
                
                {/* Action Buttons */}
              <div className="flex space-x-3">
                <a 
                  href="https://www.figma.com/design/9Z9Z4zcvaFdEflbYhbCYch/Grid-Design-System?node-id=13-755&p=f&t=RKfUgxEn880Grxfo-0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                    className="flex items-center bg-black hover:bg-gray-900 transition-colors text-white text-sm px-4 py-2 rounded-lg border border-gray-700"
                >
                    <i className="ri-figma-fill mr-2"></i>
                    View Figma
                </a>
              </div>
            </div>
            
              {/* Right Column - Scope of Work and Stack */}
              <div className="flex flex-col">
                {/* Scope of Work */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-black mb-4">Scope of work</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Design System</span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Component Library</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Documentation</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Auto Layout</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Variables</span>
                    <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">Interactive Components</span>
                  </div>
            </div>
            
                {/* Stack */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
                  
                  {/* Stack with Badge Style */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-figma-fill text-black text-xs"></i>
                      </div>
                      <span className="text-black text-sm font-medium">Figma</span>
            </div>

                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-palette-line text-black text-xs"></i>
              </div>
                      <span className="text-black text-sm font-medium">Design Tokens</span>
              </div>
              
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-layout-grid-line text-black text-xs"></i>
              </div>
                      <span className="text-black text-sm font-medium">Component Library</span>
            </div>

                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-file-text-line text-black text-xs"></i>
                  </div>
                      <span className="text-black text-sm font-medium">Documentation</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-24 h-1 mx-auto mt-8" style={{ 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)' 
            }}></div>
          </motion.div>

          {/* Design Process Journey - Visual Timeline */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black">The Design Journey</h2>
            
            {/* Bento Box Grid */}
            <motion.div 
              className="space-y-[50px] mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Bento Box 1 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image1.png" 
                    alt="Design Process Visual 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bento Box 2 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image2.png" 
                    alt="Design Process Visual 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bento Box 3 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image3.png" 
                    alt="Design Process Visual 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bento Box 4 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image4.png" 
                    alt="Design Process Visual 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
          </motion.div>
            
            <div className="relative">
              {/* Left-aligned Process Timeline */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
              
              {/* Process Steps */}
              <div className="space-y-20 relative">
                {/* Step 1: EMPATHIZE */}
                <div>
                  {/* Phase Content */}
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-teal-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-emotion-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                        <span className="text-teal-400 text-sm font-bold tracking-wider">PHASE 01</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Empathize</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Identified fragmentation issues across Grid's product ecosystem.<br/>
                          Conducted 15 designer and developer interviews.
                        </p>
                        
                        {/* Team Interview Highlight */}
                        <div className="bg-gradient-to-br from-teal-50/80 to-teal-100/60 border-2 border-dashed border-teal-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(240, 253, 250, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                              <span className="text-white text-sm font-bold">J</span>
                            </div>
                            <div>
                              <p className="font-semibold text-black text-sm">Jennifer Kim</p>
                              <p className="text-xs text-black opacity-60">Senior Product Designer, Grid</p>
                            </div>
                          </div>
                          <p className="text-sm text-black opacity-90 italic border-l-4 border-teal-400 pl-3 bg-white/70 p-3 rounded shadow-sm">
                            "Every time we start a new project, we're essentially rebuilding the same components with slight variations. There's no consistency across products, and it takes weeks to align on basic UI elements."
                          </p>
                        </div>
                        
                        {/* Team Interview Questions */}
                        <div className="bg-gradient-to-br from-teal-50/80 to-teal-100/60 border-2 border-dashed border-teal-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(240, 253, 250, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-questionnaire-line text-teal-500 mr-2"></i>
                            Team Interview Questions
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How much time do you spend recreating similar components?</p>
                              <p className="text-xs text-black opacity-80 italic">"About 30-40% of our design time goes into rebuilding existing patterns because we can't find reusable versions."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: What's your biggest challenge with the current design workflow?</p>
                              <p className="text-xs text-black opacity-80 italic">"Inconsistency across products and lack of shared component library makes handoffs to development complex."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How do you currently maintain design consistency?</p>
                              <p className="text-xs text-black opacity-80 italic">"We rely on manual checks and style guides, but it's not scalable across multiple products and teams."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: Would a unified design system help your workflow?</p>
                              <p className="text-xs text-black opacity-80 italic">"Absolutely. It would save time, ensure consistency, and let us focus on solving user problems instead of recreating UI."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: What's essential for a successful design system adoption?</p>
                              <p className="text-xs text-black opacity-80 italic">"Clear documentation, easy-to-use components, and strong collaboration between design and development teams."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How do you measure design system success?</p>
                              <p className="text-xs text-black opacity-80 italic">"Faster design-to-development handoffs, consistent user experience, and reduced time spent on repetitive UI work."</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Insights */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-teal-600">30-40%</p>
                            <p className="text-xs text-black opacity-70">Time on recreating UI</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-teal-600">15</p>
                            <p className="text-xs text-black opacity-70">Team interviews</p>
                        </div>
                      </div>
                    </motion.div>
                    </div>
                  </div>
                  
                  {/* Bento Box Below */}
                  <motion.div 
                    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="image1.png" 
                        alt="Empathize Process Visual" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </motion.div>
                  </div>
                  
                {/* Step 2: DEFINE */}
                <div>
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-blue-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-focus-2-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      >
                        <span className="text-blue-400 text-sm font-bold tracking-wider">PHASE 02</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Define</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Created clear requirements for scalable design system.<br/>
                          Identified component library and documentation as priorities.
                        </p>
                        
                        {/* Problem Statement */}
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-2 border-dashed border-blue-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(239, 246, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-focus-3-line text-blue-500 mr-2"></i>
                            Problem Statement
                          </h4>
                          <p className="text-sm text-black opacity-90 italic border-l-4 border-blue-400 pl-3 bg-white/80 p-3 rounded shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                            "Grid needs a comprehensive design system that provides reusable components, clear documentation, and scalable design tokens to unify their product ecosystem, reduce development time, and ensure consistent user experiences across all platforms."
                          </p>
                        </div>
                        
                        {/* Key Pain Points */}
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-2 border-dashed border-blue-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(239, 246, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-alert-line text-blue-500 mr-2"></i>
                            Key Pain Points
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-refresh-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Repeated UI recreation</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-contrast-2-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Inconsistent design patterns</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-time-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Slow design-dev handoffs</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-scales-3-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Poor scalability across products</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                  </div>
                </div>

                  <motion.div 
                    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="image2.png" 
                        alt="Define Process Visual" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Step 3: IDEATE */}
                <div>
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-purple-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-lightbulb-flash-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      >
                        <span className="text-purple-400 text-sm font-bold tracking-wider">PHASE 03</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Ideate</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Generated 50+ component concepts and system architecture.<br/>
                          Focused on modular design and comprehensive documentation.
                        </p>
                        
                        {/* Solution Concepts */}
                        <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/60 border-2 border-dashed border-purple-300/50 p-5 rounded-lg mb-4 text-center" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(250, 245, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <p className="text-2xl font-bold text-purple-600">50+</p>
                          <p className="text-sm text-black opacity-80">Component Concepts</p>
                        </div>
                        
                        {/* Key Solutions Grid */}
                        <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/60 border-2 border-dashed border-purple-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(250, 245, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-lightbulb-line text-purple-500 mr-2"></i>
                            Key System Components
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-palette-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Design Tokens</p>
                              <p className="text-xs text-black opacity-70">Colors, typography, spacing</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-layout-grid-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Component Library</p>
                              <p className="text-xs text-black opacity-70">Reusable UI components</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-file-text-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Documentation</p>
                              <p className="text-xs text-black opacity-70">Usage guidelines & examples</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-settings-3-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Variables & Auto Layout</p>
                              <p className="text-xs text-black opacity-70">Flexible, scalable components</p>
                            </div>
                        </div>
                      </div>
                    </motion.div>
                    </div>
                  </div>
                  
                    <motion.div 
                    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="image1.png" 
                        alt="Ideate Process Visual" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      </div>
                    </motion.div>
                </div>

                {/* Step 4: PROTOTYPE & TEST */}
                <div>
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-amber-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-smartphone-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                        <span className="text-amber-400 text-sm font-bold tracking-wider">PHASE 04</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Prototype & Test</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Built comprehensive design system with team feedback.<br/>
                          Tested with 12 designers achieving 95% adoption rate.
                        </p>
                        
                        {/* System Evolution */}
                        <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/60 border-2 border-dashed border-amber-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(255, 251, 235, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-artboard-line text-amber-500 mr-2"></i>
                            System Evolution
                          </h4>
                          <div className="space-y-2">
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Figma Foundation</span>
                              <span className="text-xs text-black opacity-70">Design tokens & base components</span>
                            </div>
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Component Library</span>
                              <span className="text-xs text-black opacity-70">50+ reusable components</span>
                            </div>
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Documentation</span>
                              <span className="text-xs text-black opacity-70">Comprehensive usage guidelines</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Testing Results */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">95%</p>
                            <p className="text-xs text-black opacity-70">Adoption rate</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">60%</p>
                            <p className="text-xs text-black opacity-70">Time saved</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">12</p>
                            <p className="text-xs text-black opacity-70">Designer testers</p>
                          </div>
                        </div>
                        
                        {/* Team Feedback */}
                        <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/60 border-2 border-dashed border-amber-300/50 p-4 rounded-lg" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(255, 251, 235, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <p className="text-xs text-black opacity-90 italic border-l-4 border-amber-400 pl-3 bg-white/80 p-3 rounded shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                            "The Grid Design System has transformed our workflow. We're now spending 60% less time on UI recreation and can focus on solving actual user problems. The consistency across products is remarkable."
                          </p>
                          <p className="text-right text-xs text-black opacity-60 mt-2">— Lead Designer, Grid</p>
                      </div>
                    </motion.div>
                    </div>
                  </div>
                  
                  {/* Two Bento Boxes in a Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1400px] mx-auto mt-6">
                    <motion.div 
                      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="image3.png" 
                          alt="System Visual 1" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                              </div>
                    </motion.div>
                    
                    <motion.div 
                      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="image4.png" 
                          alt="System Visual 2" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Solution */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black">The Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Feature 1 */}
              <motion.div 
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-palette-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Comprehensive Design Tokens</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Systematized colors, typography, spacing, and other design decisions into reusable tokens for consistent implementation across all products.
                </p>
              </motion.div>
              
              {/* Feature 2 */}
          <motion.div
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-layout-grid-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Modular Component Library</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  50+ reusable components with variables, auto layout, and interactive properties for rapid prototyping and consistent implementation.
                </p>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-file-text-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Detailed Documentation</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Comprehensive guidelines, usage examples, and best practices to ensure proper implementation and adoption across teams.
                </p>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div 
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-scales-3-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Scalable Architecture</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Future-proof system architecture that grows with the product ecosystem and supports multiple platforms and use cases.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default EnterpriseDesignSystemProcess; 