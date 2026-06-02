<input
  placeholder="Business Name"
/>

<select>
  <option>Roofing</option>
  <option>Plumbing</option>
  <option>Landscaping</option>
</select>

  logo: "",
<div className="logo">
  {clientData.businessName}
</div>
<div className="hero-header">
  <img
    src={clientData.logo}
    alt={clientData.businessName}
    className="logo"
  />

  <h1>{clientData.heroTitle}</h1>
</div>
  heroTitle: "",
  heroText: "",
  hours: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 3pm", "Sun: Closed"],
  images: [],

  services: [],

  whyChooseUs: ["", "", ""],

  reviews: [],

  ctaTitle: "",
  ctaButton: "",

  contact: {
    href: "",
    email: "",
    address: "",
  },
};

export default clientData;
