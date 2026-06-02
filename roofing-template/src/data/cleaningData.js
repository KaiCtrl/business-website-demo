import cleaning1 from "../assets/stock-images/cleaning1.jpg";
import cleaning2 from "../assets/stock-images/cleaning2.jpg";
import cleaning3 from "../assets/stock-images/cleaning3.jpg";

const clientData = {
  theme: {
    primary: "#0ea5e9",
    secondary: "#0369a1",
  },
  businessName: "Sparkle Shine Cleaning",
  logo: "/logos/cleaning-logo.png",

  industry: "Cleaning",

  city: "Houston",

  heroTitle: "Professional Cleaning Services",

  heroText:
    "Reliable residential and commercial cleaning services tailored to your schedule and needs.",
  hours: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 3pm", "Sun: Closed"],
  services: ["Domestic Cleaning", "Commercial Cleaning", "Window Cleaning"],

  whyChooseUs: [
    "Reliable and punctual service",
    "Flexible scheduling options",
    "Attention to detail on every visit",
  ],

  images: [cleaning1, cleaning2, cleaning3],

  reviews: [
    {
      name: "Jessica M.",
      rating: 5,
      text: "Excellent service every time. The team is professional, thorough, and dependable.",
    },
    {
      name: "Robert K.",
      rating: 4,
      text: "Fast communication and outstanding results. Our office has never looked better.",
    },
    {
      name: "Amanda T.",
      rating: 5,
      text: "Friendly staff, flexible scheduling, and consistently high-quality work.",
    },
  ],

  ctaTitle: "Enjoy A Cleaner Space Today!",

  ctaButton: "Book A Cleaning",
  serviceArea: "Houston, TX",

  contact: {
    phone: "(713) 555-5555",
    email: "contact@Sparkle Shine Cleaning.com",
    address: "Houston, TX",
  },
};

export default clientData;
