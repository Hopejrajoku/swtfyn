"use client";
import React from 'react'


import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { features } from '@/data/landing';



const items = ["features1", "features2", "features3", "features4", "features5"]

const financial = () => {

  const totalColumns = 3;

  const remainingColumns = totalColumns - (features.length % totalColumns || totalColumns);


  return (
    <section id='features' className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-title gradient">
          The best resources for flexible finances
        </h2>
        <p className="text-gray-600 mt-2">
          Enchanted features for your financial journey, making your experience a delight.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto p-4 rounded-lg" style={{backgroundColor: "#e6ccc19d"}}>
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`${
              index === features.length - 1 ? `lg:col-span-${remainingColumns} sm:col-span-2 col-span-1` : ""
            } container p-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <CardContent className="flex flex-col items-center text-center space-y-2 ">
              
              <CardTitle className="text-lg font-bold text-gray-800 gradient-title gradient">
                {feature.title}
              </CardTitle>
              <p className="text-gray-600">{feature.description}</p>

              <Image 
              width={400}
              height={400}
              src={feature.icon} alt={feature.title} className="w-60 h-60" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default financial