"use client";

import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Logo and Brand Name */}
        <div className="flex items-center space-x-3 mx-auto">
          <Image src="/log.png" alt="SwtFyn Logo" width={200} height={200} />          
        </div>

                
      </div>

      {/* Bottom Section */}      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>
          <span className="font-bold text-white">SwtFyn</span> © 2025 All rights reserved
        </p>
      </div>      
    </footer>
  )
}

export default Footer;