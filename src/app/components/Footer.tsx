import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/wirelogo.png" 
              alt="Wiranium" 
              width={120}
              height={120}
              style={{
                height: '120px !important',
                width: 'auto !important',
                minHeight: '120px !important',
                maxHeight: 'none !important'
              }}
            />
          </div>
          <p className="text-gray-600 text-sm text-center mb-6">
            Protecting your Shopify store&apos;s revenue with intelligent return management.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6 text-sm">
            <a 
              href="mailto:founder@wiranium.com" 
              className="text-gray-600 hover:text-[#00cc88] transition-colors duration-200"
            >
              founder@wiranium.com
            </a>
            <a 
              href="tel:+916375113465" 
              className="text-gray-600 hover:text-[#00cc88] transition-colors duration-200"
            >
              +91 6375113465
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.linkedin.com/company/wiranium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#00cc88] transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Wiranium. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 