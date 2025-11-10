import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const hospitalImages = [
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.45 PM.jpeg",
    alt: "Medical Facility",
    caption: "Modern Medical Facility",
    description: "State-of-the-art equipment"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.37 PM.jpeg",
    alt: "Hospital Facility",
    caption: "State-of-the-Art Hospital Facility",
    description: "Modern healthcare infrastructure"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.39 PM (1).jpeg",
    alt: "Hospital Department",
    caption: "Comprehensive Medical Services",
    description: "Advanced healthcare solutions"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.39 PM.jpeg",
    alt: "Medical Facility",
    caption: "Professional Healthcare Environment",
    description: "Quality patient care"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.40 PM (1).jpeg",
    alt: "Hospital Interior",
    caption: "Modern Hospital Interior",
    description: "Comfortable and clean facilities"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.40 PM.jpeg",
    alt: "Medical Department",
    caption: "Specialized Medical Departments",
    description: "Expert medical care"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.41 PM (1).jpeg",
    alt: "Patient Care Area",
    caption: "Dedicated Patient Care",
    description: "Your health is our priority"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.41 PM.jpeg",
    alt: "Hospital Services",
    caption: "Comprehensive Hospital Services",
    description: "Complete healthcare solutions"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.42 PM (1).jpeg",
    alt: "Medical Center",
    caption: "Advanced Medical Center",
    description: "Cutting-edge medical technology"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.42 PM.jpeg",
    alt: "Healthcare Facility",
    caption: "Premium Healthcare Facility",
    description: "Excellence in medical care"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.43 PM (1).jpeg",
    alt: "Hospital Ward",
    caption: "Well-Equipped Hospital Wards",
    description: "Comfortable patient accommodation"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.43 PM.jpeg",
    alt: "Medical Services",
    caption: "Professional Medical Services",
    description: "Trusted healthcare provider"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.44 PM (1).jpeg",
    alt: "Hospital Department",
    caption: "Specialized Hospital Departments",
    description: "Expert specialists available"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.45 PM (1).jpeg",
    alt: "Patient Services",
    caption: "Patient-Centered Services",
    description: "Caring for your wellbeing"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.48 PM.jpeg",
    alt: "Hospital Environment",
    caption: "Clean Hospital Environment",
    description: "Hygienic and safe facilities"
  },
  {
    src: "/hospital-images/WhatsApp Image 2025-11-10 at 12.06.49 PM.jpeg",
    alt: "Healthcare Center",
    caption: "Complete Healthcare Center",
    description: "Your health, our commitment"
  }
];

export const HospitalCarousel = () => {
  return (
    <div className="w-full relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        transitionTime={800}
        className="hospital-carousel"
        swipeable={true}
        emulateTouch={true}
      >
        {hospitalImages.map((image, index) => (
          <div key={index} className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-left">
              <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                {image.caption}
              </h2>
              <p className="text-white/90 text-base md:text-xl lg:text-2xl font-normal drop-shadow-md">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
