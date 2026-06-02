import roof1 from "../assets/stock-images/roof1.jpg";
import roof2 from "../assets/stock-images/roof2.jpg";
import roof3 from "../assets/stock-images/roof3.jpg";

const roofingData = {
  theme: {
    primary: "#2563eb",
    secondary: "#1e293b",
  },
  businessName: "ABC Roofing",
  logo: "/logos/roofing-logo.png",

  heroTitle: "Reliable Roofing Services",

  heroText:
    "Residential and commercial roofing solutions with fast response times and trusted workmanship.",

  services: ["Roof Repair", "Roof Replacement", "Storm Damage Repair"],

  images: [roof1, roof2, roof3],

  reviews: [
    {
      name: "Michael R.",
      rating: 5,
      text: "Outstanding service from start to finish.",
    },
    {
      name: "Sarah T.",
      rating: 4,
      text: "Fast response times and professional workmanship.",
    },
    {
      name: "David L.",
      rating: 5,
      text: "Reliable, efficient, and easy to work with.",
    },
  ],

  whyChooseUs: [
    "Licensed and insured professionals",
    "Fast response and emergency service",
    "Quality workmanship backed by experience",
  ],

  ctaTitle: "Protect Your Roof Today!",
  ctaButton: "Get Free Estimate",

  contact: {
    phone: "(713) 555-1234",
    email: "info@abcroofing.com",
    address: "Houston, TX",
  },
};

export default roofingData;
