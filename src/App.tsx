import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import faceImg from './face.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
          className="mobile-menu-overlay fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="mobile-menu-close absolute top-4 right-4" onClick={onClose}>
            <i className="ri-close-line text-2xl"></i>
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
            
            <motion.div
              className="mobile-menu-item"
              custom={navOptions.length + 1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-wrap justify-center mt-6 gap-3">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="text-white bg-white bg-opacity-10 px-4 py-2 rounded-full flex items-center" onClick={onClose}>
                    <i className="ri-user-line mr-2"></i>
                    <span>About</span>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <a href="mailto:ajaymanath96@gmail.com" className="text-white bg-white bg-opacity-10 px-4 py-2 rounded-full flex items-center">
                    <i className="ri-mail-line mr-2"></i>
                    <span>Contact</span>
                  </a>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <a href="https://drive.google.com/file/d/1gn-B1XpCOImjmRdAIimFgtW9_Sb5jdI8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white bg-white bg-opacity-10 px-4 py-2 rounded-full flex items-center">
                    <i className="ri-download-line mr-2"></i>
                    <span>Resume</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("AI Prototype");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useMobile(); // Use the mobile context
  const navigate = useNavigate();
  const location = useLocation();
  
  // Animation controls
  const controls = useAnimation();
  
  const rotatingTexts = [
    "reduces design workflow time with AI",
    "creates data-driven user experiences",
    "builds AI-powered product solutions",
    "blends human creativity with AI tools"
  ];

  // Sample design project data - now showing 6 cards
  const cardData = [
    {
      id: 1,
      number: "01",
      date: "APR 2023",
      image: "Synapse.png",
      title: "Master Any Subject with SynapseLearn",
      subtitle: "Our AI-powered platform transforms how you study, making learning more effective and enjoyable",
      tags: ["AI-Powered", "UX/UI", "Mobile"],
      link: "https://mandal-ai-9c42ef.gitlab.io/"
    },
    {
      id: 2,
      number: "02",
      date: "JUN 2023",
      image: "Drone.png",
      title: "DroneGrid: Revolutionizing Urban Security",
      subtitle: "Deploy autonomous drone security that's 3x more effective and 60% more cost-efficient than traditional surveillance",
      tags: ["Branding", "AI Tools", "Design System"],
      link: "https://dronegrid-976b17.gitlab.io/"
    },
    {
      id: 3,
      number: "03",
      date: "AUG 2023",
      image: "Sahayak.png",
      title: "Your AI Teaching Partner for Multi-Grade Classrooms",
      subtitle: "AI assistant helping India's teachers save time and deliver personalized education in local languages",
      tags: ["E-commerce", "AI-Powered", "Web Design"],
      link: "https://sahayak-b85697.gitlab.io/home"
    },
    {
      id: 4,
      number: "04",
      date: "SEP 2023",
      image: "Cyber.png",
      title: "Cyber Risk Intelligence Dashboard",
      subtitle: "Real-time threat monitoring and AI-powered risk assessment for enterprise security teams",
      tags: ["AI", "NLP", "Content Creation"],
      link: "https://prevalent-5474cf.gitlab.io/"
    },
    {
      id: 5,
      number: "05",
      date: "OCT 2023",
      image: "Design System.png",
      title: "Multiwebsite-Portfolio",
      subtitle: "A multi-website portfolio experience. Explore multiple web identities in one seamless interface.",
      tags: ["Portfolio", "Multi-site", "Experience"],
      link: "https://multiportfolio-1343d4.gitlab.io/#/website2"
    },
    {
      id: 6,
      number: "06",
      date: "NOV 2023",
      image: "isalnd.png",
      title: "Andaman Islands Experience",
      subtitle: "Discover the pristine beauty of Andaman Islands through an immersive digital experience showcasing paradise destinations.",
      tags: ["Tourism", "Experience", "Islands"],
      link: "https://andman-isle-6ad31d.gitlab.io/"
    }
  ];

  // Sample Figma designs with added metrics
  const figmaDesigns = [
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
    { name: "AI Prototype", icon: "ri-sparkling-fill", href: "#ai-prototype", isPage: false },
    { name: "Figma", icon: "ri-figma-fill", href: "#figma", isPage: false },
    { name: "Articles & Tutorials", icon: "ri-article-line", href: "#articles", isPage: false },
    { name: "Playground", icon: "ri-gamepad-fill", href: "#playground", isPage: false },
    { name: "Process", icon: "ri-flow-chart", href: "/process", isPage: true }
  ];

  // Social media links - removed Dribbble and Behance
  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-line' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line' },
    { name: 'Instagram', icon: 'ri-instagram-line' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000);

    window.addEventListener('scroll', handleScroll);
    
    // Start animation when component mounts
    controls.start("visible");
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(textInterval);
    };
  }, [rotatingTexts.length, controls]);

  // Check for URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      // Decode the URL parameter
      const decodedTab = decodeURIComponent(tab);
      const validTabs = ["AI Prototype", "Figma", "Articles & Tutorials", "Playground"];
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
      case "AI Prototype":
        return "AI-Powered Design Projects";
      case "Figma":
        return "Design and Process";
      case "Articles & Tutorials":
        return "Design & Product Management Articles";
      case "Playground":
        return "Creative Experiments";
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

  return (
    <div className="min-h-screen bg-custom-dark text-white">
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navOptions={navOptions}
        activeTab={activeTab}
        handleNavigation={handleNavigation}
      />

      {/* Fixed Header - Always visible at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-custom-dark header-transition site-header sticky-header">
        {/* Top Section - Only visible when not scrolled */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div 
              className="bg-custom-dark py-4 sm:py-6"
              initial={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 fixed-header-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 items-center">
                  {/* First Column - Animated Text with Profile Image */}
                  <div className="text-left flex items-center">
                    <motion.img 
                      src={faceImg} 
                      alt="Profile" 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-2 sm:mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <p className="text-xs sm:text-sm text-white opacity-80 mb-0 sm:mb-1">An AI product designer who...</p>
                      <div className="h-6 sm:h-8">
                      <AnimatePresence mode="wait">
                        <motion.p 
                          key={textIndex}
                            className="font-bold text-sm sm:text-lg text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          {rotatingTexts[textIndex]}
                        </motion.p>
                      </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Column - Empty */}
                  <div className="hidden md:flex justify-center">
                  </div>
                  
                  {/* Third Column - Navigation Options - Aligned to the right */}
                  <div className="flex justify-end space-x-3 sm:space-x-6 mt-1 md:mt-0">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <motion.div
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={isMobile ? "hidden" : ""}
                      >
                        <a href="mailto:ajaymanath96@gmail.com" className="text-white hover:text-gray-300 transition-colors flex items-center text-sm sm:text-base">
                          <i className="ri-mail-fill mr-1"></i> Contact
                        </a>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={isMobile ? "hidden" : ""}
                      >
                        <Link to="/about" className="text-white hover:text-gray-300 transition-colors flex items-center text-sm sm:text-base">
                          <i className="ri-user-fill mr-1"></i> About
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={isMobile ? "hidden" : ""}
                      >
                        <a href="https://drive.google.com/file/d/1gn-B1XpCOImjmRdAIimFgtW9_Sb5jdI8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors flex items-center text-sm sm:text-base">
                          <i className="ri-download-line mr-1"></i> Resume
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Section - Always visible with increased min-height */}
        <div className="bg-custom-dark py-2 sm:py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 fixed-header-content">
            <div className="flex flex-col md:flex-row justify-between items-center min-h-[60px] sm:min-h-[88px]">
              {/* Left Side - Mobile Menu Button and Navigation Options */}
              <div className="w-full md:w-3/4 mb-2 md:mb-0 flex items-center justify-between">
                <div className="flex items-center">
                  <motion.button
                    className={`mr-3 ${isMobile ? 'block' : 'hidden'}`}
                    onClick={() => setMobileMenuOpen(true)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-menu-line text-2xl"></i>
                  </motion.button>
                
                  {/* Navigation Options with Icons (horizontal layout) */}
                  <div className={`flex flex-wrap justify-start space-x-6 md:space-x-8 mobile-tab-navigation ${isMobile ? 'hidden' : 'flex'}`}>
                    {navOptions.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={`text-white hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center ${activeTab === item.name ? "selected-tab" : "inactive-tab"}`}
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
                
                {isMobile && (
                  <div className="flex items-center space-x-3 mobile-header-links">
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href="mailto:ajaymanath96@gmail.com" className="text-white hover:text-gray-300 transition-colors flex items-center text-sm">
                        <i className="ri-mail-fill mr-1"></i> Contact
                      </a>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to="/about" className="text-white hover:text-gray-300 transition-colors flex items-center text-sm">
                        <i className="ri-user-fill mr-1"></i> About
                      </Link>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href="https://drive.google.com/file/d/1gn-B1XpCOImjmRdAIimFgtW9_Sb5jdI8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors flex items-center text-sm">
                        <i className="ri-download-line mr-1"></i> Resume
                      </a>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Right Side - Empty space */}
              <div className="w-full md:w-1/4 flex justify-end">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under fixed header - adjusted heights */}
      <div className={`${scrolled ? 'h-[70px] sm:h-[88px]' : 'h-[130px] sm:h-[176px]'} transition-all duration-300`}></div>

      {/* Main Content - Tab Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-12 mt-4 sm:mt-8 content-container"
        animate={controls}
        initial="hidden"
      >
        <motion.div 
          className="mb-6 sm:mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{getPageTitle()}</h2>
          <p className="text-base sm:text-lg text-white opacity-80">
            {activeTab === "AI Prototype" && "Exploring the intersection of artificial intelligence and design"}
            {activeTab === "Figma" && "Comprehensive design processes and interactive prototypes showcasing end-to-end UX workflows"}
                          {activeTab === "Articles & Tutorials" && "Thoughts, insights and tutorials on design and product management"}
            {activeTab === "Playground" && "Personal projects and creative experiments"}
          </p>
        </motion.div>

        {/* AI Prototype Tab Content */}
        <div className={`tab-content ${activeTab === "AI Prototype" ? "active" : ""}`}>
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "AI Prototype" ? "visible" : "hidden"}
          >
            {/* First Row: Large (700px) + Small (500px) */}
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-start">
              {/* Card 1 - Large with 90% image height */}
            <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[0].link ? 'cursor-pointer' : ''} w-full lg:w-[700px] max-w-[700px] h-auto sm:h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0 }}
                onClick={() => handleCardClick(cardData[0].link)}
            >
              {/* Card Header with Badge and Date */}
                <div className="p-2 sm:p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-xs sm:text-sm font-bold">
                    #{cardData[0].number}
                  </div>
                  <div className="text-white opacity-80 text-xs sm:text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[0].date}
                  </div>
                </div>
                
                {/* Card Image - 80% of remaining height */}
                <div className="overflow-hidden hover-scale flex-grow responsive-image" style={{ height: '80%' }}>
                  <img 
                    src={cardData[0].image} 
                    alt={cardData[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                                  {/* Card Title and Expandable Content - 20% of remaining height */}
                <div className="p-2 sm:p-4" style={{ height: '20%', minHeight: '70px' }}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{cardData[0].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-xs sm:text-sm">{cardData[0].subtitle}</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Small with 65% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[1].link ? 'cursor-pointer' : ''} w-full lg:w-[500px] max-w-[500px] h-auto sm:h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                onClick={() => handleCardClick(cardData[1].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-2 sm:p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-xs sm:text-sm font-bold">
                    #{cardData[1].number}
                  </div>
                  <div className="text-white opacity-80 text-xs sm:text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[1].date}
                  </div>
                </div>
                
                {/* Card Image - 65% of remaining height */}
                <div className="overflow-hidden hover-scale responsive-image" style={{ height: '65%' }}>
                  <img 
                    src={cardData[1].image} 
                    alt={cardData[1].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 35% of remaining height */}
                <div className="p-2 sm:p-4 flex-grow" style={{ height: '35%' }}>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{cardData[1].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-xs sm:text-sm">{cardData[1].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Row: Large (700px) + Small (500px) */}
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-start">
              {/* Card 3 - Large with 90% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[2].link ? 'cursor-pointer' : ''} w-full lg:w-[700px] max-w-[700px] h-auto sm:h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                onClick={() => handleCardClick(cardData[2].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-2 sm:p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-xs sm:text-sm font-bold">
                    #{cardData[2].number}
                </div>
                  <div className="text-white opacity-80 text-xs sm:text-sm flex items-center">
                  <i className="ri-calendar-line mr-1"></i>
                    {cardData[2].date}
                  </div>
                </div>
                
                {/* Card Image - 80% of remaining height */}
                <div className="overflow-hidden hover-scale flex-grow responsive-image" style={{ height: '80%' }}>
                  <img 
                    src={cardData[2].image} 
                    alt={cardData[2].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 20% of remaining height */}
                <div className="p-2 sm:p-4" style={{ height: '20%', minHeight: '70px' }}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{cardData[2].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-xs sm:text-sm">{cardData[2].subtitle}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 4 - Small with 65% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[3].link ? 'cursor-pointer' : ''} w-full lg:w-[500px] max-w-[500px] h-auto sm:h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                onClick={() => handleCardClick(cardData[3].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-2 sm:p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-xs sm:text-sm font-bold">
                    #{cardData[3].number}
                  </div>
                  <div className="text-white opacity-80 text-xs sm:text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[3].date}
                  </div>
                </div>
                
                {/* Card Image - 65% of remaining height */}
                <div className="overflow-hidden hover-scale responsive-image" style={{ height: '65%' }}>
                  <img 
                    src={cardData[3].image} 
                    alt={cardData[3].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 35% of remaining height */}
                <div className="p-2 sm:p-4 flex-grow" style={{ height: '35%' }}>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{cardData[3].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-xs sm:text-sm">{cardData[3].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Third Row: Large (700px) + Small (500px) */}
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-start">
              {/* Card 5 - Large with 90% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[4].link ? 'cursor-pointer' : ''} w-full lg:w-[700px] max-w-[700px] h-auto sm:h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                onClick={() => handleCardClick(cardData[4].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-2 sm:p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-xs sm:text-sm font-bold">
                    #{cardData[4].number}
                </div>
                  <div className="text-white opacity-80 text-xs sm:text-sm flex items-center">
                  <i className="ri-calendar-line mr-1"></i>
                    {cardData[4].date}
                  </div>
                </div>
                
                {/* Card Image - 80% of remaining height */}
                <div className="overflow-hidden hover-scale flex-grow responsive-image" style={{ height: '80%' }}>
                  <img 
                    src={cardData[4].image} 
                    alt={cardData[4].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 20% of remaining height */}
                <div className="p-2 sm:p-4" style={{ height: '20%', minHeight: '70px' }}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{cardData[4].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-xs sm:text-sm">{cardData[4].subtitle}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 6 - Small with 65% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[5].link ? 'cursor-pointer' : ''} w-full lg:w-[500px] max-w-[500px] h-auto sm:h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
                onClick={() => handleCardClick(cardData[5].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-2 sm:p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-xs sm:text-sm font-bold">
                    #{cardData[5].number}
                  </div>
                  <div className="text-white opacity-80 text-xs sm:text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[5].date}
                  </div>
                </div>
                
                {/* Card Image - 65% of remaining height */}
                <div className="overflow-hidden hover-scale responsive-image" style={{ height: '65%' }}>
                  <img 
                    src={cardData[5].image} 
                    alt={cardData[5].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 35% of remaining height */}
                <div className="p-2 sm:p-4 flex-grow" style={{ height: '35%' }}>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{cardData[5].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-xs sm:text-sm">{cardData[5].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Figma Tab Content */}
        <div className={`tab-content ${activeTab === "Figma" ? "active" : ""}`}>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Figma" ? "visible" : "hidden"}
          >
            {figmaDesigns.map((design, index) => (
              <motion.div 
                key={design.id}
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${design.link ? 'cursor-pointer' : ''}`}
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
                  <p className="text-white opacity-80 mt-1 sm:mt-2 mb-2 sm:mb-3 text-sm sm:text-base">
                    <i className="ri-line-chart-line mr-2"></i>
                    {design.metrics}
                  </p>
                  <div className="flex flex-wrap mb-2 sm:mb-3">
                    {design.tools.map((tool, i) => (
                      <span key={i} className="badge badge-design text-xs sm:text-sm">{tool}</span>
                    ))}
                  </div>
                  <motion.div 
                    onClick={() => handleCardClick(design.link)} 
                    className="text-white opacity-80 mt-1 sm:mt-2 inline-flex items-center text-sm sm:text-base cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>{design.link.startsWith('/') ? 'View Process' : 'View in Figma'}</span>
                    <i className={`${design.link.startsWith('/') ? 'ri-arrow-right-line' : 'ri-external-link-line'} ml-1`}></i>
                  </motion.div>
                </div>
              </motion.div>
            ))}
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

        {/* Playground Tab Content (formerly Fun) */}
        <div className={`tab-content ${activeTab === "Playground" ? "active" : ""}`}>
          <motion.div 
            className="flex items-center justify-center h-64"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Playground" ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-center p-8 bg-black bg-opacity-30 rounded-lg"
              variants={fadeInUp}
            >
              <i className="ri-tools-line text-4xl mb-4 text-gray-400"></i>
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-white opacity-80">New playground projects are currently under development.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-custom-dark text-white py-6 sm:py-12 mt-6 sm:mt-12">
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
