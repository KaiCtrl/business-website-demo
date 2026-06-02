import landscape1 from "../assets/stock-images/landscape1.jpg";
import landscape2 from "../assets/stock-images/landscape2.jpg";
import landscape3 from "../assets/stock-images/landscape3.jpg";

const clientData = {
  theme: {
    primary: "#15803d",
    secondary: "#14532d",
  },
  businessName: "ABC Landscaping",
  logo: "/logos/landscape-logo.png",

  industry: "Landscaping",

  city: "Houston",

  heroTitle: "Professional Landscaping Services",

  heroText:
    "Transforming outdoor spaces with reliable landscaping, lawn care, and property maintenance.",

  services: ["Mowing", "Hedging", "Mulching"],

  whyChooseUs: [
    "Experienced landscaping professionals",
    "Reliable recurring maintenance plans",
    "Affordable residential and commercial services",
  ],

  images: [landscape1, landscape2, landscape3],

  reviews: [
    {
      name: "Michael R.",
      rating: 5,
      text: "Our yard has never looked better. Reliable service and great attention to detail.",
    },
    {
      name: "Sarah T.",
      rating: 4,
      text: "Professional crew, fast communication, and consistently excellent work.",
    },
    {
      name: "David L.",
      rating: 5,
      text: "The team transformed our property and exceeded expectations.",
    },
  ],

  ctaTitle: "Upgrade Your Outdoor Space Today!",

  ctaButton: "Get A Free Quote",

  contact: {
    phone: "(713) 555-1234",
    email: "contact@abclandscaping.com",
    address: "Houston, TX",
  },
};

export default clientData;
