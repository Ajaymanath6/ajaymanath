import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function CyberSecurityProcess() {
  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">


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

        {/* Cyber Security Process Content */}
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
              Prevalent AI Cybersecurity Dashboard
            </h1>
            <p className="text-xl text-white opacity-80 mt-2">Cyber Risk Intelligence Dashboard</p>
            <p className="text-lg text-white opacity-70 mt-1">Real-time threat monitoring and AI-powered risk assessment for enterprise security teams</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="bg-custom-dark px-3 py-1 rounded text-white text-sm font-bold">
                2025
              </div>
              <div className="flex space-x-3">
                <a 
                  href="https://prevalent-5474cf.gitlab.io/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm px-3 py-1 rounded"
                >
                  <i className="ri-external-link-line mr-1"></i>
                  View Live Project
                </a>
                <a 
                  href="https://www.figma.com/file/cybersecurity-design" 
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
              <span className="badge badge-tool text-xs sm:text-sm">React</span>
              <span className="badge badge-tool text-xs sm:text-sm">TypeScript</span>
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
                      <p className="text-white opacity-80 mb-4">We identified the complex challenges faced by security teams in monitoring and managing enterprise cybersecurity risks.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-user-voice-line text-xl text-teal-400 mr-2"></i>
                          <span className="text-sm">10 Security Professional Interviews</span>
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
                          <span className="text-teal-300 font-bold">M</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Michael Chen</h4>
                          <p className="text-xs opacity-70">CISO, Financial Services</p>
                        </div>
                      </div>
                      <p className="text-sm opacity-90 italic border-l-2 border-teal-400 pl-3">
                        "We're drowning in security alerts but starving for actionable insights. I need to quickly understand our overall risk posture and prioritize where to focus our limited resources."
                      </p>
                    </motion.div>
                    
                    {/* Security Professional Interview Questions */}
                    <motion.div 
                      className="mt-4 bg-black bg-opacity-40 p-4 rounded-lg"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <h4 className="font-bold mb-3 text-sm flex items-center">
                        <i className="ri-questionnaire-line text-teal-400 mr-2"></i>
                        Security Professional Interview Questions
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold">Q: How do you currently monitor your organization's cybersecurity risk?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"We use multiple tools that don't talk to each other, resulting in siloed data and an incomplete picture."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: What's your biggest challenge in security risk management?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Translating technical vulnerabilities into business risk that executives understand and will act on."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: How much time do you spend gathering data for security reporting?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Too much - about 20-30% of our team's time is spent on manual data collection and report generation."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: Would you use AI to help with security analysis?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Absolutely, if it can help cut through the noise and identify meaningful patterns we might miss."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: What metrics are most important for your security program?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"We need a way to track our risk posture over time, see trends, and measure the impact of our security investments."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: How do you prioritize security issues?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"It's often subjective or based on limited factors like CVSS scores, which don't account for our specific business context."</p>
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
                        "Security teams need a consolidated view of their organization's cybersecurity risk posture that provides clear, actionable insights, helps prioritize threats based on business context, and communicates risk effectively to both technical and executive stakeholders."
                      </p>
                      
                      <div className="mt-4">
                        <h5 className="text-xs font-bold mb-2 text-right">Key Pain Points:</h5>
                        <ul className="space-y-2 text-right">
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Fragmented security data across tools</span>
                            <i className="ri-split-cells-horizontal ml-2 text-teal-400"></i>
                          </li>
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Poor risk visibility and prioritization</span>
                            <i className="ri-eye-line ml-2 text-teal-400"></i>
                          </li>
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Time-consuming manual reporting</span>
                            <i className="ri-file-chart-line ml-2 text-teal-400"></i>
                          </li>
                          <li className="text-xs opacity-80 flex items-center justify-end">
                            <span>Difficulty communicating with executives</span>
                            <i className="ri-chat-1-line ml-2 text-teal-400"></i>
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
                      <p className="text-white opacity-80">We distilled our research findings into a clear problem statement and identified key opportunity areas for the dashboard.</p>
                      
                      <div className="mt-4 space-y-3">
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center">
                            <i className="ri-dashboard-line text-xl text-teal-400 mr-2"></i>
                            <span className="text-sm">Consolidated risk visibility</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center">
                            <i className="ri-ai-generate text-xl text-teal-400 mr-2"></i>
                            <span className="text-sm">AI-powered risk analysis</span>
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
                      <p className="text-white opacity-80 mb-4">Exploring potential solutions for enhancing cybersecurity risk visibility and management.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-lightbulb-flash-line text-xl text-purple-400 mr-2"></i>
                          <span className="text-sm">35+ Solution Concepts</span>
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
                            <i className="ri-dashboard-3-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Unified Risk Dashboard</h5>
                          <p className="text-xs opacity-80">Real-time risk score visualization</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-ai-generate text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">AI Risk Analyzer</h5>
                          <p className="text-xs opacity-80">Smart threat assessment and prioritization</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-bar-chart-grouped-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Industry Benchmarks</h5>
                          <p className="text-xs opacity-80">Compare security posture against peers</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-alert-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Smart Alerts</h5>
                          <p className="text-xs opacity-80">Contextual threat notifications</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 4: PROTOTYPE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-blue-400 text-sm font-bold tracking-wider">PHASE 04</span>
                      <h3 className="text-2xl font-bold mb-4">Prototype</h3>
                      <div className="p-4 bg-black bg-opacity-30 rounded-lg mb-4">
                        <h4 className="font-bold mb-2 flex items-center">
                          <i className="ri-artboard-line text-blue-400 mr-2"></i>
                          Prototype Evolution
                        </h4>
                        <table className="w-full text-xs">
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="py-2"><strong>Figma</strong></td>
                              <td className="py-2 opacity-80">Initial dashboard wireframes</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2"><strong>Design System</strong></td>
                              <td className="py-2 opacity-80">Components for risk visualization</td>
                            </tr>
                            <tr>
                              <td className="py-2"><strong>React/TypeScript</strong></td>
                              <td className="py-2 opacity-80">Interactive dashboard prototype</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="p-3 bg-black bg-opacity-40 rounded border border-blue-900">
                        <p className="text-xs italic opacity-90">
                          <strong>User-Centered Design:</strong> 3 rounds of iterations with security professionals
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-blue-400 text-black items-center justify-center z-10">
                      <i className="ri-shield-check-line text-xl"></i>
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
                            src="prevalantai.png" 
                            alt="Prevalent AI Cybersecurity Dashboard Prototype" 
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
                      <p className="text-white opacity-80 mb-4">Validating dashboard effectiveness with security professionals and executives.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-test-tube-line text-xl text-amber-400 mr-2"></i>
                          <span className="text-sm">8 Security Teams Tested</span>
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
                              
                              {/* Progress arc - 90% of the circle */}
                              <path 
                                d="M48,8 A40,40 0 1,1 11.432,68.634"
                                fill="none" 
                                stroke="#F59E0B" 
                                strokeWidth="8" 
                                strokeLinecap="round"
                              />
                              
                              {/* Inner indicator */}
                              <circle cx="48" cy="48" r="32" fill="#111827" />
                              
                              {/* Text */}
                              <text x="48" y="53" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">90%</text>
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
                              
                              {/* Progress arc - 9.6/10 = 96% of the circle */}
                              <path 
                                d="M48,8 A40,40 0 1,1 8.544,55.428"
                                fill="none" 
                                stroke="#10B981" 
                                strokeWidth="8" 
                                strokeLinecap="round"
                              />
                              
                              {/* Inner indicator */}
                              <circle cx="48" cy="48" r="32" fill="#111827" />
                              
                              {/* Text */}
                              <text x="48" y="53" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">9.6</text>
                            </svg>
                          </div>
                          <p className="text-center text-xs">Satisfaction Score (of 10)</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-black bg-opacity-40 rounded border border-amber-900">
                        <p className="text-xs italic opacity-90">
                          "Finally, a risk dashboard that speaks both technical and business language. The AI assistant is like having an expert analyst on staff 24/7. This would transform how we communicate security issues to our executive team."
                        </p>
                        <p className="text-right text-xs opacity-70 mt-1">— Security Director, Financial Services</p>
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
            
            {/* Solution Screenshots */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* First Solution Image */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4">
                  <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                    <div className="flex items-center justify-center">
                      <img 
                        src="prevalantai.png" 
                        alt="Cybersecurity Dashboard" 
                        className="max-w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Second Solution Image */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4">
                  <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                    <div className="flex items-center justify-center">
                      <img 
                        src="prevalantai1.png" 
                        alt="Advanced Threat Analytics" 
                        className="max-w-full h-auto rounded"
                      />
                    </div>
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
                        src="cyba1.png" 
                        alt="AI Security Expert Interface Design" 
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
                        src="cyba2.png" 
                        alt="Cybersecurity Actions and Recommendations" 
                        className="max-w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
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
                    <i className="ri-dashboard-3-line text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">Overall Risk Posture Trend</h4>
                </div>
                <p className="text-sm opacity-90">
                  Real-time visualization of your organization's cybersecurity risk score over time, helping you track if your security posture is improving or deteriorating.
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
                    <i className="ri-ai-generate text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">AI Security Expert</h4>
                </div>
                <p className="text-sm opacity-90">
                  Interactive AI assistant that provides analysis on current risks, suggests specific actions to reduce risk, and answers security-related questions.
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
                    <i className="ri-bubble-chart-line text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">Risk Factor Breakdown</h4>
                </div>
                <p className="text-sm opacity-90">
                  Detailed analysis of risk components including vulnerability management, third-party risk, and security controls with percentage breakdowns.
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
                    <i className="ri-bar-chart-grouped-line text-xl text-teal-300"></i>
                  </div>
                  <h4 className="font-bold">Industry Benchmark Comparison</h4>
                </div>
                <p className="text-sm opacity-90">
                  Compare your organization's security posture against industry peers to identify areas where you're ahead or behind the curve.
                </p>
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
                <div className="text-3xl font-bold text-teal-400 mb-1">-65%</div>
                <p className="text-xs opacity-90">Reporting time reduction</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">42%</div>
                <p className="text-xs opacity-90">Better remediation rate</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">+89%</div>
                <p className="text-xs opacity-90">Executive understanding</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">4.8/5</div>
                <p className="text-xs opacity-90">Professional rating</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-30 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Security Improvements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3">
                  <i className="ri-time-line text-3xl text-teal-400 block mb-2"></i>
                  <p className="text-xs">Faster Response Time</p>
                </div>
                <div className="p-3">
                  <i className="ri-bubble-chart-fill text-3xl text-purple-400 block mb-2"></i>
                  <p className="text-xs">Better Risk Visibility</p>
                </div>
                <div className="p-3">
                  <i className="ri-chat-4-line text-3xl text-blue-400 block mb-2"></i>
                  <p className="text-xs">Improved Communication</p>
                </div>
                <div className="p-3">
                  <i className="ri-shield-check-line text-3xl text-amber-400 block mb-2"></i>
                  <p className="text-xs">Enhanced Protection</p>
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
                    "The Prevalent AI Cybersecurity Dashboard has completely transformed how we manage and communicate security risk. The AI assistant helps us quickly identify critical issues that would have taken days to surface manually. Our executive team finally understands our security posture without needing to wade through technical jargon."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="text-teal-300 font-bold">M</span>
                    </div>
                    <div>
                      <p className="font-bold">Michael Chen</p>
                      <p className="text-xs opacity-70">CISO, Financial Services</p>
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

export default CyberSecurityProcess; 