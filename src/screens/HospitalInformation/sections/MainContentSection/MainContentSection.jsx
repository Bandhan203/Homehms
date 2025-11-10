import { PhoneIcon } from "lucide-react";
import React from "react";

const navigationItems = [
  { label: "Publications" },
  { label: "Locations" },
  { icon: true, label: "10678" },
  { label: "English" },
];

export const MainContentSection = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[66.5px] py-3 bg-[#002355]">
      <div className="flex items-center">
        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
          Welcome to MediCore Hospital Information System
        </p>
      </div>

      <div className="flex items-center gap-6">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            {item.icon && <PhoneIcon className="w-4 h-4 text-white" />}
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};
