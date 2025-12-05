import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import faceImg from './face.png';

function EnterpriseDesignSystemProcess() {
  const navigate = useNavigate();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
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
              {/* Left Column - Title */}
              <div className="flex flex-col items-start">
                <h1 className="text-3xl sm:text-4xl font-bold text-black">
                  A Unified Design Language for Artemis
                </h1>
                    </div>

              {/* Right Column - Role and Timeline */}
              <div className="flex flex-col items-start lg:items-end">
                <div className="flex flex-row gap-8">
                    <div>
                    <h3 className="text-sm font-semibold text-black opacity-60 mb-1">
                      Role
                    </h3>
                    <p className="text-base text-black">Lead Product designer</p>
              </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black opacity-60 mb-1">
                      Timeline
                    </h3>
                    <p className="text-base text-black">2 Months</p>
                    </div>
                  </div>
                    </div>
                  </div>
          </motion.div>

          {/* Typography Image with Blue/White Gradient Background */}
          <motion.div
            className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden h-[600px] mb-10 relative"
            style={{
              background: `linear-gradient(135deg, #3b82f6 0%, #60a5fa 30%, #93c5fd 60%, #dbeafe 80%, #ffffff 100%)`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <div
              className="absolute"
              style={{
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                overflow: 'visible',
              }}
            >
              <img
                src="typo.png"
                alt="Type Scale"
                style={{
                  width: 'calc(150% - 80px)',
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'right top',
                  position: 'absolute',
                  top: '40px',
                  left: '40px',
                  right: '40px',
                  bottom: '40px',
                  minHeight: 'calc(100% - 80px)',
                }}
              />
              </div>
          </motion.div>

          {/* Intro Narrative + Character Conversation - 3 Grid Layout with Floating Conversation */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-[120px] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight">
                Rebuilding a <span style={{ color: '#2F55D9' }}>Design Language</span>, Reuniting Teams
              </h2>
            </div>
            
            {/* Grid 2: Content */}
            <div className="space-y-4 text-black">
              <p className="text-base leading-relaxed">
                I had joined Courtbook as a product designer, and we were revamping our product and coming up with two lines of products: one normal version and one pro version.
              </p>
              <p className="text-base leading-relaxed">
                My manager, Antonio, asked me to start working on a design system to bring a cohesive experience across both product lines. This wasn't just about pixels; it was about building a shared language that would unite our teams and ensure consistency across our entire product ecosystem.
              </p>
            </div>

            {/* Grid 3: Manager Image */}
            <div className="relative flex flex-col items-end justify-end text-right">
              <img
                src="manager.png"
                alt="Manager"
                className="w-24 h-24 rounded-lg object-cover relative z-0"
              />
              <span className="mt-2 text-xs font-medium text-black/70">
                Product Manager
              </span>
              </div>
              
            {/* Floating conversation overlay with arrow - appears on scroll, doesn't take grid space */}
            <motion.div
              className="absolute right-28 top-1/2 transform -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div 
                className="relative rounded-lg p-4 shadow-xl max-w-[220px] border border-gray-200"
                style={{
                  background: 'linear-gradient(135deg, #fefefe 0%, #f8f8f8 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <p className="text-xs text-black leading-relaxed">
                  "The platform's growing fast but the design's all over the place. We need consistency. Can you help us build a design system for Artemis?"
                </p>
                {/* Arrow pointing right to manager */}
                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                  <div 
                    className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px]"
                    style={{ borderLeftColor: '#f8f8f8' }}
                  ></div>
              </div>
            </div>
            </motion.div>
          </motion.div>

          {/* Duplicate Design System Final Visual - Below Rebuilding a Design Language */}
          <motion.div
            className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src="show1.png"
              alt="Design System Final Visual"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>

          {/* The Foundation Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-bold text-black">
              The <span style={{ color: '#2F55D9' }}>Foundation</span>
            </h2>
            <div className="space-y-6 text-black max-w-2xl">
              <p className="text-[16px] leading-relaxed">
                I looked at our old app—designed 8 years ago with outdated Material Design, Angular components with heavy shadows, and inconsistent typography. We had won awards for best legal tech innovation, but our design didn't reflect that. It needed to speak to our modern approach to solving legal data challenges.
              </p>
              <p className="text-[16px] leading-relaxed">
                The only way forward was clear: build a system that could sync design and development in one unified flow.
              </p>
                </div>
              </motion.div>

          {/* Two Placeholder Images Grid - Second Set */}
              <motion.div 
            className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
              <motion.div 
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
            >
              <img
                src="show1.png"
                alt="Design System Visual 4"
                className="w-full h-auto object-contain rounded-2xl"
              />
              </motion.div>
            {/* Product Designer Conversation Bubble - Second Column */}
            <div className="relative flex flex-col items-end justify-center">
              <img
                src={faceImg}
                alt="Product Designer"
                className="w-24 h-24 rounded-lg object-cover relative z-0"
              />
              <span className="mt-2 text-xs font-medium text-black/70">
                Product Designer (Me)
              </span>
              {/* Floating conversation overlay with arrow - appears on scroll, positioned just above image */}
              <motion.div 
                className="absolute right-28 bottom-full mb-1 z-10"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div 
                  className="relative rounded-lg p-4 shadow-xl max-w-[220px] border border-gray-200"
                  style={{
                    background: 'linear-gradient(135deg, #fefefe 0%, #f8f8f8 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p className="text-xs text-black leading-relaxed">
                    "I used Cursor to convert our Figma components into JSON specs. Then I wrote a script that scans pages and matches components against those specs, generating reports on what's missing or off."
                  </p>
                  {/* Arrow pointing right to my avatar */}
                  <div className="absolute right-0 bottom-4 transform translate-x-full">
                    <div 
                      className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px]"
                      style={{ borderLeftColor: '#f8f8f8' }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
            
          {/* Finding the Identity Section - 3 Grid Layout */}
                    <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-[120px] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight">
                Finding the <span style={{ color: '#2F55D9' }}>Identity</span>
              </h2>
            </div>

            {/* Grid 2: Content */}
            <div className="space-y-4 text-black">
              <p className="text-[16px] leading-relaxed">
                Before diving into design, I needed to understand what our brand truly stood for. I studied the context from everything we had built—our APIs, our data-first approach, and our vision for the two product lines.
              </p>
              <p className="text-[16px] leading-relaxed">
                The identity needed to reflect our modern approach to solving legal data challenges while maintaining the trust we had earned. I sat with the brand designer and we discussed how the new UI themes should be, thinking through accessibility, brand awareness, and all those important considerations.
              </p>
            </div>

            {/* Grid 3: Brand Designer Image with Conversation */}
            <div className="relative flex flex-col items-end justify-end text-right">
              <img
                src="branddesgner.png"
                alt="Brand Designer"
                className="w-24 h-24 rounded-lg object-cover relative z-0"
              />
              <span className="mt-2 text-xs font-medium text-black/70">
                Brand Designer
              </span>
              {/* Floating conversation overlay with arrow - appears on scroll, positioned to the left of image */}
              <motion.div
                className="absolute right-28 top-1/2 transform -translate-y-1/2 z-10"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div 
                  className="relative rounded-lg p-4 shadow-xl max-w-[220px] border border-gray-200"
                  style={{
                    background: 'linear-gradient(135deg, #fefefe 0%, #f8f8f8 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p className="text-xs text-black leading-relaxed">
                    "I've mapped out emotions, tone, and purpose. Here's the strategy on what color to use where. Let me help you create the color palettes."
                  </p>
                  {/* Arrow pointing right to brand designer */}
                  <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                    <div 
                      className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px]"
                      style={{ borderLeftColor: '#f8f8f8' }}
                    ></div>
                            </div>
                            </div>
              </motion.div>
                          </div>
          </motion.div>

          {/* Redefining the look Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-bold text-black">
              <span style={{ color: '#2F55D9' }}>Redefining</span> the look
            </h2>
            <div className="space-y-10 text-black max-w-2xl">
              {/* Typography */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                    <i className="ri-font-size text-lg text-[#2F55D9]"></i>
                  </span>
                  Typography
                </h3>
                <p className="text-[16px] leading-relaxed">
                  We chose Lora for headings and IBM Plex for body text. Lora brings elegance and readability to our headings, while IBM Plex provides clarity and consistency for data-heavy screens, making every label feel intentional, not default.
                          </p>
                        </div>
                        
              {/* Color System */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                    <i className="ri-palette-line text-lg text-[#2F55D9]"></i>
                  </span>
                  Color System
                </h3>
                <p className="text-[16px] leading-relaxed">
                  The color system was derived from our primary blue, expanded into a monochromatic scale for hierarchy and depth. This kept the interface cohesive while giving us enough range for states, emphasis, and data visualization.
                </p>
                        </div>
                        
              {/* Iconography */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                    <i className="ri-shapes-line text-lg text-[#2F55D9]"></i>
                  </span>
                  Iconography
                </h3>
                <p className="text-[16px] leading-relaxed">
                  We adopted Google Symbols and icon sets for consistency with familiar patterns and strong accessibility support. With these choices, the visual system feels modern, focused, and scalable across all surfaces.
                </p>
                        </div>
                      </div>
                    </motion.div>
                  
          {/* Duplicate Design System Visual 8 - Below Redefining the look */}
          <div className="mt-10 space-y-10">
            {/* First Row - 2 Columns */}
                  <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                <img
                  src="show8.png"
                  alt="Design System Visual 8"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                  </motion.div>
              <motion.div
                className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src="show9.png"
                  alt="Design System Visual 8"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Second Row - 1 Column */}
            <motion.div
              className="grid grid-cols-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="Icons.png"
                  alt="Design System Visual 8"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            </motion.div>
                    </div>

          {/* Grid Rows Below Redefining the look */}
          {/* First Row - 2 Columns */}
                    <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      >
            {/* Placeholder for 2 column items */}
          </motion.div>

          {/* Title and Content Grid Section - Atomic Design System */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-bold text-black leading-tight">
              Building
              <br />
              <span style={{ color: '#2F55D9' }}>Scalable System</span>
            </h2>
            <div className="space-y-6 text-black">
              <p className="text-[16px] leading-relaxed">
                I built the platform design system from the ground up using an atomic design approach. Before creating anything new, I audited every existing component across the product—buttons, tables, inputs, and modals—to understand what we already had.
              </p>
              <p className="text-[16px] leading-relaxed">
                Atoms became the basics (buttons, inputs, toggles), molecules combined them into forms and cards, and organisms grew into modals, tables, and layout patterns. Each piece was tokenized—color, typography, spacing, states—so everything was reusable, documented, and connected. Design stopped being a guessing game and became a shared language between design and engineering.
                          </p>
                        </div>
          </motion.div>

          {/* Four Column Grid - Below Building Scalable System */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Placeholder for grid items - can be filled with content later */}
                      </motion.div>

          {/* Four Placeholder Images Grid - 2x2 Below Redefining */}
                  <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
              <img
                src="show3.png"
                alt="Design System Visual 5"
                className="w-full h-auto object-contain rounded-2xl"
              />
                  </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="show4.png"
                alt="Design System Visual 6"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="show5.png"
                alt="Design System Visual 7"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="show6.png"
                alt="Design System Visual 8"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Four Placeholder Images Grid */}
          {/* Removed extra image grid as requested */}

          {/* Turnaround / Adoption Section - 2 Grid */}
                    <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight">
                <span className="text-black">Design</span>
                <br />
                <span style={{ color: '#2F55D9' }}>System Adoption</span>
              </h2>
                        </div>
                        
            {/* Grid 2: Story Content */}
            <div className="space-y-4 text-black max-w-2xl">
              <p className="text-[16px] leading-relaxed">
                The next challenge wasn&apos;t designing components—it was helping people actually use them. So I gave simple demos to designers and developers on how to build with the design system components in their everyday work.
              </p>
                      </div>
                    </motion.div>
                  
          {/* AI Workflows Section - 3 Grid */}
                    <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-[120px] relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
          >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight">
                <span style={{ color: '#2F55D9' }}>AI-powered</span>
                <br />
                <span className="text-black">Workflows</span>
              </h2>
              {/* Figma → Cursor → Dev pipeline badges */}
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-black/70">
                {/* Figma Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                  <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA51BMVEUwMzwvMjovMjsmMToXMT1MNjh8OzSCSUlSPEHDRyf5Txz0Tg7/cmLNYVcfMTyqQyvyTh7xSxWxWFEJLDcuMTnKSCXXZVpTNTbzSwD/cmAzLx+tRkvdUXvSWUfRcG7QipqpZms9JyYuMDgsLTSDTs6iWf+nW/8AJAUAl8wAwP8tLzcmLil2SLWkVf8PhaYavP4jhrIvJikfLBupUP8AuO8vHhsGncktLjZCNVwaRkYqSFwrLDM2IEBwWbWDguAkHhAsLjYsLTUsJjITp20A1HsuEy0uIjIbk2UE2IgKz4MoS0ErLDQqODnoj8cFAAABZklEQVR4AaTMVQLCMBAE0N1JoO6O0/sfkqnLLy+eFfmHThvMDHytQ6AK2MuVHHIt3wpABRPj+RSEg8hgMgfjxE8pY4jyGKQqOrIpzUEqlOYgtPDPQXAISEtb7dvWFigBSDmAaVI/CII2DLuuC11TlgyXUk7M7f6g+vl6f76mL8ueQ/pR+atrLJAchmEA6Jn+pGpAPggzM7j/f89JOqZNTLsBuFmE7biI6IJ+tW/x4dHm+PSMnuehH3yLoSVEsSck71Ff6Q7t14jSkKLmqIWHmy0xRW5uoK9sJWYacvohUXiI6JUVW4kZXbqqm5boLr7rXyp2faZVRmuWDeM0M0sVBEHVa25ZpnomW7f9IPalz+jEilcF/UDbhRNHPsmAoQc1wEAs+1skNwD0IPYtrpPEaR2+oqgBwHgeO13nCAOw4QsoGgNc79u03UcAQ5qNIa+MQPt1XY2pzFdUZaqKHU9fN3yr6l9M9QI6YW0Sw7c5lAAAAABJRU5ErkJggg==" 
                    alt="Figma" 
                    className="w-4 h-4"
                  />
                  <span>Figma</span>
                </span>
                {/* Arrow */}
                <i className="ri-arrow-right-line text-base text-black/50"></i>
                {/* Cursor Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                  <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUUEgsNCgAJBgAkIh1QT0o9OzYfHRgODAAYFg9FRD1ZWFNDQTw7OTRVVE8uLCVKSUQsKiMyMCobGRO8u7r09PTo6Ofh4N+BgX7///+hoJ3W1dLc29hoZ2PIx8R1dHCzsq5gX1tycW1tbGiXlpMAAABPX0V9AAAA0ElEQVR4Ab3RRYLEIAAAQYgnaNyDLP//4khcjzt9LRzwiyB8JMt2XO+e/SCMIoQwuDKEOCKEoE/0rBYlXyNozD6wh1g4xum3mCebQZRm+b4C+xsyVmbVVlFTuEPioHqhvGlcfEBCmJPO1Jb4hJ/Crsjapmn6GJ1x7Gtt595gN3Ttx0SMLiiVUiNK94yRHiZshdbsgM5IIzZaqaFDPljj3YLt34gc7DJ4Xrbv1KCwOf2mYcOguqJUAzM+OGcl0aBTHSUWuMvQTnEDHoLGQPD/vQEqLRggRsFNbQAAAABJRU5ErkJggg==" 
                    alt="Cursor" 
                    className="w-4 h-4"
                  />
                  <span>Cursor</span>
                </span>
                {/* Arrow */}
                <i className="ri-arrow-right-line text-base text-black/50"></i>
                {/* Dev Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                  <span>Dev</span>
                </span>
                      </div>
                </div>

            {/* Grid 2: Story Content */}
            <div className="space-y-4 text-black max-w-2xl">
              <p className="text-[16px] leading-relaxed">
                Once the design system was stable in Figma, I used Cursor—our AI code editor—to translate it into something development could verify automatically. Each component&apos;s properties were exported into JSON so they could be compared directly against the codebase.
              </p>
              <p className="text-[16px] leading-relaxed">
                I wrote a script that scanned every page, found instances of components like buttons, and matched them against the JSON spec. The script counted how many variants existed, which styles were missing, and produced a clear report for developers to act on.
              </p>
                    </div>

            {/* Grid 3: My Avatar with Conversation Bubble - Explaining Cursor Workflow */}
            <div className="relative flex flex-col items-end justify-end text-right">
              <img
                src={faceImg}
                alt="Product Designer"
                className="w-24 h-24 rounded-lg object-cover relative z-0"
              />
              <span className="mt-2 text-xs font-medium text-black/70">
                Product Designer (Me)
              </span>
              {/* Floating conversation overlay with arrow - appears on scroll, positioned to the left of image */}
                    <motion.div 
                className="absolute right-28 top-0 z-10"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div 
                  className="relative rounded-lg p-4 shadow-xl max-w-[220px] border border-gray-200"
                  style={{
                    background: 'linear-gradient(135deg, #fefefe 0%, #f8f8f8 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p className="text-xs text-black leading-relaxed">
                    "I used Cursor to convert our Figma components into JSON specs. Then I wrote a script that scans pages and matches components against those specs, generating reports on what's missing or off."
                  </p>
                  {/* Arrow pointing right to my avatar */}
                  <div className="absolute right-0 top-4 transform translate-x-full">
                    <div 
                      className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px]"
                      style={{ borderLeftColor: '#f8f8f8' }}
                    ></div>
                            </div>
                            </div>
              </motion.div>
                            </div>
          </motion.div>

          {/* Video Placeholder - Design Checker */}
          <motion.div
            className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden mb-10 p-6 bg-gradient-to-br from-gray-50 to-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video
              className="w-full h-auto rounded-2xl"
              controls
              playsInline
            >
              <source src="/Design Cheker.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* AI Prototyping Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight">
                <span style={{ color: '#2F55D9' }}>AI Prototyping</span>
              </h2>
                        </div>
                        
            {/* Grid 2: Story Content */}
            <div className="space-y-4 text-black max-w-2xl">
              <p className="text-[16px] leading-relaxed">
                For prototyping, we used the same system to generate interactive flows with our actual tech stack and version control. Developers could open a live, hosted prototype, click through real states, and implement with far fewer questions—the design–dev handoff felt almost 100% aligned.
              </p>
                      </div>
                    </motion.div>
                  
          {/* Video Placeholder - AI Prototype */}
                    <motion.div 
            className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden mb-10 p-6 bg-gradient-to-br from-gray-50 to-gray-100"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
          >
            <video
              className="w-full h-auto rounded-2xl"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/AI Prototype.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                    </motion.div>
                    
          {/* Conversation Bubbles Row - Both Designer and Developer */}
                    <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-[60px] px-[120px] relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left: My Avatar with Conversation Bubble - Asking */}
            <div className="relative flex flex-col items-end justify-end text-right">
              <img
                src={faceImg}
                alt="Product Designer"
                className="w-24 h-24 rounded-lg object-cover relative z-0"
              />
              <span className="mt-2 text-xs font-medium text-black/70">
                Product Designer (Me)
              </span>
              {/* Floating conversation overlay - appears on scroll, positioned to the right of my image */}
              <motion.div
                className="absolute right-28 top-0 z-10"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div
                  className="relative rounded-lg p-4 shadow-xl max-w-[260px] border border-gray-200"
                  style={{
                    background: "linear-gradient(135deg, #fefefe 0%, #f3f4f6 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p className="text-xs text-black leading-relaxed">
                    &quot;Hey, I built this workflow to catch design drift automatically. How&apos;s it been working on your end?&quot;
                  </p>
                  {/* Arrow pointing right to my avatar */}
                  <div className="absolute right-0 top-12 transform translate-x-full">
                    <div
                      className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px]"
                      style={{ borderLeftColor: "#f3f4f6" }}
                    ></div>
                  </div>
                      </div>
                    </motion.div>
                  </div>

            {/* Right: Developer Image with Conversation Bubble - Responding */}
            <div className="relative flex flex-col items-start">
              <img
                src="devloper1.png"
                alt="Developer"
                className="w-24 h-24 rounded-lg object-cover relative z-0"
              />
              <span className="mt-2 text-xs font-medium text-black/70">
                Developer
              </span>
              {/* Floating conversation overlay - appears on scroll, positioned to the left of developer image */}
              <motion.div
                className="absolute left-28 top-0 z-10"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div
                  className="relative rounded-lg p-4 shadow-xl max-w-[260px] border border-gray-200"
                  style={{
                    background: "linear-gradient(135deg, #fefefe 0%, #f3f4f6 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p className="text-xs text-black leading-relaxed">
                    &quot;Yeah, it&apos;s been really helpful! The staging reports show us exactly which colors or fonts are off, and how many components are affected. We just open the report and fix what&apos;s drifting. Saves us a ton of time compared to manually checking everything.&quot;
                  </p>
                  {/* Arrow pointing left to developer */}
                  <div className="absolute left-0 top-12 transform -translate-x-full">
                    <div
                      className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px]"
                      style={{ borderRightColor: "#f3f4f6" }}
                    ></div>
                </div>
              </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Reflection Section */}
              <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight" style={{ color: '#22c55e' }}>
                Reflection
              </h2>
                  </div>

            {/* Grid 2: Reflection Content */}
            <div className="space-y-4 text-black max-w-2xl">
              <p className="text-[16px] leading-relaxed">
                Building the design system for Courtbook taught me something fundamental: Design systems aren&apos;t built to limit creativity—they exist to protect it. When designers and developers share the same language, when components are documented and accessible, when drift is caught automatically, creativity can focus on solving real problems instead of reinventing buttons.
              </p>
              <p className="text-[16px] leading-relaxed">
                The system became a bridge between design and engineering, a way to scale consistency across two product lines, and proof that thoughtful process can make teams more efficient, not less creative. The real win wasn&apos;t the design system itself—it was watching teams build faster, with more confidence, and with fewer questions.
              </p>
            </div>
              </motion.div>
              
          {/* All Projects Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 py-[120px] border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Grid 1: Title */}
            <div className="text-black">
              <h2 className="text-[34px] font-bold leading-tight">
                All Projects
              </h2>
                  </div>

            {/* Grid 2: Project Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Unified Litigation Intelligence Platform */}
              <motion.div
                className="artasaka-card cursor-pointer"
                style={{ height: "50vh" }}
                variants={fadeInUp}
                transition={{ delay: 0 }}
                onClick={() => handleCardClick("/process/litigation-intelligence")}
              >
                <div className="artasaka-card-image-full relative group overflow-hidden">
                  {/* Custom backdrop for "Unified Litigation Intelligence Platform" card */}
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                    style={{
                      background: `
                        radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 60%, rgba(134,239,172,0.4) 80%, rgba(20,107,133,0.7) 90%, #146b85 100%),
                        linear-gradient(135deg, #146b85, #0f5f75)
                      `,
                    }}
                  >
                    {/* Unicourt SVG Logo at center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img
                        src="unicourt.svg"
                        alt="Unicourt Logo"
                        className="h-24 w-auto opacity-90"
                      />
                </div>
                  </div>
                  {/* Dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Title that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2">
                      Unified Litigation Intelligence Platform
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Delivering AI-powered access to 2 billion court dockets, analytics, and insights for legal innovation.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* End Feedback Chaos */}
              <motion.div 
                className="artasaka-card cursor-pointer"
                style={{ height: "50vh" }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                onClick={() => handleCardClick("/process/feedback-collaboration")}
              >
                <div className="artasaka-card-image-full relative group overflow-hidden">
                  {/* Aurora gradient backdrop for "End Feedback Chaos" card */}
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative overflow-hidden"
                    style={{
                      backgroundColor: "#fafafa",
                    }}
                  >
                    {/* Blue aurora blob - top left */}
                    <div
                      className="absolute"
                      style={{
                        top: "-10%",
                        left: "-10%",
                        width: "500px",
                        height: "500px",
                        background:
                          "radial-gradient(circle at center, rgba(147, 197, 253, 0.3) 0%, transparent 70%)",
                        filter: "blur(120px)",
                        opacity: 0.8,
                      }}
                    ></div>

                    {/* Green aurora blob - top center behind logo */}
                    <div
                      className="absolute"
                      style={{
                        top: "-10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "700px",
                        height: "700px",
                        background:
                          "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
                        filter: "blur(120px)",
                        opacity: 0.8,
                      }}
                    ></div>

                    {/* NOA Thumb SVG scaled to card width */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 z-10">
                      <img
                        src="noathumb.svg"
                        alt="Noa Thumbnail"
                        className="w-full h-auto opacity-90"
                      />
                  </div>
                </div>
                  {/* Dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Title that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2">
                      End Feedback Chaos
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Pin contextual comments directly on live websites for crystal-clear collaboration and accelerated team workflows.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Mandal Minds */}
              <motion.div 
                className="artasaka-card cursor-pointer"
                style={{ height: "50vh" }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                onClick={() => handleCardClick("/process/mandal-minds")}
              >
                <div className="artasaka-card-image-full relative group overflow-hidden">
                  {/* Custom backdrop for "Mandal Minds" card */}
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                    style={{
                      background: `linear-gradient(to bottom, #EFEFFF, #FFE1F1, #FFF6F5)`,
                    }}
                  >
                    {/* Mandal Logo at center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img
                        src="mandal.png"
                        alt="Mandal Logo"
                        className="h-24 w-auto opacity-90"
                      />
                  </div>
                </div>
                  {/* Dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Title that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2">
                      Mandal Minds: AI-Driven Hiring & Personalized Placement
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Customizable AI interviews validate skills, connecting you directly with recruiters for your dream job.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Shop OS */}
              <motion.div
                className="artasaka-card cursor-pointer"
                style={{ height: "50vh" }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                onClick={() => handleCardClick("/process/shop-os")}
              >
                <div className="artasaka-card-image-full relative group overflow-hidden">
                  {/* Custom backdrop for "Shop OS" card with light green gradient */}
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                    style={{
                      background: `linear-gradient(135deg, #FFFEF0 0%, #F1F8E9 30%, #E8F5E9 60%, #C8E6C9 80%, #A5D6A7 100%)`,
                    }}
                  >
                    {/* Shop OS Logo and Text at center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-6xl font-bold text-black leading-none">
                          Shop
                        </span>
                        <div className="relative inline-flex items-center justify-center">
                          <span className="text-6xl font-bold text-black leading-none">
                            OS
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-black opacity-70 font-medium">
                        Welcome to Shop OS
                      </p>
                    </div>
                  </div>
                  {/* Dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Title that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold leading-tight mb-2">
                      Shop OS: AI Agentic Native Ecosystem for Multi-Agent Workspace
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Intelligent OS ecosystem for agentic workflows everything related to shopping.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default EnterpriseDesignSystemProcess; 