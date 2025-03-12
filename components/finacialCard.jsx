import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import { Apple, Play } from 'lucide-react';

const FinancialCard  = () => {
  return (
    <div className="pb-20 px-6 mt-20">
        
      {/* Left Section (Text) */}
      <div className="conatiner mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight gradient-title gradient">
          Refined modern card and thrilling application for your financial purposes.
        </h1>
        <p className="text-gray-500 text-lg">
          Experience sophistication with our modern card and thrilling financial app. Elevate your financial journey effortlessly.
        </p>

        {/* Download Buttons */}
        <div className="justify-center space-x-4 mt-8">
          <Button variant={'default'}>
            <Apple className='w-6 h-6 '/> Coming soon
          </Button>
          <Button variant="outline">
            <Play className='w-6 h-6 text-blue-500'/> Coming soon
          </Button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="mx-auto px-6  flex justify-center">
        <Image
          src="/financialcard.png" // Ensure correct path
          alt="Financial App and Card"
          width={700}
          height={600}
          className="w-full mx-auto "

        />
      </div>

    </div>
  )
}

export default FinancialCard; 