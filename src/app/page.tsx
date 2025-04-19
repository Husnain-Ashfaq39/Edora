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
import { Timeline } from "@/components/ui/timeline";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  const timelineData = [
    {
      title: "2020",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Project Started</h4>
          <p className="text-neutral-700 dark:text-neutral-300">
            We began our journey with a simple idea: to create a platform that would revolutionize how people interact with technology.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-2 text-black dark:text-white">First Major Release</h4>
          <p className="text-neutral-700 dark:text-neutral-300">
            After months of development and testing, we launched our first version to the public, receiving overwhelmingly positive feedback.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Expanding Features</h4>
          <p className="text-neutral-700 dark:text-neutral-300">
            We added a suite of new features based on user feedback, making our platform more powerful and versatile than ever before.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Going Global</h4>
          <p className="text-neutral-700 dark:text-neutral-300">
            Our platform expanded to international markets, bringing our innovative solutions to users around the world.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Next Generation</h4>
          <p className="text-neutral-700 dark:text-neutral-300">
            Today, we&apos;re working on the next generation of our platform, with cutting-edge technologies and innovative features.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar className="top-4">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-20 flex items-center space-x-4">
            <NavbarButton variant="secondary">Sign In</NavbarButton>
            <NavbarButton>Get Started</NavbarButton>
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
              <NavbarButton variant="secondary" className="w-full">
                Sign In
              </NavbarButton>
              <NavbarButton className="w-full">
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="relative z-10">
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-4xl font-bold md:text-6xl tracking-tight mb-4 text-neutral-800 dark:text-white">
            Your Amazing Product
          </h1>
          <p className="mx-auto max-w-xl text-lg text-neutral-600 dark:text-neutral-300 mb-16">
            This is your product&apos;s stunning description. Engage your visitors with compelling content
            that showcases the value of your offering.
          </p>
        </div>
        
        <MacbookScroll 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showGradient={true}
          title={
            <span>
              Built with <span className="text-blue-500">modern technologies</span><br />
              for a seamless experience
            </span>
          }
        />
        
       
        
        <Timeline data={timelineData} />
      </main>
    </div>
  );
}
