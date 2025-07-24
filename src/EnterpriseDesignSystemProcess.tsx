import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function EnterpriseDesignSystemProcess() {
  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">
      {/* Header with back button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/?tab=Projects" className="text-white flex items-center bg-black bg-opacity-50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
            <i className="ri-arrow-left-line mr-2"></i>
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">
        {/* Background pattern */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.6, backgroundColor: 'rgba(20, 20, 20, 0.7)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Grid pattern for design system */}
            <g className="pulse-animation" style={{ animationDuration: '4s' }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </g>
            
            {/* Component boxes scattered */}
            <g className="float-animation" style={{ animationDelay: '0s' }}>
              <rect x="20%" y="15%" width="60" height="40" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" rx="4"/>
              <rect x="60%" y="25%" width="80" height="30" fill="rgba(16, 185, 129, 0.3)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1" rx="4"/>
              <rect x="15%" y="60%" width="70" height="35" fill="rgba(245, 158, 11, 0.3)" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="1" rx="4"/>
              <rect x="70%" y="70%" width="50" height="25" fill="rgba(236, 72, 153, 0.3)" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="1" rx="4"/>
            </g>
          </svg>
        </div>

        {/* Enterprise Design System Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Project Title */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2" 
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(16, 185, 129, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Grid Design System
            </h1>
            <p className="text-xl text-white opacity-80 mt-2">A comprehensive design system built to unify the user experience across multiple products</p>
            <p className="text-lg text-white opacity-70 mt-1">Bringing coherence to a fragmented ecosystem of legal tech products</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="bg-custom-dark px-3 py-1 rounded text-white text-sm font-bold">
                2022-2025
              </div>
              <div className="flex space-x-3">
                <a 
                  href="https://www.figma.com/design/9Z9Z4zcvaFdEflbYhbCYch/Grid-Design-System?node-id=13-755&p=f&t=RKfUgxEn880Grxfo-0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-black hover:bg-gray-900 transition-colors text-white text-sm px-3 py-1 rounded border border-gray-700"
                >
                  <i className="ri-figma-fill mr-1"></i>
                  View Figma File
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center mt-4 gap-2">
              <span className="badge badge-tool text-xs sm:text-sm">Figma</span>
              <span className="badge badge-tool text-xs sm:text-sm">User Research</span>
              <span className="badge badge-tool text-xs sm:text-sm">Prototyping</span>
              <span className="badge badge-tool text-xs sm:text-sm">UX Design</span>
              <span className="badge badge-tool text-xs sm:text-sm">Design System</span>
              <span className="badge badge-tool text-xs sm:text-sm">Component Design</span>
            </div>
            
            <div className="w-24 h-1 mx-auto mt-6" style={{ 
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(16, 185, 129, 0) 100%)' 
            }}></div>
          </motion.div>

          {/* The Challenge */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Challenge</h2>
            
            <div className="bg-black bg-opacity-30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Creating coherence across a fragmented ecosystem</h3>
              <p className="text-white opacity-90 mb-4">
                How do we ensure cohesive experiences across products while enhancing collaboration and streamlining development? 
                UniCourt's web app, initially developed over a decade ago, was undergoing a major revamp with a focus on modernizing 
                both the design and engineering aspects while introducing new features and retiring outdated ones.
              </p>
              <p className="text-white opacity-80">
                With a team of nearly 200 engineers working across multiple products, we faced three key challenges...
              </p>
            </div>

            {/* Challenge Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-900 bg-opacity-20 p-6 rounded-lg border border-red-800">
                <div className="text-3xl font-bold text-red-400 mb-2">5</div>
                <p className="text-sm font-semibold mb-1">Different products with inconsistent interfaces</p>
                <p className="text-xs opacity-80">Each product had its own design language</p>
              </div>
              
              <div className="bg-yellow-900 bg-opacity-20 p-6 rounded-lg border border-yellow-800">
                <div className="text-3xl font-bold text-yellow-400 mb-2">80</div>
                <p className="text-sm font-semibold mb-1">Engineers working across multiple teams</p>
                <p className="text-xs opacity-80">Coordination challenges at scale</p>
              </div>
              
              <div className="bg-orange-900 bg-opacity-20 p-6 rounded-lg border border-orange-800">
                <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                <p className="text-sm font-semibold mb-1">Development time spent recreating similar components</p>
                <p className="text-xs opacity-80">Massive inefficiency in workflows</p>
              </div>
            </div>

            {/* Visual representation of the problem */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg h-64 overflow-hidden p-4">
              <div className="bg-black bg-opacity-30 h-full w-full rounded flex flex-col p-4">
                <h4 className="text-center text-white opacity-80 mb-4">Before: Fragmented Component Ecosystem</h4>
                <div className="flex-1 flex justify-around items-center">
                  {/* Different styled buttons representing inconsistency */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-xs opacity-70">Product A</div>
                    <div className="w-16 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs">Button</div>
                    <div className="w-20 h-6 bg-blue-700 rounded flex items-center justify-center text-xs">Input</div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-xs opacity-70">Product B</div>
                    <div className="w-18 h-10 bg-green-600 rounded-sm flex items-center justify-center text-xs">Button</div>
                    <div className="w-22 h-8 bg-green-700 rounded-sm flex items-center justify-center text-xs">Input</div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-xs opacity-70">Product C</div>
                    <div className="w-14 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs">Button</div>
                    <div className="w-16 h-5 bg-purple-700 rounded-full flex items-center justify-center text-xs">Input</div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-xs opacity-70">Product D</div>
                    <div className="w-20 h-9 bg-red-600 flex items-center justify-center text-xs">Button</div>
                    <div className="w-24 h-7 bg-red-700 flex items-center justify-center text-xs">Input</div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-xs opacity-70">Product E</div>
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-xs">Btn</div>
                    <div className="w-18 h-4 bg-yellow-700 flex items-center justify-center text-xs">Input</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Research */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Understanding Pain Points</h2>
            
            {/* Interview snippet */}
            <div className="bg-black bg-opacity-40 p-6 rounded-lg mb-8 border border-blue-800">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">RM</span>
                </div>
                <div className="flex-1">
                  <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg mb-3">
                    <p className="text-sm italic opacity-90 mb-2">
                      "It's honestly a bit of a mess. I receive Figma designs, but they're inconsistent between different designers and projects. 
                      One designer might use 16px spacing, another 20px. Button styles vary wildly."
                    </p>
                    <p className="text-xs opacity-70">— Rahul Mehta, Frontend Developer</p>
                  </div>
                  
                  <div className="bg-gray-900 bg-opacity-30 p-4 rounded-lg">
                    <p className="text-sm italic opacity-90 mb-2">
                      "I'd estimate 30-40% of my development time is spent either recreating components or adapting existing ones from other projects. 
                      We have at least three different implementations of tooltips across our products."
                    </p>
                    <p className="text-xs opacity-70">— Same interview, revealing the scale of inefficiency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain points grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-900 bg-opacity-20 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="ri-error-warning-line text-2xl text-red-400 mr-3"></i>
                  <h4 className="font-bold">Inconsistent Design Language</h4>
                </div>
                <p className="text-sm opacity-90">Each team creating their own interpretations of components, leading to a fragmented user experience.</p>
              </div>
              
              <div className="bg-yellow-900 bg-opacity-20 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="ri-time-line text-2xl text-yellow-400 mr-3"></i>
                  <h4 className="font-bold">Development Inefficiency</h4>
                </div>
                <p className="text-sm opacity-90">Developers spending 40% of their time recreating components that already exist elsewhere.</p>
              </div>
              
              <div className="bg-purple-900 bg-opacity-20 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="ri-question-line text-2xl text-purple-400 mr-3"></i>
                  <h4 className="font-bold">Communication Gaps</h4>
                </div>
                <p className="text-sm opacity-90">Constant back-and-forth between designers and developers due to incomplete specifications.</p>
              </div>
              
              <div className="bg-blue-900 bg-opacity-20 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="ri-scales-line text-2xl text-blue-400 mr-3"></i>
                  <h4 className="font-bold">Maintenance Nightmare</h4>
                </div>
                <p className="text-sm opacity-90">When design patterns changed, updates had to be made in multiple places, with some inevitably missed.</p>
              </div>
            </div>
          </motion.div>

          {/* The Process */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Building the Foundation</h2>
            
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-green-500"></div>
              
              {/* Process Steps */}
              <div className="space-y-16 relative">
                {/* Step 1: Foundation */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-blue-400 text-sm font-bold tracking-wider">PHASE 01</span>
                      <h3 className="text-2xl font-bold mb-4">Foundation First</h3>
                      <p className="text-white opacity-80 mb-4">Established core design tokens and principles to ensure consistency across all components.</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-16 bg-blue-900 bg-opacity-30 rounded mb-2">
                            <i className="ri-palette-line text-2xl text-blue-400"></i>
                          </div>
                          <h5 className="text-sm font-bold">Color System</h5>
                          <p className="text-xs opacity-80">Semantic color tokens for consistent theming</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-16 bg-green-900 bg-opacity-30 rounded mb-2">
                            <i className="ri-font-size text-2xl text-green-400"></i>
                          </div>
                          <h5 className="text-sm font-bold">Typography</h5>
                          <p className="text-xs opacity-80">Scalable type system with clear hierarchy</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-blue-400 text-black items-center justify-center z-10">
                      <i className="ri-layout-grid-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-2 sm:p-3">
                        <div className="bg-black bg-opacity-30 h-full w-full rounded p-2 sm:p-3 flex flex-col">
                          <div className="flex-1 flex items-center justify-center">
                            <img 
                              src="Foundation List.png" 
                              alt="Design System Foundation" 
                              className="max-w-full h-auto rounded"
                            />
                          </div>
                        </div>
                      </motion.div>
                  </div>
                </div>

                {/* Step 2: Component System */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-2 sm:p-3"
                    >
                      <div className="bg-black bg-opacity-30 h-full w-full rounded p-2 sm:p-3 flex flex-col">
                        <div className="flex-1 flex items-center justify-center">
                          <img 
                            src="Component List (1).png" 
                            alt="Design System Component List" 
                            className="max-w-full h-auto rounded"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center order-1 md:order-2">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-green-400 text-black items-center justify-center z-10">
                      <i className="ri-puzzle-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-green-400 text-sm font-bold tracking-wider">PHASE 02</span>
                      <h3 className="text-2xl font-bold mb-4">Component System</h3>
                      <p className="text-white opacity-80 mb-4">Developed a modular library of components with consistent APIs and documentation.</p>
                      
                      <div className="p-4 bg-black bg-opacity-30 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center">
                          <i className="ri-code-box-line text-green-400 mr-2"></i>
                          15 New Components Delivered
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white bg-opacity-10 p-2 rounded">• Buttons & Forms</div>
                          <div className="bg-white bg-opacity-10 p-2 rounded">• Navigation</div>
                          <div className="bg-white bg-opacity-10 p-2 rounded">• Data Display</div>
                          <div className="bg-white bg-opacity-10 p-2 rounded">• Feedback</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Step 3: Implementation */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-purple-400 text-sm font-bold tracking-wider">PHASE 03</span>
                      <h3 className="text-2xl font-bold mb-4">Implementation Bridge</h3>
                      <p className="text-white opacity-80 mb-4">Created clear handoff specifications and code patterns for successful developer adoption.</p>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">Design-Dev Handoff</span>
                            <span className="text-purple-400 text-sm">↓ 60%</span>
                          </div>
                          <p className="text-xs opacity-80">Reduced communication issues</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">Development Time</span>
                            <span className="text-green-400 text-sm">↓ 65%</span>
                          </div>
                          <p className="text-xs opacity-80">For component implementation</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-purple-400 text-black items-center justify-center z-10">
                      <i className="ri-links-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 h-60 rounded-lg overflow-hidden p-3"
                    >
                      <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 flex flex-col">
                        <h4 className="text-sm font-bold mb-3 text-center">Design-to-Code Workflow</h4>
                        <div className="flex-1 flex items-center">
                          <div className="flex-1 space-y-4">
                            {/* Figma to Code flow */}
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                                <i className="ri-figma-fill text-sm"></i>
                              </div>
                              <div className="flex-1 h-1 bg-purple-500 rounded-full"></div>
                              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                <i className="ri-code-line text-sm"></i>
                              </div>
                            </div>
                            
                            {/* Documentation */}
                            <div className="bg-gray-700 bg-opacity-40 p-2 rounded">
                              <div className="h-1.5 w-full bg-gray-500 rounded-full mb-1"></div>
                              <div className="h-1 w-4/5 bg-gray-500 rounded-full mb-1"></div>
                              <div className="h-1 w-3/4 bg-gray-500 rounded-full"></div>
                            </div>
                            
                            {/* Component specs */}
                            <div className="grid grid-cols-3 gap-1">
                              <div className="h-6 bg-blue-900 bg-opacity-40 rounded"></div>
                              <div className="h-6 bg-green-900 bg-opacity-40 rounded"></div>
                              <div className="h-6 bg-purple-900 bg-opacity-40 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Transforming Design & Development</h2>
            
            {/* After: Unified System */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg h-64 overflow-hidden p-4 mb-8">
              <div className="bg-black bg-opacity-30 h-full w-full rounded flex flex-col p-4">
                <h4 className="text-center text-white opacity-80 mb-4">After: Unified Component System</h4>
                <div className="flex-1 flex justify-around items-center">
                  {/* Consistent components across products */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-xs opacity-70">All Products</div>
                    <div className="w-16 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs border border-blue-400">Button</div>
                    <div className="w-20 h-6 bg-blue-700 rounded-lg flex items-center justify-center text-xs border border-blue-400">Input</div>
                    <div className="w-18 h-7 bg-blue-800 rounded-lg flex items-center justify-center text-xs border border-blue-400">Card</div>
                  </div>
                  
                  {/* Arrow showing unity */}
                  <div className="flex flex-col items-center">
                    <i className="ri-arrow-right-line text-2xl text-green-400"></i>
                    <div className="text-xs text-green-400 mt-1">Consistent</div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="flex flex-col space-y-2 text-xs">
                    <div className="flex items-center">
                      <i className="ri-check-line text-green-400 mr-2"></i>
                      <span>Same styling</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-line text-green-400 mr-2"></i>
                      <span>Same behavior</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-line text-green-400 mr-2"></i>
                      <span>Same API</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-line text-green-400 mr-2"></i>
                      <span>One codebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-900 bg-opacity-20 p-6 rounded-lg border border-green-800 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4 months</div>
                <p className="text-sm font-semibold mb-1">Development Time Saved</p>
                <p className="text-xs opacity-80">Through reusable patterns</p>
              </div>
              
              <div className="bg-blue-900 bg-opacity-20 p-6 rounded-lg border border-blue-800 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">₹2L</div>
                <p className="text-sm font-semibold mb-1">Cost Savings</p>
                <p className="text-xs opacity-80">Reduced development effort</p>
              </div>
              
              <div className="bg-purple-900 bg-opacity-20 p-6 rounded-lg border border-purple-800 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <p className="text-sm font-semibold mb-1">Workshop Satisfaction</p>
                <p className="text-xs opacity-80">From 80+ participants</p>
              </div>
              
              <div className="bg-yellow-900 bg-opacity-20 p-6 rounded-lg border border-yellow-800 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
                <p className="text-sm font-semibold mb-1">Reduction in UI Bugs</p>
                <p className="text-xs opacity-80">Across all products</p>
              </div>
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Key Learnings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mr-4">
                    <i className="ri-team-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold">Stakeholder Alignment is Critical</h3>
                </div>
                <p className="text-sm opacity-90">Gaining early buy-in from engineering leadership proved essential for successful implementation. Creating champions within each team accelerated adoption significantly.</p>
              </div>
              
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mr-4">
                    <i className="ri-tools-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold">Tooling Affects Adoption</h3>
                </div>
                <p className="text-sm opacity-90">Investing in proper documentation and tooling improved developer experience and reduced resistance to adopting the new design system components.</p>
              </div>
              
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-4">
                    <i className="ri-scales-3-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold">Balance Flexibility and Consistency</h3>
                </div>
                <p className="text-sm opacity-90">Creating components that were flexible enough to handle edge cases while maintaining consistency required careful API design and extensive user testing.</p>
              </div>
              
              <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mr-4">
                    <i className="ri-refresh-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold">Design Systems Are Never "Done"</h3>
                </div>
                <p className="text-sm opacity-90">Establishing maintenance and governance procedures was as important as the initial design work. Systems require ongoing investment to remain relevant and valuable.</p>
              </div>
            </div>
          </motion.div>

          {/* Back to portfolio button at the bottom */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Link to="/?tab=Projects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white text-sm sm:text-base px-6 py-3 rounded-lg flex items-center transition-all duration-300">
                <i className="ri-arrow-left-line mr-2"></i>
                <span>Return to Portfolio</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EnterpriseDesignSystemProcess; 