import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const quickLinks = [
  "Find a Doctor",
  "Request an Appointment",
  "Online Report",
  "Speciality",
  "Health Package",
  "Contact Us",
];

const aboutLinks = [
  "About Us",
  "Patient Stories",
  "Privacy Policy",
  "Patient & Visitor Guide",
];

const locationInfo = [
  "Sonagazi Diabetes & Specialized Hospital",
  "Sonagazi, Feni",
  "Chittagong Division",
  "Bangladesh",
];

const contactInfo = [
  {
    icon: MailIcon,
    text: "info@sdshospital.org",
  },
  {
    icon: MapPinIcon,
    text: "Sonagazi, Feni, Bangladesh",
  },
];

export const SiteFooterSection = () => {
  return (
    <footer className="relative w-full bg-[#0f172a] mt-14">
      <div className="relative flex flex-col items-start gap-16 px-8 md:px-12 lg:px-20 pt-20 pb-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="flex w-14 h-14 md:w-18 md:h-18 items-center justify-center rounded-xl bg-[linear-gradient(180deg,rgba(68,199,244,1)_0%,rgba(37,99,235,1)_100%)] overflow-hidden">
                  <img src="/generated-image--1--removebg-preview-1.png" alt="SDSH logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                </div>

                <div className="flex flex-col">
                  {/* <div className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl md:text-xl leading-7">
                    SDSH
                  </div> */}
                  <div className="text-white text-sm leading-5 [font-family:'Inter',Helvetica] font-normal">
                    Sonagazi Diabetes & Specialized Hospital
                  </div>
                </div>
              </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <IconComponent className="w-5 h-5 text-[#44c7f4] mt-0.5 flex-shrink-0" />
                    <div className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-sm leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="w-fit px-6 py-3 bg-[#44c7f4] hover:bg-[#44c7f4]/90 rounded-full shadow-lg hover:shadow-xl transition-all [font-family:'Inter',Helvetica] font-semibold text-white text-base">
              Send Query
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-lg leading-7">
              Quick Links
            </div>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-sm leading-6 hover:text-[#44c7f4] transition-colors cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-lg leading-7">
              About
            </div>

            <div className="flex flex-col gap-3">
              {aboutLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-sm leading-6 hover:text-[#44c7f4] transition-colors cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-lg leading-7">
              Location
            </div>

            <div className="flex flex-col gap-2">
              {locationInfo.map((info, index) => (
                <div
                  key={index}
                  className="[font-family:'Inter',Helvetica] font-normal text-gray-300 text-sm leading-6"
                >
                  {info}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full pt-8 border-t border-gray-700 items-center justify-between gap-4">
          <div className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-sm leading-5">
            © Copyright 2025 SDSH. All rights reserved. Technology Partner: <a href="https://www.codetreebd.com" target="_blank" className="text-[#44c7f4] hover:underline">CODETREE</a>.
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
              { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
              { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", label: "LinkedIn" },
              // { icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z", label: "Instagram" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#44c7f4] flex items-center justify-center transition-all group"
                aria-label={social.label}
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-32 flex opacity-5 pointer-events-none overflow-hidden">
        <div className="w-full [font-family:'Inter',Helvetica] font-bold text-white text-6xl md:text-8xl text-center tracking-[4px] leading-[120px] whitespace-nowrap">
          Transforming Healthcare
        </div>
      </div>
    </footer>
  );
};
