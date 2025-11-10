import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const departments = [
  "Patient Management (OPD/IPD)",
  "Clinical Services & Diagnostics",
  "Pharmacy & Inventory Management",
  "Radiology & Imaging",
  "Laboratory & Pathology",
  "Billing & Financial Management",
];

const features = [
  {
    icon: "/container-15.svg",
    title: "Patient Management",
    description:
      "Comprehensive OPD & IPD patient management with complete medical records and digital health tracking",
  },
  {
    icon: "/container-12.svg",
    title: "Appointment System",
    description:
      "Smart scheduling and appointment management for doctors and patients with automated reminders",
  },
  {
    icon: "/container-1.svg",
    title: "Clinical Services",
    description:
      "Integrated diagnostic, pathology, and radiology services with real-time results",
  },
  {
    icon: "/container-2.svg",
    title: "Pharmacy & Inventory",
    description:
      "Complete pharmacy management with POS system and automated inventory control",
  },
  {
    icon: "/container-5.svg",
    title: "Medical Records",
    description:
      "Secure digital medical records, e-prescriptions, and comprehensive lab reports",
  },
  {
    icon: "/container-4.svg",
    title: "Analytics & Reports",
    description:
      "Real-time dashboards and comprehensive reporting system for data-driven decisions",
  },
];

const statistics = [
  {
    icon: "/container-13.svg",
    value: "50,000+",
    label: "Patients Served",
  },
  {
    icon: "/container-7.svg",
    value: "150+",
    label: "Healthcare Professionals",
  },
  {
    icon: "/container-10.svg",
    value: "99.8%",
    label: "System Uptime",
  },
  {
    icon: "/container-3.svg",
    value: "24/7",
    label: "Support Available",
  },
];

const benefits = [
  {
    icon: "/container-9.svg",
    title: "Lightning Fast",
    description:
      "Optimized for speed and efficiency in busy hospital environments",
  },
  {
    icon: "/container-11.svg",
    title: "Secure & Compliant",
    description: "HIPAA compliant with enterprise-grade security standards",
  },
  {
    icon: "/container-14.svg",
    title: "Award Winning",
    description: "Recognized for excellence in healthcare IT solutions",
  },
  {
    icon: "/container.svg",
    title: "Patient Centric",
    description: "Designed to improve patient care and experience",
  },
];

export const UserProfileSection = () => {
  return (
    <section className="flex flex-col items-start gap-16 pt-16 px-8 w-full">
      <header className="flex flex-col items-center gap-8 w-full">
        <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-4xl text-center tracking-[0] leading-10">
          Complete Hospital Management Solution
        </h1>

        <p className="[font-family:'Inter',Helvetica] font-normal text-[#495565] text-lg text-center tracking-[0] leading-[29.2px] max-w-[896px]">
          MediCore Hospital Information System provides consultations,
          diagnostics, and treatment services through highly qualified
          professionals. Our comprehensive platform integrates all aspects of
          hospital operations under one unified system, ensuring seamless
          workflow and exceptional patient care.
        </p>
      </header>

      <div className="flex flex-col items-start gap-6 w-full">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-2xl tracking-[0] leading-8">
          Our Departments:
        </h2>

        <ul className="grid grid-cols-2 gap-4 w-full">
          {departments.map((department, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#002355] text-base tracking-[0] leading-6">
                {department}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-12 w-full">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-3xl text-center tracking-[0] leading-9 w-full">
          Key Features & Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl border-2 border-solid border-[#f2f4f6] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]"
            >
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <img
                  className="w-20 h-20"
                  alt={feature.title}
                  src={feature.icon}
                />

                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-lg tracking-[0] leading-7">
                  {feature.title}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-normal text-[#495565] text-sm tracking-[0] leading-[22.8px]">
                  {feature.description}
                </p>

                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-5">
                    Learn More
                  </span>
                  <img className="w-4 h-4" alt="Icon" src="/icon-1.svg" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-12 pt-12 pb-12 px-12 w-full rounded-2xl bg-[linear-gradient(180deg,rgba(0,35,85,1)_0%,rgba(29,78,216,1)_100%)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <img className="w-16 h-16" alt={stat.label} src={stat.icon} />

              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-10">
                {stat.value}
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-[#daeafe] text-base text-center tracking-[0] leading-6">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-12 w-full">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-3xl text-center tracking-[0] leading-9 w-full">
          Why Choose SDSH
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <img
                className="w-20 h-20"
                alt={benefit.title}
                src={benefit.icon}
              />

              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#002355] text-lg text-center tracking-[0] leading-7">
                {benefit.title}
              </h3>

              <p className="[font-family:'Inter',Helvetica] font-normal text-[#495565] text-base text-center tracking-[0] leading-[26px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col items-center gap-8 pt-16 pb-16 px-8 md:px-12 w-full rounded-3xl bg-[linear-gradient(135deg,rgba(0,35,85,1)_0%,rgba(29,78,216,1)_50%,rgba(37,99,235,1)_100%)] shadow-2xl">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight max-w-4xl">
          Ready to Transform Your Hospital?
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-white/90 text-lg md:text-xl text-center tracking-[0] leading-relaxed max-w-3xl">
          Join hundreds of healthcare facilities using MediCore to deliver better patient care and streamline operations
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4">
          <Button className="h-auto flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#002355] rounded-xl shadow-lg hover:shadow-xl transition-all">
            <span className="[font-family:'Inter',Helvetica] font-semibold text-base md:text-lg tracking-[0] leading-6">
              Access Dashboard
            </span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>

          <Button
            variant="outline"
            className="h-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl border-2 border-white/50 hover:border-white shadow-lg transition-all"
          >
            <span className="[font-family:'Inter',Helvetica] font-semibold text-base md:text-lg tracking-[0] leading-6">
              User Management
            </span>
          </Button>
        </div>
      </div> */}
    </section>
  );
};
