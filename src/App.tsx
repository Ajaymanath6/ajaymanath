import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import faceImg from './face.png';
import fullImg from './full.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

// Create a context for mobile detection
type MobileContextType = {
  isMobile: boolean;
};

const MobileContext = createContext<MobileContextType>({ isMobile: false });

export const useMobile = () => useContext(MobileContext);

// MobileProvider component
const MobileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

// Export a separate MobileProvider for use in index.tsx
export const MobileContextProvider = MobileProvider;

// MobileMenu component for small screens
const MobileMenu = ({ isOpen, onClose, navOptions, activeTab, handleNavigation }: { 
  isOpen: boolean, 
  onClose: () => void, 
  navOptions: any[],
  activeTab: string,
  handleNavigation: (item: any, e: React.MouseEvent) => void
}) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    }),
    exit: { opacity: 0, y: -20 }
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-line' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line' },
    { name: 'Instagram', icon: 'ri-instagram-line' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay fixed inset-0 z-[60] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(19, 19, 19, 0.98)' }}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="mobile-menu-close absolute top-6 right-6 bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition-all" onClick={onClose}>
            <i className="ri-close-line text-xl text-white"></i>
          </button>
          
          <div className="flex flex-col items-center justify-center h-full">
            {navOptions.map((item, i) => (
              <motion.div
                key={item.name}
                className="mobile-menu-item"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.a
                  href={item.href}
                  className={`text-white text-lg font-medium flex items-center mb-6 ${activeTab === item.name ? "selected-tab" : "inactive-tab"}`}
                  onClick={(e) => {
                    handleNavigation(item, e);
                    onClose();
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <i className={`${item.icon} main-nav-icon mr-3`}></i>
                    {item.badge && <span className="new-badge">{item.badge}</span>}
                  </div>
                  <span>{item.name}</span>
                </motion.a>
              </motion.div>
            ))}
            
            <motion.div
              className="mobile-menu-item mt-8 pt-4 border-t border-white border-opacity-20"
              custom={navOptions.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex space-x-6 mt-2">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={`https://${social.name.toLowerCase()}.com`}
                    className="text-white opacity-80 hover:opacity-100"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-2xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {

  const [activeTab, setActiveTab] = useState("Projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showStory, setShowStory] = useState(true);
  const [hoveredItems, setHoveredItems] = useState(false);
  const [clickedCard, setClickedCard] = useState(false);
  const { isMobile } = useMobile(); // Use the mobile context
  const navigate = useNavigate();
  const location = useLocation();
  
  // Animation controls
  const controls = useAnimation();
  
  const storyText = "I'm Ajay, a **multi-disciplinary product designer** based in India. Currently working with **AI-powered design workflows** to revolutionize how teams create and test digital products.\n\nI take pride in creating **thoughtful, user-centered products** that deliver meaningful business results. My expertise spans **project management**, **legal tech**, and **ed tech** domains.\n\nBefore my current focus, I worked across various industries helping clients from **education** and **technology** sectors to bring **disruptive digital products** to market and grow their design capabilities.";



  // Design Process & Case Studies
  const projectProcessCards = [
    {
      id: 1,
      title: "Enterprise Design System",
      image: "Design System.png",
      link: "/process/enterprise-design-system",
      metrics: "A comprehensive design system with Figma documentation, components, and structure for multiple projects",
      tools: ["Auto Layout", "Variables", "Interactive Components"]
    },
    {
      id: 2,
      title: "Sahayak Teaching Assistant",
      image: "Sahayak.png",
      link: "/process/sahayak",
      metrics: "AI-powered teaching assistant designed for multi-language education in Indian classrooms",
      tools: ["Component Properties", "Variants", "Prototyping"]
    },
    {
      id: 3,
      title: "Cyber Security Dashboard",
      image: "Cyber.png",
      link: "/process/cybersecurity",
      metrics: "Enterprise security monitoring interface with real-time threat visualization",
      tools: ["Design System", "Auto Layout", "Smart Animate"]
    },
    {
      id: 4,
      title: "Master Any Subject with SynapseLearn",
      image: "Synapse.png",
      link: "/process/synapselearn",
      metrics: "Our AI-powered platform transforms how you study, making learning more effective and enjoyable",
      tools: ["Component Library", "Variants", "Prototyping"]
    },
    {
      id: 5,
      title: "Multiwebsite-Portfolio",
      image: "prevalantai.png",
      link: "https://multiportfolio-1343d4.gitlab.io/#/website2",
      metrics: "A multi-website portfolio experience. Explore multiple web identities in one seamless interface.",
      tools: ["Multi-site", "Portfolio", "Experience"]
    },
    {
      id: 6,
      title: "Andaman Islands Experience",
      image: "isalnd.png",
      link: "https://andman-isle-6ad31d.gitlab.io/",
      metrics: "Discover the pristine beauty of Andaman Islands through an immersive digital experience showcasing paradise destinations.",
      tools: ["Tourism", "Experience", "Islands"]
    },
    {
      id: 7,
      title: "Drone Aerial Photography",
      image: "Drone.png",
      link: "https://dronegrid-976b17.gitlab.io/",
      metrics: "Professional drone photography and videography services capturing stunning aerial perspectives.",
      tools: ["Aerial Photography", "Video", "Commercial"]
    }
  ];

  // Sample blog posts with added skills
  const blogPosts = [
    {
      id: 1,
      title: "Prototyping with Custom Design Systems Without Losing Consistency",
      excerpt: "How to overcome Figma's limitations by creating a seamless workflow between Figma components and Cursor for building real, interactive prototypes.",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "AI-Prototyping.png",
      skills: ["Figma", "Cursor", "Design Systems"],
      type: "article",
      link: "/article/prototyping-with-custom-design-systems"
    },
    {
      id: 2,
      title: "Automating Design System Implementation and Testing",
      excerpt: "A revolutionary approach to validating design system implementation using Cypress tests and JSON specifications to ensure visual consistency.",
      date: "April 22, 2023",
      readTime: "7 min read",
      image: "autofix.png",
      skills: ["Cypress", "JSON", "Automation"],
      type: "article",
      link: "/article/automating-design-system-testing"
    },
    {
      id: 3,
      title: "The Future of Design: When AI Makes Interfaces Optional",
      excerpt: "Exploring how AI is transforming interfaces from necessity to preference, and how 'UI on Intent' will reshape how we interact with technology.",
      date: "June 15, 2023",
      readTime: "6 min read",
      image: "future.png",
      skills: ["AI", "Future of UI", "Voice Interfaces"],
      type: "article",
      link: "/article/future-of-design-ai-interfaces"
    },
    {
      id: 4,
      title: "Video Tutorial: Figma to Cursor Workflow",
      excerpt: "Step-by-step guide showing how to import Figma components to Cursor and create interactive prototypes that maintain design consistency.",
      date: "Coming Soon",
      readTime: "15 min video",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Video Tutorial", "Figma", "Cursor"],
      type: "video",
      link: "#"
    },
    {
      id: 5,
      title: "Video Tutorial: Automated Design System Testing",
      excerpt: "Learn how to set up Cypress tests to automatically validate your design system implementation and generate reports with auto-fix commands.",
      date: "Coming Soon",
      readTime: "18 min video",
      image: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Video Tutorial", "Cypress", "Testing"],
      type: "video",
      link: "#"
    }
  ];

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Navigation options with icons
  const navOptions = [
    { name: "Projects", icon: "ri-folder-line", href: "#projects", isPage: false },
    { name: "Articles & Tutorials", icon: "ri-article-line", href: "#articles", isPage: false },
    { name: "Process", icon: "ri-flow-chart", href: "/process", isPage: true },
    { name: "Experience", icon: "ri-briefcase-line", href: "/experience", isPage: true }
  ];

  // Social media links - removed Dribbble and Behance
  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-line' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line' },
    { name: 'Instagram', icon: 'ri-instagram-line' }
  ];

  useEffect(() => {
    // Start animation when component mounts
    controls.start("visible");
  }, [controls]);



  // Check for URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      // Decode the URL parameter
      const decodedTab = decodeURIComponent(tab);
      const validTabs = ["Projects", "Articles & Tutorials"];
      if (validTabs.includes(decodedTab)) {
        setActiveTab(decodedTab);
      }
    }
  }, [location]);

  // Function to handle tab changes
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    
    // Trigger animation when tab changes
    controls.start({
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }).then(() => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    });
  };

  // Get page title based on active tab
  const getPageTitle = () => {
    switch(activeTab) {
      case "Projects":
        return "Design Process & Case Studies";
      case "Articles & Tutorials":
        return "Design & Product Management Articles";
      default:
        return "Portfolio";
    }
  };

  // Click handler for links (both internal and external)
  const handleCardClick = (link?: string | null) => {
    if (link) {
      if (link.startsWith('/')) {
        // Internal navigation
        navigate(link);
      } else {
        // External link
        window.open(link, '_blank');
      }
    }
  };

  // Function to handle tab changes or navigation
  const handleNavigation = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (item.isPage) {
      navigate(item.href);
    } else {
      handleTabChange(item.name);
    }
  };

  const handleImageClick = () => {
    setClickedCard(!clickedCard);
    if (!clickedCard) {
      setShowInfo(true);
      setTimeout(() => setShowStory(true), 800);
    } else {
      setShowStory(false);
      setShowInfo(false);
    }
  };

    // Function to format text with bold and lightning green highlights
  const formatText = (text: string) => {
    // Split by **bold** markers and \n for line breaks
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, paragraphIndex) => (
      <p key={paragraphIndex} className={paragraphIndex > 0 ? 'mt-4' : ''}>
        {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2);
  return (
              <span
                key={index}
                className="font-semibold"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(192,192,192,0.8) 50%, rgba(169,169,169,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {boldText}
              </span>
            );
          }
          return part;
        })}
      </p>
    ));
  };

  return (
    <div className="min-h-screen text-white relative" style={{ backgroundColor: '#131313' }}>
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navOptions={navOptions}
        activeTab={activeTab}
        handleNavigation={handleNavigation}
      />

      {/* Fixed Header - Always visible at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 header-transition site-header sticky-header shadow-lg" style={{ backgroundColor: '#131313' }}>
        {/* Top Section - Always visible */}
        <div 
          className="py-1 md:py-2 lg:py-3"
          style={{ backgroundColor: '#131313' }}
            >
              <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 fixed-header-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 items-center">
                  {/* First Column - Animated Text with Profile Image */}
                  <div className="text-left flex items-center justify-between">
                    <div className="flex items-center">
                      <motion.div className="p-1">
                      <motion.img 
                        src={faceImg} 
                        alt="Profile" 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-2 sm:mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      </motion.div>
                      <div>
                        <div className="h-6 sm:h-8">
                          <p className="font-bold text-sm sm:text-lg text-white">
                            Product Designer, India 🇮🇳
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Hamburger Menu - moved to same line */}
                    <motion.button
                      className="md:hidden text-white"
                      onClick={() => setMobileMenuOpen(true)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-menu-line text-2xl"></i>
                    </motion.button>
                  </div>
                  
                  {/* Second Column - Empty */}
                  <div className="hidden md:flex justify-center">
                  </div>
                  
                  {/* Third Column - Contact Button (desktop only) */}
                  <div className="hidden md:flex justify-end">
                    {/* Desktop Contact Button */}
                    <motion.a 
                      href="mailto:ajaymanath96@gmail.com"
                      className="text-white text-xs sm:text-sm bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full px-3 sm:px-4 py-2 items-center hover:bg-opacity-20 transition-all flex"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-mail-line mr-1 sm:mr-2"></i>
                      <span>Contact</span>
                    </motion.a>
                    </div>
                  </div>
                </div>
              </div>

        {/* Bottom Section - Navigation hidden on mobile */}
        <div className="hidden md:block py-0 mb-0" style={{ backgroundColor: '#131313' }}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 fixed-header-content">
                          <div className="flex flex-col md:flex-row justify-between items-center min-h-[50px] sm:min-h-[70px]">
              {/* Left Side - Navigation Options */}
              <div className="w-full md:w-3/4 mb-2 md:mb-0 flex items-center justify-between">
                <div className="flex items-center">
                
                  {/* Navigation Options with Icons (horizontal layout) */}
                  <div className="flex justify-start space-x-4 md:space-x-6">
                    {navOptions.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={`text-white hover:text-white text-xs font-medium flex items-center justify-center whitespace-nowrap ${activeTab === item.name ? "selected-tab" : "inactive-tab"}`}
                        onClick={(e) => handleNavigation(item, e)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative">
                          <i className={`${item.icon} main-nav-icon mr-2`}></i>
                        </div>
                        <span className="nav-label">{item.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
                

              </div>

              {/* Right Side - Empty space */}
              <div className="w-full md:w-1/4 flex justify-end">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer adjusted for new header height */}
      <div className="h-[100px] md:h-[160px] sm:h-[180px]"></div>

            {/* About Section - Hero with reduced margin for mobile - Hidden for Articles & Tutorials */}
      {activeTab !== "Articles & Tutorials" && (
        <motion.div 
          className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 mt-2 md:mt-8 lg:mt-12 content-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center relative z-10 flex flex-col items-center">
                               {/* Profile image container with integrated info section */}
          <motion.div 
               className="relative inline-block cursor-pointer image-container group"
               whileHover={{ scale: 1.05 }}
               onClick={isMobile ? undefined : handleImageClick}
               onMouseEnter={() => setHoveredItems(true)}
               onMouseLeave={() => !clickedCard && setHoveredItems(false)}
             >
              {/* Light grey border around entire container */}
              <div className="border border-gray-300 border-opacity-20 inline-block p-1">
                <div className="overflow-hidden">
                  <motion.img 
                    src={fullImg} 
                    alt="Ajay Manath" 
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover bw-image block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Info section that extends directly from image - NO GAP */}
                  <AnimatePresence>
                    {showInfo && (
                      <motion.div 
                        className="info-section bg-black px-4 sm:px-6 py-4 -mt-1"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%' }}
                      >
                        {/* Name - Left aligned */}
                        <motion.div 
                          className="text-left"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h2 className="text-xl sm:text-2xl font-bold text-white">AJAY L MANATH</h2>
          </motion.div>

                        {/* Gradient border below name */}
            <motion.div 
                          className="my-2 sm:my-3"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <div 
                            className="w-full"
                            style={{ 
                              height: '0.5px',
                              background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)'
                            }}
                          ></div>
                        </motion.div>
                        
                        {/* Bottom section with position and social icons */}
              <motion.div 
                          className="flex justify-between items-center"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                                                   {/* Left side - Available status */}
                           <motion.div 
                             className="flex items-center"
                             initial={{ x: 20, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                           >
                             <motion.span 
                               className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-green-400"
                               animate={{ 
                                 scale: [1, 1.2, 1],
                                 boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                               }}
                               transition={{ duration: 2, repeat: Infinity }}
                             />
                             <span className="text-xs sm:text-sm text-white opacity-80">Available for hire</span>
                           </motion.div>
                          
                          {/* Right side - Social icons */}
                          <div className="flex space-x-2 sm:space-x-3">
                            <motion.a 
                              href="https://github.com" 
                              className="text-white opacity-80 hover:opacity-100 transition-opacity"
                              whileHover={{ y: -2 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <i className="ri-github-line text-sm sm:text-base"></i>
                            </motion.a>
                            <motion.a 
                              href="https://linkedin.com" 
                              className="text-white opacity-80 hover:opacity-100 transition-opacity"
                              whileHover={{ y: -2 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <i className="ri-linkedin-line text-sm sm:text-base"></i>
                            </motion.a>
                            <motion.a 
                              href="https://twitter.com" 
                              className="text-white opacity-80 hover:opacity-100 transition-opacity"
                              whileHover={{ y: -2 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <i className="ri-twitter-x-line text-sm sm:text-base"></i>
                            </motion.a>
                    </div>
                        </motion.div>
                      </motion.div>
                    )}
                                   </AnimatePresence>
                    </div>
                  </div>
                  

             </motion.div>

                      {/* Hover Information Panels - Outside Image Box */}
            <AnimatePresence>
              {(hoveredItems || clickedCard) && !isMobile && (
                <>
                  {/* Desktop Layout */}
                  <div className="hidden xl:block">
                    {/* What I Can Do For Your Company - Left */}
                    <motion.div 
                      className="absolute left-[-10px] 2xl:left-[-15px] top-16 pointer-events-none z-10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="flex items-center">
                        <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20 mr-2 shadow-xl w-72">
                          <p className="text-white text-xs font-semibold mb-2">What I Can Do For Your Company</p>
                          <div className="space-y-1.5">
                            <div className="flex items-center">
                              <span className="text-green-400 mr-2 text-xs">•</span>
                              <span className="text-white text-xs">Ship products 3x faster with AI workflows</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-green-400 mr-2 text-xs">•</span>
                              <span className="text-white text-xs">Bridge design-dev gap (I code too)</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-green-400 mr-2 text-xs">•</span>
                              <span className="text-white text-xs">Drive metrics as founding designer</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-green-400 mr-2 text-xs">•</span>
                              <span className="text-white text-xs">Build scalable systems from day one</span>
                            </div>
                          </div>
                        </div>
                        <svg width="8" height="2">
                          <line x1="0" y1="1" x2="8" y2="1" stroke="white" strokeWidth="1" strokeDasharray="4,4" opacity="0.6"/>
                        </svg>
                      </div>
                    </motion.div>

                    {/* Tech Stack - Right Top */}
                    <motion.div 
                      className="absolute right-[-10px] 2xl:right-[-15px] top-8 pointer-events-none z-10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center">
                        <svg width="8" height="2" className="mr-2">
                          <line x1="0" y1="1" x2="8" y2="1" stroke="white" strokeWidth="1" strokeDasharray="4,4" opacity="0.6"/>
                        </svg>
                        <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20 shadow-xl max-w-sm">
                          <p className="text-white text-xs font-semibold mb-2">My Tech Stack</p>
                          <div className="grid grid-cols-3 gap-1.5">
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-figma-fill mr-1"></i>Figma
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-cursor-line mr-1"></i>Cursor
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-reactjs-line mr-1"></i>React
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-angularjs-line mr-1"></i>Angular
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-tailwind-css-fill mr-1"></i>Tailwind
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-html5-fill mr-1"></i>HTML
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-css3-fill mr-1"></i>CSS
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-kanban-view mr-1"></i>Jira
                            </span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                              <i className="ri-star-line mr-1"></i>Gemini
                            </span>
                          </div>
                    </div>
                  </div>
                </motion.div>

                    {/* What I'm Known For - Right Bottom */}
                <motion.div 
                      className="absolute right-[-10px] 2xl:right-[-15px] top-52 pointer-events-none z-10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex items-center">
                        <svg width="8" height="2" className="mr-2">
                          <line x1="0" y1="1" x2="8" y2="1" stroke="white" strokeWidth="1" strokeDasharray="4,4" opacity="0.6"/>
                        </svg>
                        <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20 shadow-xl">
                          <p className="text-white text-xs font-semibold mb-2">What I'm Known For</p>
                          <p className="text-white text-xs mb-2 opacity-90">Speed up your design process by 3x with new AI workflows</p>
                          <div className="grid grid-cols-2 gap-1.5">
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">AI Product Design</span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">Strategy</span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">Frontend UI</span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">AI Workflows</span>
                            <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">User Research</span>
                    </div>
                    </div>
                  </div>
                    </motion.div>
              </div>
                </>
              )}
            </AnimatePresence>
                
                      {/* Story text below image */}
            <AnimatePresence>
              {showStory && (
                <motion.div 
                  className="mt-6 sm:mt-8 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div 
                    className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-white opacity-90 text-left text-sm sm:text-base leading-relaxed"
                  >
                    <p>{formatText(storyText)}</p>
                    </div>
                  
                                   <div className="mt-4 sm:mt-6 flex justify-center space-x-4 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                     <motion.a 
                       href="https://drive.google.com/file/d/1gn-B1XpCOImjmRdAIimFgtW9_Sb5jdI8/view?usp=drive_link"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-black text-xs sm:text-sm bg-white border border-white rounded-full px-4 py-2 flex items-center hover:bg-gray-100 transition-all"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       >
                       <i className="ri-download-line mr-2 text-black"></i>
                       <span>See Full Resume</span>
                     </motion.a>
                     
                     <motion.a 
                       href="mailto:ajaymanath96@gmail.com"
                       className="text-white text-xs sm:text-sm bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full px-4 py-2 flex items-center"
                       whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                       whileTap={{ scale: 0.95 }}
                       >
                       <i className="ri-mail-line mr-2"></i>
                       <span>Contact</span>
                     </motion.a>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Mobile Default Elements - Always visible below About Me content */}
            <div className="block xl:hidden mt-8">
              <div className="max-w-sm sm:max-w-md mx-auto space-y-3">
                {/* What I Can Do For Your Company */}
                <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20 shadow-xl">
                  <p className="text-white text-xs font-semibold mb-2">What I Can Do For Your Company</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2 text-xs">•</span>
                      <span className="text-white text-xs">Ship products 3x faster with AI workflows</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2 text-xs">•</span>
                      <span className="text-white text-xs">Bridge design-dev gap (I code too)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2 text-xs">•</span>
                      <span className="text-white text-xs">Drive metrics as founding designer</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2 text-xs">•</span>
                      <span className="text-white text-xs">Build scalable systems from day one</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20 shadow-xl">
                  <p className="text-white text-xs font-semibold mb-2">My Tech Stack</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-figma-fill mr-1"></i>Figma
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-cursor-line mr-1"></i>Cursor
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-reactjs-line mr-1"></i>React
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-angularjs-line mr-1"></i>Angular
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-tailwind-css-fill mr-1"></i>Tailwind
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-html5-fill mr-1"></i>HTML
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-css3-fill mr-1"></i>CSS
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-kanban-view mr-1"></i>Jira
                    </span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center border-2 border-white border-opacity-20 border-dashed">
                      <i className="ri-star-line mr-1"></i>Gemini
                    </span>
                  </div>
                </div>
                  
                {/* What I'm Known For */}
                <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20 shadow-xl">
                  <p className="text-white text-xs font-semibold mb-2">What I'm Known For</p>
                  <p className="text-white text-xs mb-2 opacity-90">Speed up your design process by 3x with new AI workflows</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">AI Product Design</span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">Strategy</span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">Frontend UI</span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">AI Workflows</span>
                    <span className="bg-white bg-opacity-10 text-white text-xs px-2 py-1 rounded-full border-2 border-white border-opacity-20 border-dashed">User Research</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hover instruction - Desktop only */}
            <motion.div 
              className="mt-4 text-white opacity-70 text-xs sm:text-sm hidden xl:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="mr-1">👋</span> Hover on image to see detailed information
            </motion.div>
          </div>
        </motion.div>
      )}

              {/* Main Content - Tab Content with adjusted spacing */}
            <motion.div 
          className={`max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 content-container ${
            activeTab === "Articles & Tutorials" 
              ? "py-2 sm:py-4 mt-2 sm:mt-4" 
              : "py-6 sm:py-12 mt-6 sm:mt-12"
          }`}
          animate={controls}
          initial="hidden"
        >
        <motion.div 
          className="mb-6 sm:mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{getPageTitle()}</h2>
          <p className="text-base sm:text-lg text-white opacity-80">
            {activeTab === "Projects" && "Comprehensive design processes and interactive case studies showcasing end-to-end UX workflows"}
            {activeTab === "Articles & Tutorials" && "Thoughts, insights and tutorials on design and product management"}
          </p>
        </motion.div>

        {/* Projects Tab Content */}
        <div className={`tab-content ${activeTab === "Projects" ? "active" : ""}`}>
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Projects" ? "visible" : "hidden"}
          >
            {/* Design Process & Case Studies - Only Section */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {projectProcessCards.map((design, index) => (
              <motion.div 
                key={design.id}
                    className={`rounded-lg overflow-hidden hover-card ${design.link ? 'cursor-pointer' : ''}`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCardClick(design.link)}
              >
                {/* Design Image */}
                <div className="overflow-hidden h-48 sm:h-64 hover-scale responsive-image">
                  <img 
                    src={design.image} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                />
              </div>
              
                {/* Design Title */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white">{design.title}</h3>
                  <motion.div 
                    onClick={() => handleCardClick(design.link)} 
                        className="text-white opacity-80 inline-flex items-center text-sm sm:text-base cursor-pointer mt-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                        <span>{design.link.startsWith('/') ? 'View Process' : 'View Live Project'}</span>
                    <i className={`${design.link.startsWith('/') ? 'ri-arrow-right-line' : 'ri-external-link-line'} ml-1`}></i>
                  </motion.div>
                </div>
              </motion.div>
            ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Articles & Tutorials Tab Content */}
        <div className={`tab-content ${activeTab === "Articles & Tutorials" ? "active" : ""}`}>
          <motion.div 
            className="space-y-6 sm:space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Articles & Tutorials" ? "visible" : "hidden"}
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className="blog-post"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                  {/* Blog Image */}
                  <div className="md:w-1/3">
                    <div className="overflow-hidden hover-scale responsive-image">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 sm:h-64 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="md:w-2/3">
                    <div className="flex items-center text-xs sm:text-sm text-white opacity-60 mb-1 sm:mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                      {post.type === "video" && (
                        <span className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs">VIDEO</span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{post.title}</h3>
                    <p className="text-white opacity-80 mb-3 sm:mb-4 text-sm sm:text-base">{post.excerpt}</p>
                    <div className="flex flex-wrap mb-3 sm:mb-4">
                      {post.skills.map((skill, i) => (
                        <span key={i} className="badge badge-tool text-xs sm:text-sm">{skill}</span>
                      ))}
                    </div>
                    <motion.button 
                      className="text-white inline-flex items-center bg-transparent border-none cursor-pointer text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      onClick={() => post.type === "article" ? navigate(post.link) : null}
                    >
                      <span>{post.type === "video" ? "Coming Soon" : "Read more"}</span>
                      <i className={`${post.type === "video" ? "ri-time-line" : "ri-arrow-right-line"} ml-1`}></i>
                    </motion.button>
                  </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer with proper spacing */}
      <footer className="text-white py-6 sm:py-12 mt-8 sm:mt-16" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center footer-content">
            <div className="mb-4 md:mb-0">
              <motion.span 
                className="text-lg sm:text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                AJAY MANATH
              </motion.span>
            </div>
            <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4 md:space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com`}
                  className="text-white opacity-80 hover:text-white hover:opacity-100 flex items-center mb-2 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <i className={`${social.icon} regular-nav-icon`}></i>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-4 sm:pt-8 text-center text-xs sm:text-sm text-white opacity-60">
            © {new Date().getFullYear()} AJAY MANATH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Export the App component directly
export default App;
