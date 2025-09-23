import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">


      {/* Spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">
        {/* Background pattern */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.1, backgroundColor: 'rgba(240, 240, 240, 0.3)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="experienceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
                <stop offset="50%" stopColor="rgba(0, 0, 0, 0.05)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.02)" />
              </linearGradient>
            </defs>
            
            <g>
              <circle cx="50%" cy="50%" r="10%" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(0, 0, 0, 0.03)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="50%" fill="none" stroke="rgba(0, 0, 0, 0.01)" strokeWidth="1" />
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-700 mt-2">Building Products That Matter</p>
            <p className="text-lg text-gray-600 mt-1">Where design meets innovation and strategic impact</p>
            
            <div className="w-24 h-1 mx-auto mt-6" style={{ 
              background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' 
            }}></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400"></div>
            
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
                <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <motion.div 
                    className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
                    style={{
                      background: 'white',
                      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-black border border-black rounded-full w-12 h-12 flex items-center justify-center mr-3 shadow-lg">
                        <i className="ri-building-line text-xl text-white"></i>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">UniCourt</h3>
                        <p className="text-teal-600 font-medium">Product Designer, UI/UX Engineer</p>
                        <p className="text-gray-600 text-sm">2022 - Present</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                      Evolved from UI/UX design into product strategy, leading cross-functional teams to create cohesive design systems and implement AI-powered prototyping workflows that bridge the gap between design and development.
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-teal-600 mb-4 flex items-center">
                        <i className="ri-trophy-line mr-2"></i>
                        <span>Key Achievements</span>
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-teal-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Design System Architecture:</strong> Built a comprehensive design system from scratch that unified 5 product lines, including component documentation, interaction patterns, and accessibility guidelines.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-blue-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>AI-Powered Prototyping:</strong> Successfully implemented AI prototype workflows with custom design system without losing consistency, including automation of design system implementation that reduced feature validation cycles by 40%.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-purple-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>User Experience Transformation:</strong> Transformed complex backend applications into intuitive interfaces for support and QA teams, resulting in a 45% reduction in task completion time.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-amber-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Frontend Development Bridge:</strong> Bridged design and development by implementing frontend solutions with Angular and Tailwind CSS, reducing handoff friction by 30%.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-green-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Enterprise Widget Innovation:</strong> Designed customizable API-powered widgets for enterprise clients, increasing integration adoption by 35% and creating new revenue streams.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <i className="ri-tools-line mr-2"></i>
                        <span>Tech Stack</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techStackUnicourt.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            className="flex items-center bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <i className={`${tech.icon} mr-1 text-teal-600`}></i>
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <div className="md:w-0 relative flex justify-center">
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 items-center justify-center z-10 border-4 border-white shadow-lg">
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
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 items-center justify-center z-10 border-4 border-white shadow-lg">
                    <i className="ri-graduation-cap-fill text-xl text-white"></i>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <motion.div 
                    className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
                    style={{
                      background: 'white',
                      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-black border border-black rounded-full w-12 h-12 flex items-center justify-center mr-3 shadow-lg">
                        <i className="ri-lightbulb-line text-xl text-white"></i>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">HAILABS</h3>
                        <p className="text-purple-600 font-medium">Founding Designer (Part-time)</p>
                        <p className="text-gray-600 text-sm">2021 - 2022</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                      Led the complete redesign of an educational platform teaching data science and machine learning to children, focusing on age-appropriate gamification and cognitive accessibility that makes complex concepts engaging and understandable.
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-purple-600 mb-4 flex items-center">
                        <i className="ri-star-line mr-2"></i>
                        <span>Key Achievements</span>
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-purple-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Child-Centric Design Revolution:</strong> Redesigned the entire learning experience with age-appropriate visual metaphors and interactive elements that increased student engagement by 60%.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-pink-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Gamification Strategy:</strong> Developed a comprehensive gamification framework that transformed complex data science concepts into digestible, game-like experiences for young learners.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-blue-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Accessibility Innovation:</strong> Implemented cognitive accessibility guidelines that made machine learning concepts accessible to children aged 8-14, setting new standards in educational technology.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg border-l-2 border-green-400 border-dashed">
                          <p className="text-sm text-gray-700">
                            <strong>Founding Impact:</strong> As the founding designer, established the design culture and visual identity that guided the product vision and attracted initial funding and partnerships.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <i className="ri-palette-line mr-2"></i>
                        <span>Core Skills</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillsHailabs.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            className="flex items-center bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <i className={`${skill.icon} mr-1 text-purple-600`}></i>
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


        </div>
      </main>
    </div>
  );
}

export default Experience; 