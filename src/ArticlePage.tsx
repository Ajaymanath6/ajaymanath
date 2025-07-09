import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

// Article data with detailed content
const articles = {
  "automated-design-system-testing": {
    title: "Automated Testing for Design System Consistency",
    date: "June 22, 2023",
    readTime: "6 min read",
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
  "ai-prototype-design-system": {
    title: "AI Prototype with Your Custom Design System",
    date: "May 15, 2023",
    readTime: "5 min read",
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
  }
};

function ArticlePage() {
  const { articleId } = useParams();
  const article = articles[articleId as keyof typeof articles];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4">Article not found</h1>
        <Link to="/" className="text-white hover:text-gray-300 transition-colors">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-custom-dark text-white">
      {/* Header with back button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/" className="text-white flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-lg backdrop-blur-sm">
            <i className="ri-arrow-left-line mr-2"></i>
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* Article Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={article.heroImage} 
            alt={article.title} 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2 text-sm text-white opacity-80">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
            <span className="mx-2">•</span>
            <span>By {article.author}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{article.title}</h1>
          <div className="flex flex-wrap justify-center">
            {article.skills.map((skill, index) => (
              <span key={index} className="badge badge-tool m-1">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {article.content.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p key={index} className="text-white opacity-90 my-6 leading-relaxed text-lg">
                {block.text}
              </p>
            );
          }
          
          if (block.type === "heading" && block.level === 2) {
            return (
              <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
                {block.text}
              </h2>
            );
          }
          
          if (block.type === "heading" && block.level === 3) {
            return (
              <h3 key={index} className="text-xl font-bold text-white mt-8 mb-4">
                {block.text}
              </h3>
            );
          }
          
          if (block.type === "list" && block.items) {
            return (
              <ul key={index} className="list-disc list-inside my-6 space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className="text-white opacity-90 leading-relaxed text-lg ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          
          if (block.type === "quote") {
            return (
              <blockquote key={index} className="border-l-4 border-white pl-6 italic my-8 text-white opacity-90 text-xl">
                {block.text}
              </blockquote>
            );
          }
          
          if (block.type === "code") {
            return (
              <pre key={index} className="bg-gray-800 p-6 rounded-lg my-8 overflow-x-auto">
                <code className="text-sm text-white">
                  {block.code}
                </code>
              </pre>
            );
          }
          
          return null;
        })}

        {/* Related Links */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <h3 className="text-xl font-bold mb-6">Related Resources</h3>
          <div className="space-y-4">
            {article.relatedLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white">{link.title}</span>
                  <i className="ri-external-link-line"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-custom-dark text-white py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} AJAY MANATH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default ArticlePage; 