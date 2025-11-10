import React from "react";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const HospitalInformation = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <MainContentSection />
      <HeroBannerSection />
      <NavigationSection />
      <UserProfileSection />
      <SiteFooterSection />
    </div>
  );
};
