import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function Experience() {
  const techStackUnicourt = [
    { name: 'Figma', icon: 'ri-figma-fill' },
    { name: 'Miro', icon: 'ri-artboard-line' },
    { name: 'Jira', icon: 'ri-kanban-view' },
    { name: 'Cursor', icon: 'ri-cursor-line' },
    { name: 'Cypress', icon: 'ri-test-tube-line' },
    { name: 'ChatGPT', icon: 'ri-chat-3-line' },
    { name: 'Gemini', icon: 'ri-star-line' }
  ];

  const skillsHailabs = [
    { name: 'Figma', icon: 'ri-figma-fill' },
    { name: 'User Research', icon: 'ri-search-line' },
    { name: 'Prototyping', icon: 'ri-layout-line' },
    { name: 'Gamification', icon: 'ri-gamepad-line' }
  ];

  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">


      {/* Spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">
        {/* Background pattern */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.6, backgroundColor: 'rgba(20, 20, 20, 0.7)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="experienceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

        {/* Experience Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Page Header */}
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
              Professional Experience
            </h1>
            <p className="text-xl text-white opacity-80 mt-2">Building Products That Matter</p>
            <p className="text-lg text-white opacity-70 mt-1">Where design meets innovation and strategic impact</p>
            
            <div className="w-24 h-1 mx-auto mt-6" style={{ 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)' 
            }}></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
            
            {/* Experience Cards */}
            <div className="space-y-8 md:space-y-12 relative">
              
              {/* UniCourt Experience */}
              <motion.div 
                className="flex flex-col md:flex-row items-start md:items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <motion.div 
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 sm:p-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4 md:justify-end">
                      <div className="bg-teal-900 rounded-full w-12 h-12 flex items-center justify-center mr-3 md:ml-3 md:mr-0 md:order-2">
                        <i className="ri-building-line text-xl text-teal-300"></i>
                      </div>
                      <div className="md:text-right md:order-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">UniCourt</h3>
                        <p className="text-teal-400 font-medium">Product Designer, UI/UX Engineer</p>
                        <p className="text-white opacity-60 text-sm">2022 - Present</p>
                      </div>
                    </div>
                    
                    <p className="text-white opacity-90 mb-6 text-sm sm:text-base leading-relaxed">
                      Evolved from UI/UX design into product strategy, leading cross-functional teams to create cohesive design systems and implement AI-powered prototyping workflows that bridge the gap between design and development.
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-teal-300 mb-4 flex items-center md:justify-end">
                        <span className="md:order-2">Key Achievements</span>
                        <i className="ri-trophy-line mr-2 md:ml-2 md:mr-0 md:order-1"></i>
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-teal-400">
                          <p className="text-sm opacity-90">
                            <strong>Design System Architecture:</strong> Built a comprehensive design system from scratch that unified 5 product lines, including component documentation, interaction patterns, and accessibility guidelines.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-blue-400">
                          <p className="text-sm opacity-90">
                            <strong>AI-Powered Prototyping:</strong> Successfully implemented AI prototype workflows with custom design system without losing consistency, including automation of design system implementation that reduced feature validation cycles by 40%.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-purple-400">
                          <p className="text-sm opacity-90">
                            <strong>User Experience Transformation:</strong> Transformed complex backend applications into intuitive interfaces for support and QA teams, resulting in a 45% reduction in task completion time.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-amber-400">
                          <p className="text-sm opacity-90">
                            <strong>Frontend Development Bridge:</strong> Bridged design and development by implementing frontend solutions with Angular and Tailwind CSS, reducing handoff friction by 30%.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-green-400">
                          <p className="text-sm opacity-90">
                            <strong>Enterprise Widget Innovation:</strong> Designed customizable API-powered widgets for enterprise clients, increasing integration adoption by 35% and creating new revenue streams.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold text-white mb-3 flex items-center md:justify-end">
                        <span className="md:order-2">Tech Stack</span>
                        <i className="ri-tools-line mr-2 md:ml-2 md:mr-0 md:order-1"></i>
                      </h4>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {techStackUnicourt.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            className="flex items-center bg-black bg-opacity-40 px-3 py-1 rounded-full text-xs"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <i className={`${tech.icon} mr-1 text-teal-400`}></i>
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <div className="md:w-0 relative flex justify-center">
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 items-center justify-center z-10 border-4 border-custom-dark">
                    <i className="ri-briefcase-fill text-xl text-white"></i>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>

              {/* HAILABS Experience */}
              <motion.div 
                className="flex flex-col md:flex-row items-start md:items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                
                {/* Timeline Dot */}
                <div className="md:w-0 relative flex justify-center">
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 items-center justify-center z-10 border-4 border-custom-dark">
                    <i className="ri-graduation-cap-fill text-xl text-white"></i>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <motion.div 
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 sm:p-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                        <i className="ri-lightbulb-line text-xl text-purple-300"></i>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">HAILABS</h3>
                        <p className="text-purple-400 font-medium">Founding Designer (Part-time)</p>
                        <p className="text-white opacity-60 text-sm">2021 - 2022</p>
                      </div>
                    </div>
                    
                    <p className="text-white opacity-90 mb-6 text-sm sm:text-base leading-relaxed">
                      Led the complete redesign of an educational platform teaching data science and machine learning to children, focusing on age-appropriate gamification and cognitive accessibility that makes complex concepts engaging and understandable.
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-purple-300 mb-4 flex items-center">
                        <i className="ri-star-line mr-2"></i>
                        <span>Key Achievements</span>
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 border-purple-400">
                          <p className="text-sm opacity-90">
                            <strong>Child-Centric Design Revolution:</strong> Redesigned the entire learning experience with age-appropriate visual metaphors and interactive elements that increased student engagement by 60%.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 border-pink-400">
                          <p className="text-sm opacity-90">
                            <strong>Gamification Strategy:</strong> Developed a comprehensive gamification framework that transformed complex data science concepts into digestible, game-like experiences for young learners.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 border-blue-400">
                          <p className="text-sm opacity-90">
                            <strong>Accessibility Innovation:</strong> Implemented cognitive accessibility guidelines that made machine learning concepts accessible to children aged 8-14, setting new standards in educational technology.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-black bg-opacity-30 rounded-lg border-l-2 border-green-400">
                          <p className="text-sm opacity-90">
                            <strong>Founding Impact:</strong> As the founding designer, established the design culture and visual identity that guided the product vision and attracted initial funding and partnerships.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-bold text-white mb-3 flex items-center">
                        <i className="ri-palette-line mr-2"></i>
                        <span>Core Skills</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillsHailabs.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            className="flex items-center bg-black bg-opacity-40 px-3 py-1 rounded-full text-xs"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <i className={`${skill.icon} mr-1 text-purple-400`}></i>
                            <span>{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Impact Summary */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Career Impact at a Glance</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400 mb-1">5</div>
                  <p className="text-xs sm:text-sm opacity-80">Product Lines<br/>Unified</p>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1">40%</div>
                  <p className="text-xs sm:text-sm opacity-80">Faster Feature<br/>Validation</p>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1">45%</div>
                  <p className="text-xs sm:text-sm opacity-80">Task Time<br/>Reduction</p>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1">35%</div>
                  <p className="text-xs sm:text-sm opacity-80">Integration<br/>Adoption</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to portfolio button */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Link to="/" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white text-sm sm:text-base px-6 py-3 rounded-lg flex items-center transition-all duration-300">
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

export default Experience; 