import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function EnterpriseDesignSystemProcess() {
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

          {/* Placeholder Image */}
          <motion.div
            className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src="image1.png"
              alt="Enterprise Design System Overview"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Intro Narrative + Character Conversation */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left: Narrative Text */}
            <div className="space-y-4 text-black">
              <p className="text-base leading-relaxed">
                How a broken design language turned into a system that brought
                teams back together.
              </p>
              <p className="text-base leading-relaxed">
                When I was looking for my next challenge, Samir Neji, the CEO
                of Dltledgers, reached out with a familiar challenge.
              </p>
              <p className="text-base leading-relaxed">
                I had helped design the platform in its early days, so this hit
                close to home. The product had evolved but without a consistent
                design foundation.
              </p>
              <p className="text-base leading-relaxed">I decided to step back in.</p>
            </div>

            {/* Right: Character Conversation */}
            <div className="flex items-stretch">
              <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold">S</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Product Conversation
                  </p>
                  <p className="text-sm text-black opacity-80 leading-relaxed italic">
                    “The platform’s growing fast but the soul’s missing. Design’s
                    all over the place. We need to bring it back together.”
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Placeholder Images Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image2.png"
                alt="Design System Visual 1"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image3.png"
                alt="Design System Visual 2"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
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
              The Foundation
            </h2>
            <div className="space-y-6 text-black">
              <p className="text-[16px] leading-relaxed">
                The more I looked, the clearer it became: Platform had lost its
                structure. Old design patterns lingered everywhere outdated grids,
                unscalable colors, and no consistent rhythm across screens.
              </p>
              <p className="text-[16px] leading-relaxed">
                The product was solid, but visually it felt like a collage.
                Designers improvised. Developers guessed. The only way forward was
                to rebuild the foundation not just the visuals, but how design and
                dev spoke to each other.
              </p>
            </div>
          </motion.div>

          {/* Two Placeholder Images Grid - Second Set */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image4.png"
                alt="Design System Visual 3"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image5.png"
                alt="Design System Visual 4"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Finding the Identity Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-bold text-black">
              Finding the Identity
            </h2>
            <div className="space-y-6 text-black">
              <p className="text-[16px] leading-relaxed">
                Before touching a single pixel, I needed to find what the brand
                truly stood for. So I mapped emotions, tone, and purpose and landed
                on our brand archetype: The Creator. It fit perfectly.
              </p>
              <p className="text-[16px] leading-relaxed">
                We empower others to build a platform made for collaboration and
                creation. That clarity became the lens for every design choice ahead.
              </p>
              <p className="text-[16px] leading-relaxed font-semibold">
                The Creator.
              </p>
              <p className="text-[16px] leading-relaxed">
                A Creator builds, imagines, and brings new ideas to life.
              </p>
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
              Redefining the look
            </h2>
            <div className="space-y-8 text-black">
              {/* Typography */}
              <div>
                <h3 className="text-xl font-bold mb-3">Typography</h3>
                <p className="text-[16px] leading-relaxed">
                  Switched from Inter to Archivo for its geometry and confidence. It
                  brings order to data-heavy screens and makes every label feel
                  designed, not default.
                </p>
              </div>

              {/* Color System */}
              <div>
                <h3 className="text-xl font-bold mb-3">Color System</h3>
                <p className="text-[16px] leading-relaxed">
                  Samir was clear about one thing "Keep the green." But I wanted to
                  make it mean something. I introduced a new shade neon-green. It
                  glowed with energy, creativity, and trust.
                </p>
              </div>

              {/* Iconography */}
              <div>
                <h3 className="text-xl font-bold mb-3">Iconography</h3>
                <p className="text-[16px] leading-relaxed">
                  We adopted HugeIcons for their clean weight and scalability across
                  platforms. With these choices, the visual system finally had
                  personality modern, focused, and ready to scale.
                </p>
              </div>
            </div>
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
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="saha2.png"
                alt="Design System Visual 5"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="Cyber.png"
                alt="Design System Visual 6"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="Design System.png"
                alt="Design System Visual 7"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="future.png"
                alt="Design System Visual 8"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Four Placeholder Images Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image1.png"
                alt="Design System Visual 9"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image2.png"
                alt="Design System Visual 10"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image3.png"
                alt="Design System Visual 11"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="image4.png"
                alt="Design System Visual 12"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Title and Content Grid Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[120px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-bold text-black">
              Section Title
            </h2>
            <div className="space-y-6 text-black">
              <p className="text-[16px] leading-relaxed">
                Content goes here. This is the right side of the grid with the
                description and details about the section.
              </p>
            </div>
          </motion.div>

          {/* One Big Placeholder Image */}
          <motion.div
            className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[800px] mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src="image5.png"
              alt="Design System Final Visual"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default EnterpriseDesignSystemProcess; 