export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 text-purple-900 py-16 px-6 relative overflow-hidden border-t border-purple-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-overlay blur-[80px]"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-overlay blur-[80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">Synova</span>
            </div>
            <p className="text-purple-800">
              Transforming customer interactions with AI-powered intelligence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-purple-700 hover:text-pink-600 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-purple-700 hover:text-pink-600 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-purple-700 hover:text-pink-600 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Features
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Pricing
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Solutions
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Demo
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Documentation
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Webinars
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Support
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Careers
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a></li>
              <li><a href="#" className="hover:text-pink-700 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Legal
              </a></li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-purple-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-700 text-sm">© {new Date().getFullYear()} Synova AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-purple-700 hover:text-pink-600 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-purple-700 hover:text-pink-600 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-purple-700 hover:text-pink-600 text-sm transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}