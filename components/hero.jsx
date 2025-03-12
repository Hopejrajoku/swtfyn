'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef();

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition>scrollThreshold) {
                imageElement.classList.add("scrolled")
            } else {
                imageElement.classList.remove("scrolled")
            }
        }

        window.addEventListener("scroll", handleScroll )
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <div className="pb-20 px-4">
      <div className="conatiner mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[100px] pb-6 gradient-title gradient">
        Delivering the Ultimate Financial Management <br/> Experience with Smart Intelligence
        </h1>
        <p className="text-3x1 text-gray-600 mb-8 max-w-2xl mx-auto">
            An AI-powered financial management platform that enables you to track, analyze, and optimize your spending with real-time insights.
        </p>
        <div className="justify-center ">
            <Link href="/dashboard">
            <Button variant="def" size="lg" className="px-8 ">Get Started</Button>
            </Link>
        </div>
        <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
                <Image 
                src={"/flow.png"}
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl mx-auto"
                priority
                />
            </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;