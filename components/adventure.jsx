import Image from 'next/image';
import React from 'react'

const FinanceAdventure = () => {
  return (
    <section className="relative bg-black text-white py-12 lg:py-30">
      <div className="container mx-auto px-4 pb-4 items-center justify-center text-center ">
        {/* Text Content */}
        <div className="relative z-10 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold ">
            “Turn your finance into
            <br />
            a fun adventure!”
          </h1>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 lg:ml-8 relative z-50 ">
          <Image
            src="/playhouse.png" // Replace with your image path
            alt="Playhouse"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="text-white text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold opacity-80">
          Financial
        </p>
      </div>
    </section>
  )
}

export default FinanceAdventure;