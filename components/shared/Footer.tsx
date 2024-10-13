"use client"

export function Footer() {
  return (
    <>
      {/* Footer */}

      <footer className=" relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Artifixer</h4>
              <p className="text-gray-300">Empowering creativity with AI-powered tools for image editing, text processing, and video creation.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about-us" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/term-of-service" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/cookies-policy" className="text-gray-300 hover:text-white">Cookies Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="mailto:support@artifixer.tech" className="text-gray-300 hover:text-white"> support@artifixer.tech</a>
                
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2024 Artifixer. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}