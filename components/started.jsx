
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';


const Started  = () => {
  return (
    <section className="py-10 md:px-12 lg:px-24">
        <div className="pb-20 px-6 mt-8">
        
        {/* Left Section (Text) */}
        <div className="conatiner mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight gradient-title gradient">
            Ready to Start your Journey to Financial Freedom?
          </h1>
          <p className="text-3x1 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their financies with <span className="font-semibold gradient-title gradient">SwtFyn</span>.
        </p>
          
  
          {/* Download Buttons */}
          <div className="justify-center">
              <Link href="/dashboard">
              <Button variant="def" size="lg" className="px-8 animate-bounce">Get Started</Button>
              </Link>
          </div>
        </div>
  
  
      </div>
    </section>
  )
}

export default Started; 