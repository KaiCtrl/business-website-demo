import plumber1 from "../assets/stock-images/plumber1.jpg";
import plumber2 from "../assets/stock-images/plumber2.jpg";
import plumber3 from "../assets/stock-images/plumber3.jpg";

const plumbingData = {
  theme: {
    primary: "#1e40af",
    secondary: "#0f172a",
  },
  businessName: "ABC Plumbing",
  logo: "/logos/plumbing-logo.png",

  heroTitle: "Trusted Plumbing Services",

  heroText: "Fast, reliable plumbing solutions for homes and businesses.",

  services: ["Leak Repair", "Drain Cleaning", "Water Heater Installation"],

  whyChooseUs: [
    "Licensed and insured plumbers",
    "Fast emergency response",
    "Transparent pricing",
  ],
  images: [plumber1, plumber2, plumber3],

  reviews: [
    {
      name: "John D.",
      rating: 5,
      text: "Quick response and excellent service.",
    },
  ],

  ctaTitle: "Fix Your Plumbing Problems Today!",
  ctaButton: "Schedule Service",

  contact: {
    phone: "(713) 555-5555",
    email: "contact@abcplumbing.com",
    address: "Houston, TX",
  },
};

export default plumbingData;
