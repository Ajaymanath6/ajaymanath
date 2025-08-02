import React from 'react';
import { articlesData } from './articlesData';

interface ModalArticleContentProps {
  articlePath: string;
}

// Full article content component for modal
const ModalArticleContent: React.FC<ModalArticleContentProps> = ({ articlePath }) => {
  // Extract article ID from path
  const articleId = articlePath.replace('/article/', '');
  const article = articlesData[articleId];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-custom-dark text-white">
      {/* Hero Image with overlay and title */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <img 
          src={article.heroImage} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
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
      
      {/* Related articles */}
      <div className="bg-black bg-opacity-30 py-8 sm:py-12 mt-4">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-custom-dark rounded-lg overflow-hidden hover-card">
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-bold mb-1">The Future of Design: When AI Makes Interfaces Optional</h3>
                <p className="text-sm opacity-70 mb-3">June 15, 2023 • 6 min read</p>
                <span className="text-blue-400 hover:text-blue-300 text-sm flex items-center cursor-pointer">
                  <span>Read article</span>
                  <i className="ri-arrow-right-line ml-1"></i>
                </span>
              </div>
            </div>
            <div className="bg-custom-dark rounded-lg overflow-hidden hover-card">
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-bold mb-1">UI on Intent: The Conversational Future</h3>
                <p className="text-sm opacity-70 mb-3">July 8, 2023 • 8 min read</p>
                <span className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                  <span>Stay tuned</span>
                  <i className="ri-time-line ml-1"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalArticleContent;