import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import faceImg from './face.png';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("AI Prototype");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  // Animation controls
  const controls = useAnimation();
  
  const rotatingTexts = [
    "reduces design workflow time with AI",
    "creates data-driven user experiences",
    "builds AI-powered product solutions",
    "blends human creativity with AI tools"
  ];

  // Sample design project data - now showing only 4 cards
  const cardData = [
    {
      id: 1,
      number: "01",
      date: "APR 2023",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Synapse Learn",
      subtitle: "AI-powered collaborative platform bridging research disciplines and fostering innovative solutions",
      tags: ["AI-Powered", "UX/UI", "Mobile"],
      link: "https://mandal-ai-9c42ef.gitlab.io/home"
    },
    {
      id: 2,
      number: "02",
      date: "JUN 2023",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Brand Identity System",
      subtitle: "Visual language for tech startup",
      tags: ["Branding", "AI Tools", "Design System"],
      link: "https://dronegrid-976b17.gitlab.io/"
    },
    {
      id: 3,
      number: "03",
      date: "AUG 2023",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Website",
      subtitle: "User-centered shopping experience",
      tags: ["E-commerce", "AI-Powered", "Web Design"],
      link: "https://prevalent-5474cf.gitlab.io/"
    },
    {
      id: 4,
      number: "04",
      date: "SEP 2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "AI Content Generator",
      subtitle: "Automated copywriting assistant",
      tags: ["AI", "NLP", "Content Creation"],
      link: "https://customer-f4fcaf.gitlab.io/"
    }
  ];

  // Sample Figma designs with added metrics
  const figmaDesigns = [
    {
      id: 1,
      title: "Finance Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      metrics: "Improved user efficiency by 45%",
      tools: ["Auto Layout", "Variables", "Interactive Components"]
    },
    {
      id: 2,
      title: "Social Media App",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      metrics: "Increased engagement by 32%",
      tools: ["Component Properties", "Variants", "Prototyping"]
    },
    {
      id: 3,
      title: "E-commerce Website",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      metrics: "Conversion rate improved by 28%",
      tools: ["Design System", "Auto Layout", "Smart Animate"]
    },
    {
      id: 4,
      title: "Travel App UI Kit",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      metrics: "Downloaded 2,500+ times",
      tools: ["Component Library", "Variants", "Styles"]
    }
  ];

  // Sample blog posts with added skills
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Design",
      excerpt: "Exploring how artificial intelligence is changing the landscape of design and creativity.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["AI Integration", "Design Strategy", "Future Trends"]
    },
    {
      id: 2,
      title: "Designing for Accessibility: Best Practices",
      excerpt: "How to ensure your designs are inclusive and accessible to all users.",
      date: "April 22, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Accessibility", "Inclusive Design", "WCAG Guidelines"]
    },
    {
      id: 3,
      title: "Color Theory in UI Design",
      excerpt: "Understanding how color choices impact user experience and brand perception.",
      date: "March 10, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Color Theory", "Visual Design", "Brand Identity"]
    }
  ];

  // Fun projects with added technologies
  const funProjects = [
    {
      id: 1,
      title: "Interactive Art Installation",
      description: "A digital art project that responds to viewer movements",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Three.js", "Motion Sensors", "AI Image Generation"]
    },
    {
      id: 2,
      title: "Generative Art Experiments",
      description: "Code-based art created through algorithmic processes",
      image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["p5.js", "TensorFlow", "WebGL"]
    },
    {
      id: 3,
      title: "3D Character Modeling",
      description: "Creative character designs for animation and games",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Blender", "Substance Painter", "Unity"]
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
    { name: "DesignInk", icon: "ri-git-repository-fill", href: "#designink", isPage: false },
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

  // Function to handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Get page title based on active tab
  const getPageTitle = () => {
    switch(activeTab) {
      case "AI Prototype":
        return "AI-Powered Design Projects";
      case "Figma":
        return "Figma Designs & Prototypes";
      case "DesignInk":
        return "Design & Product Management Articles";
      case "Playground":
        return "Creative Experiments";
      default:
        return "Portfolio";
    }
  };

  // Click handler for external links
  const handleCardClick = (link?: string | null) => {
    if (link) {
      window.open(link, '_blank');
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
      {/* Fixed Header - Always visible at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-custom-dark header-transition site-header">
        {/* Top Section - Only visible when not scrolled */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div 
              className="bg-custom-dark py-6"
              initial={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  {/* First Column - Animated Text with Profile Image */}
                  <div className="text-left flex items-center">
                    <motion.img 
                      src={faceImg} 
                      alt="Profile" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <p className="text-sm text-white opacity-80 mb-1">An AI product designer who...</p>
                    <div className="h-8">
                      <AnimatePresence mode="wait">
                        <motion.p 
                          key={textIndex}
                          className="font-bold text-lg text-white"
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
                  <div className="flex justify-center">
                  </div>
                  
                  {/* Third Column - Navigation Options - Aligned to the right */}
                  <div className="flex justify-end space-x-6">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <motion.div
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <a href="mailto:ajaymanath96@gmail.com" className="text-white hover:text-gray-300 transition-colors flex items-center">
                          <i className="ri-mail-fill mr-1"></i> Contact
                        </a>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link to="/about" className="text-white hover:text-gray-300 transition-colors flex items-center">
                          <i className="ri-user-fill mr-1"></i> About
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Section - Always visible with increased min-height */}
        <div className="bg-custom-dark py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center min-h-[88px]">
              {/* Left Side - Search */}
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="search-container">
                  <i className="ri-search-eye-fill main-nav-icon search-icon"></i>
                  <input
                    type="text"
                    placeholder="Projects, Skills, Technologies"
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              {/* Right Side - Navigation Options with Icons (horizontal layout) */}
              <div className="flex flex-wrap justify-center space-x-4 md:space-x-12">
                {navOptions.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-white hover:text-white text-sm font-medium flex items-center justify-center mb-2 md:mb-0 ${activeTab === item.name ? "selected-tab" : "inactive-tab"}`}
                    onClick={(e) => handleNavigation(item, e)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${item.icon} main-nav-icon`}></i>
                    <span className="ml-3 nav-label">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under fixed header - adjusted heights */}
      <div className={`${scrolled ? 'h-[88px]' : 'h-[176px]'} transition-all duration-300`}></div>

      {/* Main Content - Tab Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8"
        animate={controls}
        initial="hidden"
      >
        <motion.div 
          className="mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">{getPageTitle()}</h2>
          <p className="text-lg text-white opacity-80">
            {activeTab === "AI Prototype" && "Exploring the intersection of artificial intelligence and design"}
            {activeTab === "Figma" && "Interactive prototypes and design systems created in Figma"}
            {activeTab === "DesignInk" && "Thoughts, insights and tutorials on design and product management"}
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
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[0].link ? 'cursor-pointer' : ''} w-full lg:w-[700px] max-w-[700px] h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0 }}
                onClick={() => handleCardClick(cardData[0].link)}
            >
              {/* Card Header with Badge and Date */}
                <div className="p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-sm font-bold">
                    #{cardData[0].number}
                  </div>
                  <div className="text-white opacity-80 text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[0].date}
                  </div>
                </div>
                
                {/* Card Image - 80% of remaining height */}
                <div className="overflow-hidden hover-scale flex-grow" style={{ height: '80%' }}>
                  <img 
                    src={cardData[0].image} 
                    alt={cardData[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                                  {/* Card Title and Expandable Content - 20% of remaining height */}
                <div className="p-4" style={{ height: '20%', minHeight: '70px' }}>
                  <h3 className="text-xl font-bold text-white mb-1">{cardData[0].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-sm">{cardData[0].subtitle}</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Small with 65% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[1].link ? 'cursor-pointer' : ''} w-full lg:w-[500px] max-w-[500px] h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                onClick={() => handleCardClick(cardData[1].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-4 flex justify-between items-center">
                <div className="bg-custom-dark px-2 py-1 rounded text-white text-sm font-bold">
                    #{cardData[1].number}
                  </div>
                  <div className="text-white opacity-80 text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[1].date}
                  </div>
                </div>
                
                {/* Card Image - 65% of remaining height */}
                <div className="overflow-hidden hover-scale" style={{ height: '65%' }}>
                  <img 
                    src={cardData[1].image} 
                    alt={cardData[1].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 35% of remaining height */}
                <div className="p-4 flex-grow" style={{ height: '35%' }}>
                  <h3 className="text-lg font-bold text-white mb-1">{cardData[1].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-sm">{cardData[1].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Row: Large (700px) + Small (500px) */}
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-start">
              {/* Card 3 - Large with 90% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[2].link ? 'cursor-pointer' : ''} w-full lg:w-[700px] max-w-[700px] h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                onClick={() => handleCardClick(cardData[2].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-sm font-bold">
                    #{cardData[2].number}
                </div>
                <div className="text-white opacity-80 text-sm flex items-center">
                  <i className="ri-calendar-line mr-1"></i>
                    {cardData[2].date}
                  </div>
                </div>
                
                {/* Card Image - 80% of remaining height */}
                <div className="overflow-hidden hover-scale flex-grow" style={{ height: '80%' }}>
                  <img 
                    src={cardData[2].image} 
                    alt={cardData[2].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 20% of remaining height */}
                <div className="p-4" style={{ height: '20%', minHeight: '70px' }}>
                  <h3 className="text-xl font-bold text-white mb-1">{cardData[2].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-sm">{cardData[2].subtitle}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 4 - Small with 65% image height */}
              <motion.div 
                className={`bg-custom-dark rounded-lg overflow-hidden hover-card ${cardData[3].link ? 'cursor-pointer' : ''} w-full lg:w-[500px] max-w-[500px] h-[550px] flex flex-col`}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                onClick={() => handleCardClick(cardData[3].link)}
              >
                {/* Card Header with Badge and Date */}
                <div className="p-4 flex justify-between items-center">
                  <div className="bg-custom-dark px-2 py-1 rounded text-white text-sm font-bold">
                    #{cardData[3].number}
                  </div>
                  <div className="text-white opacity-80 text-sm flex items-center">
                    <i className="ri-calendar-line mr-1"></i>
                    {cardData[3].date}
                  </div>
                </div>
                
                {/* Card Image - 65% of remaining height */}
                <div className="overflow-hidden hover-scale" style={{ height: '65%' }}>
                  <img 
                    src={cardData[3].image} 
                    alt={cardData[3].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Title and Expandable Content - 35% of remaining height */}
                <div className="p-4 flex-grow" style={{ height: '35%' }}>
                  <h3 className="text-lg font-bold text-white mb-1">{cardData[3].title}</h3>
                  
                  {/* Subtitle shown on hover */}
                  <div className="hover-subtitle overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <p className="text-white opacity-80 text-sm">{cardData[3].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Figma Tab Content */}
        <div className={`tab-content ${activeTab === "Figma" ? "active" : ""}`}>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Figma" ? "visible" : "hidden"}
          >
            {figmaDesigns.map((design, index) => (
              <motion.div 
                key={design.id}
                className="bg-custom-dark rounded-lg overflow-hidden hover-card"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                {/* Design Image */}
                <div className="overflow-hidden h-64 hover-scale">
                  <img 
                    src={design.image} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                />
              </div>
              
                {/* Design Title */}
              <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{design.title}</h3>
                  <p className="text-white opacity-80 mt-2 mb-3">
                    <i className="ri-line-chart-line mr-2"></i>
                    {design.metrics}
                  </p>
                  <div className="flex flex-wrap mb-3">
                    {design.tools.map((tool, i) => (
                      <span key={i} className="badge badge-design">{tool}</span>
                    ))}
                  </div>
                  <motion.a 
                    href={design.link} 
                    className="text-white opacity-80 mt-2 inline-flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>View in Figma</span>
                    <i className="ri-external-link-line ml-1"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DesignInk Tab Content (formerly Blog) */}
        <div className={`tab-content ${activeTab === "DesignInk" ? "active" : ""}`}>
          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "DesignInk" ? "visible" : "hidden"}
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className="blog-post"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Blog Image */}
                  <div className="md:w-1/3">
                    <div className="overflow-hidden hover-scale">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="md:w-2/3">
                    <div className="flex items-center text-sm text-white opacity-60 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-white opacity-80 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap mb-4">
                      {post.skills.map((skill, i) => (
                        <span key={i} className="badge badge-tool">{skill}</span>
                      ))}
                    </div>
                    <motion.button 
                      className="text-white inline-flex items-center bg-transparent border-none cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span>Read more</span>
                      <i className="ri-arrow-right-line ml-1"></i>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Playground" ? "visible" : "hidden"}
          >
            {funProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-custom-dark rounded-lg overflow-hidden hover-card"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="overflow-hidden h-64 hover-scale">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
      </div>
                
                {/* Project Title and Description */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-white opacity-80 mt-1 mb-3">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge badge-ai">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-custom-dark text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <motion.span 
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                AJAY MANATH
              </motion.span>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com`}
                  className="text-white opacity-80 hover:text-white hover:opacity-100 flex items-center mb-2"
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
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-white opacity-60">
            © {new Date().getFullYear()} AJAY MANATH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
