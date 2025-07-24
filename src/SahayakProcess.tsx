import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function SahayakProcess() {
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
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
            </defs>
            
            <g className="pulse-animation" style={{ animationDuration: '4s' }}>
              <circle cx="50%" cy="50%" r="10%" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="50%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* Sahayak Process Content */}
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
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(192,192,192,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Sahayak: AI Teaching Assistant
            </h1>
            <p className="text-xl text-white opacity-80 mt-2">Your AI Teaching Partner for Multi-Grade Classrooms</p>
            <p className="text-lg text-white opacity-70 mt-1">AI assistant helping India's teachers save time and deliver personalized education in local languages</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="bg-custom-dark px-3 py-1 rounded text-white text-sm font-bold">
                2025
              </div>
              <div className="flex space-x-3">
                <a 
                  href="https://sahayak-b85697.gitlab.io/home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-teal-600 hover:bg-teal-700 transition-colors text-white text-sm px-3 py-1 rounded"
                >
                  <i className="ri-external-link-line mr-1"></i>
                  View Live Project
                </a>
                <a 
                  href="https://www.figma.com/file/sahayak-design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-black hover:bg-gray-900 transition-colors text-white text-sm px-3 py-1 rounded border border-gray-700"
                >
                  <i className="ri-figma-fill mr-1"></i>
                  View Figma
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center mt-4 gap-2">
              <span className="badge badge-tool text-xs sm:text-sm">Figma</span>
              <span className="badge badge-tool text-xs sm:text-sm">Research</span>
              <span className="badge badge-tool text-xs sm:text-sm">Design</span>
              <span className="badge badge-tool text-xs sm:text-sm">Cursor</span>
              <span className="badge badge-tool text-xs sm:text-sm">Localization</span>
              <span className="badge badge-tool text-xs sm:text-sm">ChatGPT</span>
              <span className="badge badge-tool text-xs sm:text-sm">Claude 3.7</span>
            </div>
            
            <div className="w-24 h-1 mx-auto mt-6" style={{ 
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Design Journey</h2>
            
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
              
              {/* Process Steps */}
              <div className="space-y-16 relative">
                {/* Step 1: EMPATHIZE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-teal-400 text-sm font-bold tracking-wider">PHASE 01</span>
                      <h3 className="text-2xl font-bold mb-4">Empathize</h3>
                      <p className="text-white opacity-80 mb-4">We identified the challenges faced by teachers in multi-grade classrooms across India.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-user-voice-line text-xl text-teal-400 mr-2"></i>
                          <span className="text-sm">12 Teacher Interviews</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-teal-400 text-black items-center justify-center z-10">
                      <i className="ri-emotion-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      className="bg-black bg-opacity-30 p-4 rounded-lg"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          <span className="text-teal-300 font-bold">S</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Sunita Patil</h4>
                          <p className="text-xs opacity-70">Primary Teacher, Karnataka</p>
                        </div>
                      </div>
                      <p className="text-sm opacity-90 italic border-l-2 border-teal-400 pl-3">
                        "I spend hours creating materials for different grades. With students at multiple levels, it's impossible to give everyone personalized attention without proper tools."
                      </p>
                    </motion.div>
                    
                    {/* Teacher Interview Questions */}
                    <motion.div 
                      className="mt-4 bg-black bg-opacity-40 p-4 rounded-lg"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <h4 className="font-bold mb-3 text-sm flex items-center">
                        <i className="ri-questionnaire-line text-teal-400 mr-2"></i>
                        Teacher Interview Questions
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold">Q: How much time do you spend preparing materials for different grade levels?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Around 3-4 hours daily, often working late into the night."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: What's your biggest challenge in a multi-grade classroom?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Creating differentiated materials quickly enough to meet everyone's needs."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: How important is having content in local languages?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Critical. Many students struggle with English, but quality materials in languages like Kannada are scarce."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: Would you use AI to help with teaching preparation?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Absolutely, if it's simple to use and produces quality materials in our local language."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: What specific teaching materials take the most time to create?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Multi-level worksheets and visual aids that work for the blackboard."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: How do you currently manage weekly lesson planning?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"It's extremely time-consuming - I have to plan separate activities for each grade simultaneously."</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 2: DEFINE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-black bg-opacity-30 p-4 rounded-lg"
                    >
                      <h4 className="font-bold mb-3 flex items-center justify-end">
                        Problem Statement
                        <i className="ri-focus-3-line text-teal-400 ml-2"></i>
                      </h4>
                      <p className="text-sm opacity-90 border-r-2 border-teal-400 pr-3 text-right">
                        "Teachers in multi-grade classrooms across India need a way to quickly create personalized, multi-level teaching materials in local languages to save preparation time and provide better education to students across different learning levels."
                      </p>
                      
                      <div className="mt-4">
                        <h5 className="text-xs font-bold mb-2 text-right">Key Pain Points:</h5>
                        <ul className="space-y-2 text-right">
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Time-consuming material preparation</span>
                            <i className="ri-time-line ml-2 text-teal-400"></i>
                          </li>
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Lack of multi-level resources</span>
                            <i className="ri-stack-line ml-2 text-teal-400"></i>
                          </li>
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Limited materials in local languages</span>
                            <i className="ri-translate-2 ml-2 text-teal-400"></i>
                          </li>
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Complex scheduling across grades</span>
                            <i className="ri-calendar-todo-line ml-2 text-teal-400"></i>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center order-0 md:order-2">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-teal-400 text-black items-center justify-center z-10">
                      <i className="ri-focus-2-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-teal-400 text-sm font-bold tracking-wider">PHASE 02</span>
                      <h3 className="text-2xl font-bold mb-4">Define</h3>
                      <p className="text-white opacity-80">We crystallized our research findings into a clear problem statement and identified key opportunity areas.</p>
                      
                      <div className="mt-4 space-y-3">
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center">
                            <i className="ri-target-line text-xl text-teal-400 mr-2"></i>
                            <span className="text-sm">Time savings as primary goal</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center">
                            <i className="ri-translate-2 text-xl text-teal-400 mr-2"></i>
                            <span className="text-sm">Focus on 12+ Indian languages</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Step 3: IDEATE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-purple-400 text-sm font-bold tracking-wider">PHASE 03</span>
                      <h3 className="text-2xl font-bold mb-4">Ideate</h3>
                      <p className="text-white opacity-80 mb-4">Exploring potential solutions to help teachers save time and create personalized materials.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-lightbulb-flash-line text-xl text-purple-400 mr-2"></i>
                          <span className="text-sm">40+ Solution Concepts</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-purple-400 text-black items-center justify-center z-10">
                      <i className="ri-lightbulb-flash-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Solution sketches grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-translate text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Multi-Language Support</h5>
                          <p className="text-xs opacity-80">Generate content in local Indian languages</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-file-list-3-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Multi-Level Worksheets</h5>
                          <p className="text-xs opacity-80">Create differentiated materials for various grades</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-calendar-todo-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Lesson Planner</h5>
                          <p className="text-xs opacity-80">AI-powered weekly activity planning</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-image-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Visual Aid Creator</h5>
                          <p className="text-xs opacity-80">Generate blackboard-friendly visuals</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 5: PROTOTYPE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-purple-400 text-sm font-bold tracking-wider">PHASE 04</span>
                      <h3 className="text-2xl font-bold mb-4">Prototype</h3>
                      <div className="p-4 bg-black bg-opacity-30 rounded-lg mb-4">
                        <h4 className="font-bold mb-2 flex items-center">
                          <i className="ri-artboard-line text-purple-400 mr-2"></i>
                          Prototype Evolution
                        </h4>
                        <table className="w-full text-xs">
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="py-2"><strong>Figma</strong></td>
                              <td className="py-2 opacity-80">Initial wireframes and UI flows</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2"><strong>Component Library</strong></td>
                              <td className="py-2 opacity-80">Reusable components for multiple languages</td>
                            </tr>
                            <tr>
                              <td className="py-2"><strong>Interactive Prototype</strong></td>
                              <td className="py-2 opacity-80">High-fidelity interactions and flows</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="p-3 bg-black bg-opacity-40 rounded border border-purple-900">
                        <p className="text-xs italic opacity-90">
                          <strong>Teacher Co-Design:</strong> 5 teachers participated in prototype refinement
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-purple-400 text-black items-center justify-center z-10">
                      <i className="ri-layout-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-2 sm:p-3"
                    >
                      <div className="bg-black bg-opacity-30 h-full w-full rounded p-2 sm:p-3 flex flex-col">
                        <div className="flex-1 flex items-center justify-center">
                          <img 
                            src="saha2.png" 
                            alt="Sahayak Teaching Assistant Prototype" 
                            className="max-w-full h-auto rounded"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 5: TEST */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-amber-400 text-sm font-bold tracking-wider">PHASE 05</span>
                      <h3 className="text-2xl font-bold mb-4">Test</h3>
                      <p className="text-white opacity-80 mb-4">Validating design decisions through user testing with teachers across India.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-test-tube-line text-xl text-amber-400 mr-2"></i>
                          <span className="text-sm">15 Teacher Testing Sessions</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-amber-400 text-black items-center justify-center z-10">
                      <i className="ri-test-tube-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-black bg-opacity-30 rounded-lg"
                    >
                      <h4 className="font-bold mb-3">User Testing Results</h4>
                      
                      {/* Test results gauge charts */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {/* Task Completion Rate Gauge */}
                        <div>
                          <div className="relative h-24 flex items-center justify-center mb-1">
                            <svg width="96" height="96" viewBox="0 0 96 96">
                              {/* Background circle */}
                              <circle cx="48" cy="48" r="40" fill="none" stroke="#374151" strokeWidth="8" />
                              
                              {/* Progress arc - 88% of the circle */}
                              <path 
                                d="M48,8 A40,40 0 1,1 12.302,70.634"
                                fill="none" 
                                stroke="#F59E0B" 
                                strokeWidth="8" 
                                strokeLinecap="round"
                              />
                              
                              {/* Inner indicator */}
                              <circle cx="48" cy="48" r="32" fill="#111827" />
                              
                              {/* Text */}
                              <text x="48" y="53" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">88%</text>
                            </svg>
                          </div>
                          <p className="text-center text-xs">Task Completion Rate</p>
                        </div>
                        
                        {/* Satisfaction Score Gauge */}
                        <div>
                          <div className="relative h-24 flex items-center justify-center mb-1">
                            <svg width="96" height="96" viewBox="0 0 96 96">
                              {/* Background circle */}
                              <circle cx="48" cy="48" r="40" fill="none" stroke="#374151" strokeWidth="8" />
                              
                              {/* Progress arc - 9.1/10 = 91% of the circle */}
                              <path 
                                d="M48,8 A40,40 0 1,1 10.579,66.634"
                                fill="none" 
                                stroke="#10B981" 
                                strokeWidth="8" 
                                strokeLinecap="round"
                              />
                              
                              {/* Inner indicator */}
                              <circle cx="48" cy="48" r="32" fill="#111827" />
                              
                              {/* Text */}
                              <text x="48" y="53" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">9.1</text>
                            </svg>
                          </div>
                          <p className="text-center text-xs">Satisfaction Score (of 10)</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-black bg-opacity-40 rounded border border-amber-900">
                        <p className="text-xs italic opacity-90">
                          "This would save me hours every week. The ability to create worksheets in Kannada for different grades simultaneously is exactly what I need for my multi-grade classroom."
                        </p>
                        <p className="text-right text-xs opacity-70 mt-1">— Teacher Tester, Karnataka</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Feature 1 */}
              <motion.div 
                className="bg-black bg-opacity-30 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-translate text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">Local and Multi-Lingual Content</h4>
                </div>
                <p className="text-sm opacity-90">
                  Generate culturally relevant lessons and materials in 12+ Indian languages, including Hindi, Marathi, Tamil, and more.
                </p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="bg-black bg-opacity-30 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-file-list-3-line text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">Multi-Level Instant Worksheets</h4>
                </div>
                <p className="text-sm opacity-90">
                  Take a photo of any textbook page and instantly create differentiated worksheets for multiple grade levels.
                </p>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="bg-black bg-opacity-30 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-image-line text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">Easy Visual Aid Creation</h4>
                </div>
                <p className="text-sm opacity-90">
                  Generate simple line-art drawings that can be easily copied onto a blackboard or used as visual aids.
                </p>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div 
                className="bg-black bg-opacity-30 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-calendar-check-line text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">AI-Powered Weekly Lesson Planner</h4>
                </div>
                <p className="text-sm opacity-90">
                  Structure an entire week's activities for different grades in minutes, saving valuable planning time.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Additional Solution Image */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4">
              <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                <div className="flex items-center justify-center">
                  <img 
                    src="shaha1.png" 
                    alt="Sahayak Teaching Assistant Dashboard" 
                    className="max-w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Design Showcase */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Design Showcase</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* First Additional Image */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="sahayab.png" 
                      alt="Sahayak Teaching Assistant Interface Design" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Second Additional Image */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="sahayac.png" 
                      alt="Sahayak User Experience Flow" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Impact */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">75%</div>
                <p className="text-xs opacity-90">Time saved on preparation</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">12+</div>
                <p className="text-xs opacity-90">Indian languages supported</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">10K+</div>
                <p className="text-xs opacity-90">Students benefited</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">4.9/5</div>
                <p className="text-xs opacity-90">Teacher satisfaction rating</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-30 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Educational Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3">
                  <i className="ri-time-line text-3xl text-teal-400 block mb-2"></i>
                  <p className="text-xs">More Teaching Time</p>
                </div>
                <div className="p-3">
                  <i className="ri-translate-2 text-3xl text-purple-400 block mb-2"></i>
                  <p className="text-xs">Inclusive Local Education</p>
                </div>
                <div className="p-3">
                  <i className="ri-focus-3-line text-3xl text-blue-400 block mb-2"></i>
                  <p className="text-xs">Personalized Learning</p>
                </div>
                <div className="p-3">
                  <i className="ri-team-line text-3xl text-amber-400 block mb-2"></i>
                  <p className="text-xs">Multi-Grade Support</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <motion.div 
              className="bg-black bg-opacity-20 p-6 rounded-lg border border-teal-900 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-start">
                <i className="ri-double-quotes-l text-4xl text-teal-400 mr-4 mt-2"></i>
                <div>
                  <p className="text-sm sm:text-base opacity-90 italic mb-4">
                    "Sahayak has transformed how I teach. Creating multi-level worksheets used to take me hours, but now I can do it instantly. The visual aids feature is incredible for explaining concepts on our blackboard, and having everything in Kannada means my students truly understand what they're learning."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="text-teal-300 font-bold">S</span>
                    </div>
                    <div>
                      <p className="font-bold">Sunita Patil</p>
                      <p className="text-xs opacity-70">Primary Teacher, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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

export default SahayakProcess; 