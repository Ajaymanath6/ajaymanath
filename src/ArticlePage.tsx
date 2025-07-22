import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

// Define proper types for content blocks
type ParagraphBlock = {
  type: 'paragraph';
  text: string;
};

type HeadingBlock = {
  type: 'heading';
  level: number;
  text: string;
};

type ListBlock = {
  type: 'list';
  items: string[];
};

type CodeBlock = {
  type: 'code';
  language: string;
  code: string;
};

type QuoteBlock = {
  type: 'quote';
  text: string;
};

type ImageBlock = {
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
};

type ContentBlock = ParagraphBlock | HeadingBlock | ListBlock | CodeBlock | QuoteBlock | ImageBlock;

// Define article type
type Article = {
  title: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  content: ContentBlock[];
  skills?: string[];
  relatedLinks?: Array<{
    title: string;
    url: string;
  }>;
};

// Article data with detailed content
const articles: Record<string, Article> = {
  "automating-design-system-testing": {
    title: "Automating Design System Implementation and Testing",
    date: "April 22, 2023",
    readTime: "7 min read",
    author: "Ajay Manath",
    heroImage: "/autofix.png",
    content: [
      {
        type: "paragraph",
        text: "In my previous article, we explored how to maintain design system consistency when using AI-powered prototyping tools. Now, let's tackle another critical challenge: ensuring that consistency is maintained throughout the development process and into production."
      },
      {
        type: "heading",
        level: 2,
        text: "The Challenge: Manual UI Verification"
      },
      {
        type: "paragraph",
        text: "Despite our best efforts to create comprehensive design systems, inconsistencies still find their way into production. Buttons with incorrect padding, dropdowns with misaligned elements, or form inputs with inconsistent styling—these issues often slip through manual reviews."
      },
      {
        type: "paragraph",
        text: "The traditional approach relies on manual QA processes where someone visually inspects each component against the design system specifications. This method is not only time-consuming but also prone to human error and oversight."
      },
      {
        type: "quote",
        text: '"Consistency is the foundation of user experience, but manual verification is the enemy of consistency at scale."'
      },
      {
        type: "heading",
        level: 2,
        text: "Automated Component Testing: The JSON Reference Method"
      },
      {
        type: "paragraph",
        text: "Building on the JSON token method from my previous article, we can create an automated testing framework that verifies every component against your design system before it reaches production."
      },
      {
        type: "heading",
        level: 3,
        text: "Step 1: Create Component-Specific JSON Reference Files"
      },
      {
        type: "paragraph",
        text: "First, we need to establish the source of truth for each component type in your design system:"
      },
      {
        type: "list",
        items: [
          "Create separate JSON files for each component category (buttons.json, inputs.json, dropdowns.json, etc.)",
          "Define all variants within each category (primary, secondary, tertiary buttons)",
          "Include all style properties that should be consistent (padding, colors, border-radius, etc.)"
        ]
      },
      {
        type: "code",
        language: "json",
        code: `// buttons.json
{
  "primary": {
    "background": "#3B82F6",
    "color": "#FFFFFF",
    "padding": "12px 24px",
    "borderRadius": "4px",
    "fontSize": "16px",
    "fontWeight": "500",
    "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  "secondary": {
    "background": "transparent",
    "color": "#3B82F6",
    "border": "1px solid #3B82F6",
    "padding": "12px 24px",
    "borderRadius": "4px",
    "fontSize": "16px",
    "fontWeight": "500"
  },
  "tertiary": {
    "background": "transparent",
    "color": "#3B82F6",
    "padding": "12px 24px",
    "borderRadius": "4px",
    "fontSize": "16px",
    "fontWeight": "400",
    "textDecoration": "underline"
  }
}`
      },
      {
        type: "heading",
        level: 3,
        text: "Step 2: Create Component-Specific Test Suites"
      },
      {
        type: "paragraph",
        text: "Instead of testing all components together, we'll create separate test suites for each component type:"
      },
      {
        type: "list",
        items: [
          "Button tests that scan for all button elements",
          "Input field tests for form controls",
          "Dropdown and select component tests",
          "Card and container component tests"
        ]
      },
      {
        type: "paragraph",
        text: "This separation allows tests to run faster and makes debugging easier when issues are found."
      },
      {
        type: "code",
        language: "javascript",
        code: `// buttonTests.js
import { test, expect } from '@playwright/test';
import buttonSpecs from './design-system/buttons.json';

test('All buttons match design system specifications', async ({ page }) => {
  await page.goto('/staging-environment');
  
  // Find all buttons on the page
  const buttons = await page.$$('button, .btn, [role="button"]');
  
  // Group buttons by variant
  const buttonsByVariant = {
    primary: [],
    secondary: [],
    tertiary: []
  };
  
  // Classify buttons based on their appearance
  for (const button of buttons) {
    const classList = await button.getAttribute('class');
    if (classList.includes('btn-primary')) {
      buttonsByVariant.primary.push(button);
    } else if (classList.includes('btn-secondary')) {
      buttonsByVariant.secondary.push(button);
    } else if (classList.includes('btn-tertiary')) {
      buttonsByVariant.tertiary.push(button);
    }
  }
  
  // Test each button against its reference specification
  for (const [variant, buttonList] of Object.entries(buttonsByVariant)) {
    for (const button of buttonList) {
      const styles = await button.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          background: computed.backgroundColor,
          color: computed.color,
          padding: \`\${computed.paddingTop} \${computed.paddingRight}\`,
          borderRadius: computed.borderRadius,
          fontSize: computed.fontSize,
          fontWeight: computed.fontWeight,
          boxShadow: computed.boxShadow
        };
      });
      
      // Compare with reference
      const reference = buttonSpecs[variant];
      expect(styles).toMatchObject(reference);
    }
  }
});`
      },
      {
        type: "heading",
        level: 3,
        text: "Step 3: Generate Compliance Reports"
      },
      {
        type: "paragraph",
        text: "After running the tests, we need a clear way to visualize compliance with the design system:"
      },
      {
        type: "list",
        items: [
          "Generate HTML reports showing pass/fail status for each component",
          "Include visual diffs highlighting where components deviate from specifications",
          "Calculate an overall design system compliance score",
          "Track compliance trends over time"
        ]
      },
      {
        type: "heading",
        level: 3,
        text: "Step 4: Automated Remediation Workflow"
      },
      {
        type: "paragraph",
        text: "Here's where we close the loop with automation:"
      },
      {
        type: "list",
        items: [
          "For each failed component, generate a fix suggestion referencing the JSON specification",
          "Create a pull request with the necessary CSS/style changes",
          "Provide developers with a one-click option to apply the fixes",
          "Re-run tests to verify the fixes resolved the issues"
        ]
      },
      {
        type: "code",
        language: "javascript",
        code: `// autofix.js
import { generateFixes } from './utils/styleFixGenerator';
import { createPullRequest } from './utils/gitIntegration';

async function autoFixComponents(testResults) {
  const failedComponents = testResults.filter(result => !result.passed);
  
  if (failedComponents.length === 0) {
    console.log('All components comply with design system. No fixes needed!');
    return;
  }
  
  console.log(\`Found \${failedComponents.length} components with style inconsistencies\`);
  
  // Generate fixes for each component
  const fixes = await generateFixes(failedComponents);
  
  // Create a PR with the fixes
  const prUrl = await createPullRequest({
    title: 'Design System Compliance Fixes',
    description: 'Automatically generated fixes for components that deviate from design system specifications',
    changes: fixes,
    branch: 'auto-design-system-fixes'
  });
  
  console.log(\`Created pull request with fixes: \${prUrl}\`);
}`
      },
      {
        type: "heading",
        level: 2,
        text: "Integrating with CI/CD Pipeline"
      },
      {
        type: "paragraph",
        text: "To make this truly powerful, we need to integrate it into the development workflow:"
      },
      {
        type: "list",
        items: [
          "Run component tests automatically on each pull request",
          "Block merges when components fail design system compliance checks",
          "Include compliance reports in PR comments for easy review",
          "Schedule regular audits of production to catch regressions"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Benefits of Automated Design System Testing"
      },
      {
        type: "paragraph",
        text: "This approach delivers several key advantages over manual verification:"
      },
      {
        type: "list",
        items: [
          "Consistency guarantee: Every component is verified against the same specification",
          "Time savings: Automated tests run in minutes versus hours of manual review",
          "Early detection: Catch inconsistencies before they reach production",
          "Documentation: Creates a living record of design system compliance",
          "Continuous improvement: Easily track design system adherence over time"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Implementation Tips"
      },
      {
        type: "paragraph",
        text: "When implementing this system, keep these best practices in mind:"
      },
      {
        type: "list",
        items: [
          "Start small with your most critical components (buttons, inputs)",
          "Use visual regression testing tools like Percy or Chromatic alongside style tests",
          "Create a dashboard for design system compliance metrics",
          "Involve both designers and developers in defining the reference specifications",
          "Update reference JSON files through a controlled process when design system changes"
        ]
      },
      {
        type: "quote",
        text: '"Automation doesn\'t replace human judgment in design, but it does ensure that human decisions are consistently implemented."'
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "By combining the JSON token method from our previous article with automated testing and remediation workflows, we create a powerful system that ensures design consistency from concept to production. This approach not only saves time but also creates a more reliable and consistent user experience."
      },
      {
        type: "paragraph",
        text: "In the next article, we'll explore how to extend this system to test not just individual components but also their interactions and compositions on the page."
      }
    ],
    skills: ["Automated Testing", "Design Systems", "CI/CD Integration"],
    relatedLinks: [
      {
        title: "Playwright Testing Framework",
        url: "https://playwright.dev/"
      },
      {
        title: "Percy Visual Testing",
        url: "https://percy.io/"
      },
      {
        title: "Storybook Component Explorer",
        url: "https://storybook.js.org/"
      }
    ]
  },
  "prototyping-with-custom-design-systems": {
    title: "Prototyping with Custom Design Systems Without Losing Consistency",
    date: "May 15, 2023",
    readTime: "6 min read",
    author: "Ajay Manath",
    heroImage: "/AI-Prototyping.png",
    content: [
      {
        type: "paragraph",
        text: "As designers, we're in the midst of a transformative era where AI is reshaping how we create digital experiences. However, with this exciting shift comes a significant challenge: maintaining design consistency when leveraging AI-powered prototyping tools."
      },
      {
        type: "heading",
        level: 2,
        text: "The Consistency Challenge"
      },
      {
        type: "paragraph",
        text: "If you've worked with design systems, you know the value of consistency. Your carefully crafted component library, with its precise spacing, typography, and color tokens, ensures a unified user experience across your product. But here's where the friction begins."
      },
      {
        type: "paragraph",
        text: "Most AI prototyping tools today are fantastic at generating UI quickly, but they often fail to adhere to your specific design system. The result? Components that are 'almost right' but miss crucial details like your brand's border radius, specific shadow values, or exact color tokens."
      },
      {
        type: "quote",
        text: '"Design is intelligence made visible, but AI-generated design without proper constraints is chaos made beautiful."'
      },
      {
        type: "heading",
        level: 2,
        text: "Bridging the Gap: The JSON Token Method"
      },
      {
        type: "paragraph",
        text: "What if we could give AI tools a perfect understanding of our design system's DNA? This is where our method comes in, leveraging the power of Figma MCP (Maker's Community Plugins) and Cursor to ensure perfect consistency."
      },
      {
        type: "heading",
        level: 3,
        text: "Step 1: Extract Component Properties as JSON"
      },
      {
        type: "paragraph",
        text: "The first step is to convert your design system's component properties into a machine-readable format. There are two approaches:"
      },
      {
        type: "list",
        items: [
          "Use a Figma MCP that extracts design tokens and properties to JSON",
          "Manually copy component properties from Figma and ask an AI like Gemini or ChatGPT to structure them as JSON"
        ]
      },
      {
        type: "code",
        language: "json",
        code: `{
  "button": {
    "primary": {
      "background": "#3B82F6",
      "text": "#FFFFFF",
      "padding": "12px 24px",
      "borderRadius": "4px",
      "shadow": "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
    "secondary": {
      "background": "transparent",
      "text": "#3B82F6",
      "border": "1px solid #3B82F6",
      "padding": "12px 24px",
      "borderRadius": "4px"
    }
  }
}`
      },
      {
        type: "heading",
        level: 3,
        text: "Step 2: Import Components via Figma MCP to Cursor"
      },
      {
        type: "paragraph",
        text: "Once your JSON structure is ready, the next step is to import your components from Figma to your code editor:"
      },
      {
        type: "list",
        items: [
          "Use a Figma MCP to export your component as code (React, Vue, etc.)",
          "Import this component into your Cursor editor",
          "The component will come with its visual structure, but might not perfectly match your design system yet"
        ]
      },
      {
        type: "heading",
        level: 3,
        text: "Step 3: Align Component with JSON Properties"
      },
      {
        type: "paragraph",
        text: "Here's where the magic happens. With both your component code and JSON properties in Cursor:"
      },
      {
        type: "list",
        items: [
          "Instruct Cursor to update your component properties to match the JSON specification",
          "Cursor's AI will automatically adjust all CSS/styling to perfectly align with your design system tokens",
          "Review the changes to ensure perfect alignment"
        ]
      },
      {
        type: "paragraph",
        text: "Since the JSON specification remains constant, every component processed this way will maintain perfect consistency with your design system. This creates a reliable bridge between AI-powered prototyping and your established design language."
      },
      {
        type: "heading",
        level: 2,
        text: "Creating a Reusable Workflow"
      },
      {
        type: "paragraph",
        text: "Once you've processed a component this way, make it a reusable building block in your prototype. You can then assemble these consistent components into more complex UI patterns and screens."
      },
      {
        type: "paragraph",
        text: "The beauty of this approach is that the JSON file serves as a single source of truth for your design system. If you update your design tokens in the future, you simply update the JSON file, and Cursor can help you propagate those changes across your prototype."
      },
      {
        type: "heading",
        level: 2,
        text: "Results: 100% Design System Compliance"
      },
      {
        type: "paragraph",
        text: "By implementing this workflow, you'll achieve several critical benefits:"
      },
      {
        type: "list",
        items: [
          "Perfect consistency with your design system, down to the pixel",
          "Faster prototyping leveraging AI capabilities",
          "Easier handoff to development with components that already match your design system",
          "Ability to quickly iterate on prototypes while maintaining brand integrity"
        ]
      },
      {
        type: "paragraph",
        text: "In an era where AI-powered design tools are evolving daily, this approach provides a future-proof method for maintaining design consistency while embracing the speed and capabilities of new technologies."
      },
      {
        type: "heading",
        level: 2,
        text: "Tools You'll Need"
      },
      {
        type: "list",
        items: [
          "Figma (with access to community plugins)",
          "Cursor (AI-powered code editor)",
          "A well-defined design system in Figma",
          "Optional: Gemini or ChatGPT for JSON structure optimization"
        ]
      },
      {
        type: "paragraph",
        text: "By bridging the gap between AI-powered prototyping and design system consistency, you can unlock new levels of efficiency without sacrificing the quality and cohesion of your user interface."
      },
      {
        type: "paragraph",
        text: "Ready to try this method with your design system? Start with a simple component and see how this workflow transforms your prototyping process while maintaining the consistency your users expect."
      }
    ],
    skills: ["AI Integration", "Design Systems", "Figma MCP"],
    relatedLinks: [
      {
        title: "Figma Community Plugins",
        url: "https://www.figma.com/community/plugins"
      },
      {
        title: "Cursor AI Editor",
        url: "https://cursor.sh"
      },
      {
        title: "Design Tokens in Practice",
        url: "https://www.smashingmagazine.com/2019/11/design-tokens-design-systems/"
      }
    ]
  },
  "future-of-design-ai-interfaces": {
    title: "The Future of Design: When AI Makes Interfaces Optional",
    date: "June 15, 2023",
    readTime: "6 min read",
    author: "Ajay Manath",
    heroImage: "/AI-Prototyping.png",
    content: [
      {
        type: "paragraph",
        text: "We stand at a fascinating inflection point in the history of human-computer interaction. As AI continues its exponential advancement, we're witnessing the early signs of a profound shift: traditional user interfaces—the screens, buttons, and visual elements we've spent decades perfecting—may soon become optional rather than necessary."
      },
      {
        type: "heading",
        level: 2,
        text: "From Necessity to Preference"
      },
      {
        type: "paragraph",
        text: "For decades, interfaces have been the essential bridge between humans and technology. We've evolved from command lines to graphical interfaces to touch screens, each iteration making technology more accessible. But what happens when the most natural interface becomes simply speaking your intent?"
      },
      {
        type: "paragraph",
        text: "As AI becomes increasingly capable of understanding natural language, context, and human intent, the traditional interface is transforming from a necessity to a preference—something that enhances rather than enables our interaction with technology."
      },
      {
        type: "quote",
        text: '"The best interface might soon be no interface at all."'
      },
      {
        type: "heading",
        level: 2,
        text: "The Rise of Intent-Based UI"
      },
      {
        type: "paragraph",
        text: "What I find most compelling is the emergence of what I call 'UI on Intent'—interfaces that materialize only when needed, shaped by the specific task at hand. Imagine opening an app and finding not a predetermined layout of buttons and navigation elements, but a conversational AI that listens to your needs."
      },
      {
        type: "paragraph",
        text: "Say 'Show me new products from Myntra,' and the AI generates a browsing interface tailored to that request. Follow up with 'What's my bill for these items?' and the interface transforms into a checkout flow. The UI appears contextually, based on your expressed intent, rather than forcing you to navigate through a predetermined structure."
      },
      {
        type: "heading",
        level: 2,
        text: "Voice as the Ultimate Interface"
      },
      {
        type: "paragraph",
        text: "Voice—our most fundamental mode of communication—is becoming the universal interface. When AI can reliably understand not just our words but our meaning, our desires, and even our emotions, the need for visual interfaces diminishes."
      },
      {
        type: "paragraph",
        text: "This doesn't mean interfaces will disappear entirely. Rather, they'll become more fluid, appearing when they add value and receding when voice or other modalities serve better. The best AI assistants will know when to show rather than tell, and when to tell rather than show."
      },
      {
        type: "heading",
        level: 2,
        text: "The Trust Barrier"
      },
      {
        type: "paragraph",
        text: "One significant hurdle remains: trust. Users don't yet fully trust conversational AI interfaces for critical tasks. We still want to see our options laid out, verify our selections, and confirm our actions visually. This is why I believe traditional interfaces will remain as a 'good to have' rather than vanishing entirely."
      },
      {
        type: "paragraph",
        text: "As trust grows, however, our reliance on visual confirmation will diminish. Just as we now trust navigation apps to guide us without questioning every turn, we'll eventually trust AI to handle tasks with minimal visual oversight."
      },
      {
        type: "heading",
        level: 2,
        text: "Designing for the Intent Era"
      },
      {
        type: "paragraph",
        text: "For designers, this shift demands a fundamental rethinking of our craft. We're moving from designing static interfaces to designing dynamic systems that can generate appropriate interfaces in response to user intent."
      },
      {
        type: "list",
        items: [
          "Focus on conversation flows rather than screen flows",
          "Design component systems that can be assembled dynamically",
          "Create rules for when and how interfaces should appear",
          "Build trust through transparency and appropriate feedback"
        ]
      },
      {
        type: "paragraph",
        text: "The designer's role evolves from crafting specific screens to creating the rules by which interfaces manifest—a meta-design approach that requires both technical understanding and deep empathy for user needs."
      },
      {
        type: "heading",
        level: 2,
        text: "Excitement and Trepidation"
      },
      {
        type: "paragraph",
        text: "This future fills me with both excitement and a touch of fear. Excitement because we're approaching a world where technology truly adapts to humans rather than forcing humans to adapt to it. Fear because we're entering uncharted territory where the rules of good design are yet to be written."
      },
      {
        type: "paragraph",
        text: "We're transcending into spaces once confined to science fiction, where computers understand us as naturally as humans do. The question isn't whether this future will arrive, but how we'll shape it to enhance rather than diminish the human experience."
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion: Designing Our Way Forward"
      },
      {
        type: "paragraph",
        text: "As designers, our mission remains unchanged even as our medium evolves: to create experiences that empower users, respect their agency, and bring joy. In a world where interfaces become optional, our focus shifts from the visual to the experiential—ensuring that technology serves human needs seamlessly, whether through screens or simply through conversation."
      },
      {
        type: "paragraph",
        text: "The future of design isn't about better buttons or more elegant layouts. It's about creating systems that understand human intent so deeply that the interface itself becomes transparent—present when needed, invisible when not, but always in service of human goals."
      },
      {
        type: "paragraph",
        text: "This is the world we're designing for. And while the path forward isn't entirely clear, I've never been more excited to explore it."
      }
    ],
    skills: ["AI", "Future of UI", "Voice Interfaces"],
    relatedLinks: [
      {
        title: "The Disappearing Computer",
        url: "https://www.wired.com/story/the-end-of-the-computer-mouse/"
      },
      {
        title: "Voice User Interface Design",
        url: "https://www.interaction-design.org/literature/topics/voice-user-interfaces"
      }
    ]
  }
};

function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  
  // Find the article that matches the URL parameter
  const article = articleId ? articles[articleId] : undefined;
  
  // If no matching article is found, show a "not found" message
  if (!article) {
    return (
      <div className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/?tab=Articles%20%26%20Tutorials" className="text-blue-400 hover:text-blue-300 flex items-center">
          <i className="ri-arrow-left-line mr-2"></i>
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Render the article
  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">
      {/* Header with back button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/?tab=Articles%20%26%20Tutorials" className="text-white flex items-center bg-black bg-opacity-50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
            <i className="ri-arrow-left-line mr-2"></i>
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image with overlay and title */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        {/* Hero Image */}
          <img 
            src={article.heroImage} 
            alt={article.title} 
            className="w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
        
        {/* Article title and metadata */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">{article.title}</h1>
            <div className="flex flex-wrap items-center text-xs sm:text-sm text-white opacity-80">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
            <span className="mx-2">•</span>
            <span>By {article.author}</span>
          </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full">
        <div className="prose prose-sm sm:prose lg:prose-lg prose-invert max-w-none">
        {article.content.map((block, index) => {
            // Render content based on block type
            switch (block.type) {
              case "paragraph":
            return (
                  <p key={index} className="mb-4 text-sm sm:text-base opacity-90">
                {block.text}
              </p>
            );
          
              case "heading":
                if (block.level === 2) {
            return (
                    <h2 key={index} className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                {block.text}
              </h2>
            );
                } else if (block.level === 3) {
            return (
                    <h3 key={index} className="text-lg sm:text-xl font-bold mt-6 mb-3">
                {block.text}
              </h3>
            );
                } else {
                  return (
                    <h4 key={index} className="font-bold">
                      {block.text}
                    </h4>
                  );
                }
              
              case "list":
            return (
                  <ul key={index} className="list-disc pl-5 mb-4 space-y-1">
                {block.items.map((item, i) => (
                      <li key={i} className="opacity-90 text-sm sm:text-base">{item}</li>
                ))}
              </ul>
            );
              
              case "code":
                return (
                  <div key={index} className="mb-6 overflow-x-auto">
                    <pre className="bg-gray-900 p-3 sm:p-4 rounded-md text-xs sm:text-sm">
                      <code className="text-gray-300 whitespace-pre-wrap break-words sm:whitespace-pre overflow-x-auto">
                        {block.code}
                      </code>
                    </pre>
                    <div className="text-xs mt-1 opacity-70 text-right">{block.language}</div>
                  </div>
                );
              
              case "quote":
            return (
                  <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic my-6 text-sm sm:text-base">
                {block.text}
              </blockquote>
            );
          
              case "image":
            return (
                  <figure key={index} className="my-6">
                    <img 
                      src={block.src} 
                      alt={block.alt || ""} 
                      className="w-full rounded-md"
                    />
                    {block.caption && (
                      <figcaption className="text-center mt-2 text-sm opacity-70">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
            );
              
              default:
          return null;
            }
        })}
        </div>
      </div>

      {/* Author bio */}
      <div className="max-w-4xl mx-auto px-4 py-8 w-full">
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <img 
              src="/me.jpg" 
              alt="Ajay Manath" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold">Ajay Manath</h3>
              <p className="text-sm sm:text-base opacity-80 mt-1 mb-3">AI Product Designer</p>
              <p className="text-sm opacity-70 max-w-md mx-auto sm:mx-0">
                Specializes in blending traditional UX principles with AI-driven prototyping tools to create innovative, user-centered digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related articles - simplified for mobile */}
      <div className="bg-black bg-opacity-30 py-8 sm:py-12 mt-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-custom-dark rounded-lg overflow-hidden hover-card">
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-bold mb-1">The Future of Design: When AI Makes Interfaces Optional</h3>
                <p className="text-sm opacity-70 mb-3">June 15, 2023 • 6 min read</p>
                <Link to="/article/future-of-design-ai-interfaces" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  <span>Read article</span>
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            </div>
            <div className="bg-custom-dark rounded-lg overflow-hidden hover-card">
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-bold mb-1">UI on Intent: The Conversational Future</h3>
                <p className="text-sm opacity-70 mb-3">July 8, 2023 • 8 min read</p>
                <Link to="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  <span>Stay tuned</span>
                  <i className="ri-time-line ml-1"></i>
                </Link>
              </div>
                </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-custom-dark text-white py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-xs sm:text-sm text-white opacity-60">
          © {new Date().getFullYear()} AJAY MANATH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ArticlePage; 