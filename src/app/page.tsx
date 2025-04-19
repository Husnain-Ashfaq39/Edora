'use client';

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from "@/components/ui/resizable-navbar";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { WobbleCard } from "@/components/ui/wobble-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CourseCard } from "@/components/ui/course-card";
import { Footer } from "@/components/ui/footer";
import { HeroHighlight } from "@/components/ui/hero-highlight-clean";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar className="top-4">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-20 flex items-center space-x-4">
            <NavbarButton variant="secondary" className="border border-[#5D87FF] text-[#5D87FF] bg-transparent hover:bg-[#5D87FF10]">Sign In</NavbarButton>
            <NavbarButton className="bg-[#5D87FF] text-white hover:bg-[#4D77EF]">Get Started</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="w-full rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-2">
              <NavbarButton variant="secondary" className="w-full border border-[#5D87FF] text-[#5D87FF] bg-transparent hover:bg-[#5D87FF10]">
                Sign In
              </NavbarButton>
              <NavbarButton className="w-full bg-[#5D87FF] text-white hover:bg-[#4D77EF]">
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="relative z-10">
        {/* Hero Section with HeroHighlight */}
        <HeroHighlight>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[#2A3546] dark:text-white">
              Transform Your Learning <Highlight>Journey</Highlight> Today
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 mb-10">
              Discover Edora - a revolutionary platform where AI-powered education meets personalized learning paths, 
              helping you master new skills at your own pace.
            </p>
          </div>
        </HeroHighlight>
        
        <div className="w-[100%] mx-auto mt-[-380px]">
          <MacbookScroll 
            src="/demo.png"
            showGradient={false}
            title={
              <span>
                
              </span>
            }
          />
        </div>
        
        {/* Spacer div with responsive margin */}
        <div className="mt-10 md:mt-40 lg:mt-240"></div>
        
        {/* Wobble Cards Section - Grid Layout */}
        <div className="w-[88%] mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Wobble Card - AI Powered Features */}
          <WobbleCard containerClassName="bg-pink-700 min-h-[320px] rounded-xl">
            <div className="text-white p-5 md:p-6 flex flex-col h-full">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">AI-powered<br />learning experience</h2>
                <p className="text-sm md:text-base mt-2">
                  Our platform leverages cutting-edge AI to personalize learning paths for each student, adapting in real-time to their strengths and challenges.
                </p>
              </div>
            </div>
          </WobbleCard>
          
          {/* Second Wobble Card - Live Features */}
          <WobbleCard containerClassName="bg-indigo-700 min-h-[320px] rounded-xl">
            <div className="text-white p-5 md:p-6 flex flex-col justify-center h-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Live<br />interactive<br />classrooms</h2>
              <p className="text-sm md:text-base mt-2">
                Connect with expert educators and peers worldwide through our seamless live streaming and collaborative tools.
              </p>
            </div>
          </WobbleCard>
          
          {/* Third Wobble Card - Easy to Use UI */}
          <WobbleCard containerClassName="bg-blue-700 min-h-[320px] md:col-span-2 rounded-xl">
            <div className="text-white p-5 md:p-6 flex flex-col h-full">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Intuitive interface designed for learning, not figuring out software</h2>
                <p className="text-sm md:text-base mt-2">
                  Our simple yet powerful UI lets students and educators focus on what matters most—the educational journey, not the technology behind it.
                </p>
              </div>
            </div>
          </WobbleCard>
        </div>
        
        {/* Featured Courses Section */}
        <div className="py-12 md:py-20 bg-white dark:bg-black mt-16">
          <div className="container mx-auto px-4 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A3546] dark:text-white mb-4">Featured <span className="text-[#5D87FF]">Courses</span></h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 mb-12">
              Discover our most popular courses designed to take your skills to the next level
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CourseCard 
                title="Web Development Bootcamp" 
                description="Master HTML, CSS, JavaScript, React and Node.js in this comprehensive course for beginners and intermediate developers."
                imageUrl="/images/courses/web-dev.jpg"
                instructor="David Johnson"
                instructorAvatar="/images/avatars/avatar1.jpg"
                duration="12 weeks"
              />
              
              <CourseCard 
                title="Data Science Fundamentals" 
                description="Learn Python, data analysis, machine learning and visualization techniques from industry experts."
                imageUrl="/images/courses/data-science.jpg"
                instructor="Sarah Williams"
                instructorAvatar="/images/avatars/avatar2.jpg"
                duration="10 weeks"
              />
              
              <CourseCard 
                title="UI/UX Design Masterclass" 
                description="Create stunning interfaces and user experiences using modern design principles and industry-standard tools."
                imageUrl="/images/courses/ui-ux.jpg"
                instructor="Michael Chen"
                instructorAvatar="/images/avatars/avatar3.jpg"
                duration="8 weeks"
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials - Infinite Moving Cards */}
        <div className="py-12 md:py-20 bg-gray-50 dark:bg-neutral-900 mt-16">
          <div className="container mx-auto px-4 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A3546] dark:text-white mb-4">What Our Students <span className="text-[#5D87FF]">Say</span></h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
              Hear from students and educators who have transformed their learning experience
            </p>
          </div>
          
          <div className="w-full overflow-hidden">
            <InfiniteMovingCards
              items={[
                {
                  quote: "This platform completely transformed how I teach. The AI transcription of my lectures saves me hours of work, and the real-time chat keeps my students engaged even outside class hours.",
                  name: "Dr. Sarah Williams",
                  title: "Professor of Computer Science"
                },
                {
                  quote: "As a working student, I was struggling to keep up with lectures. The ability to search through video content and find exactly what I need has been a game-changer for my studies.",
                  name: "Michael Chen",
                  title: "Part-time Engineering Student"
                },
                {
                  quote: "The AI features helped me identify gaps in my understanding that I didn't even know existed. My grades improved significantly within just one semester.",
                  name: "Priya Patel",
                  title: "Biology Major"
                },
                {
                  quote: "I've been able to reach students across 12 different countries with my course on sustainable architecture. The platform's global reach is incredible.",
                  name: "James Rodriguez",
                  title: "Architectural Design Instructor"
                },
                {
                  quote: "The accessibility features made all the difference for me. As a student with hearing impairment, the accurate transcripts have given me equal access to educational content.",
                  name: "Sophia Johnson",
                  title: "Psychology Student"
                }
              ]}
              speed="normal"
              direction="left"
              pauseOnHover={true}
              className="py-4"
            />
          </div>
          
          <div className="w-full overflow-hidden mt-4">
            <InfiniteMovingCards
              items={[
                {
                  quote: "The real-time collaboration tools have made group projects so much easier to coordinate. We can work together seamlessly even when we're on different continents.",
                  name: "David Kim",
                  title: "MBA Student"
                },
                {
                  quote: "As someone who teaches specialized content, I've been able to reach a much wider audience than I ever could at my local university. The platform has truly democratized education.",
                  name: "Dr. Maria Garcia",
                  title: "Quantum Physics Professor"
                },
                {
                  quote: "The AI-generated practice quizzes have helped me prepare for exams more effectively. It's like having a tutor that knows exactly what I need to work on.",
                  name: "Thomas Johnson",
                  title: "Pre-Med Student"
                },
                {
                  quote: "I was skeptical about online learning until I tried this platform. The interactive elements and community features make it feel more engaging than many of my in-person classes.",
                  name: "Emma Wilson",
                  title: "Digital Marketing Student"
                },
                {
                  quote: "Being able to teach on my own schedule has been life-changing. I can now reach students around the world while maintaining flexibility for my research work.",
                  name: "Prof. Alex Nguyen",
                  title: "Data Science Educator"
                }
              ]}
              speed="normal"
              direction="right"
              pauseOnHover={true}
              className="py-4"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
