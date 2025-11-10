import React from "react";
import { Button } from "../../../../components/ui/button";
import { HospitalCarousel } from "../../../../components/HospitalCarousel";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About Us", active: false },
  { label: "Specialities", active: false },
  { label: "Appointments", active: false },
  { label: "Online Report", active: false },
];

export const HeroBannerSection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Main Header/Navbar */}
      <header className="flex flex-col w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="flex w-full items-center justify-between px-4 md:px-16 lg:px-20 py-4 md:py-5">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-xl bg-[linear-gradient(180deg,rgba(0,35,85,1)_0%,rgba(37,99,235,1)_100%)]">
              <img
                className="w-9 h-6 md:w-10 md:h-7 object-cover"
                alt="SDSH Logo"
                src="/generated-image--1--removebg-preview-1.png"
              />
            </div>

            <div className="flex flex-col">
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-lg md:text-xl tracking-[0] leading-tight">
                SDSH
              </div>
              <div className="text-[#495565] text-xs md:text-sm [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                Hospital Information System
              </div>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`${
                  item.active 
                    ? "border-b-2 border-[#002355] pb-1" 
                    : "pb-1 hover:text-[#002355]"
                } [font-family:'Inter',Helvetica] font-medium text-[#002355] text-base tracking-[0] leading-6 whitespace-nowrap bg-transparent border-0 cursor-pointer transition-all`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Login Button */}
          <Button className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#002355] rounded-lg shadow-md h-auto hover:bg-[#002355]/90 transition-all">
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
              Login
            </span>
          </Button>
        </div>
      </header>
      
      {/* Carousel Section */}
      <HospitalCarousel />
    </div>
  );
};
