import React from 'react';

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="content flex-grow">
        {/* Your main content here */}
      </div>
      <div className="footer-container py-8 px-6 bg-light mt-auto">
        <div className="footer-content max-w-5xl mx-auto text-center">
          <div className="footer-text text-sm text-muted mb-6">
            <span>&copy; Keshav Girase</span> | 
            <span> Source: 
              <a 
                href="https://mediastack.com/quickstart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                Mediastack API
              </a>
            </span>
          </div>

          <div className="footer-icons flex justify-center gap-8 mt-6">
            <a 
              href="https://www.linkedin.com/in/keshav890d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600"
            >
              <i className="fab fa-linkedin-in text-3xl"></i> 
            </a>
            <a 
              href="https://github.com/Keshav-girase" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
            <a 
              href="mailto:keshavgirase007@gmail.com" 
              className="text-gray-700 hover:text-red-600"
            >
              <i className="fas fa-envelope text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
