import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import roofingData from "./data/roofingData";
import plumbingData from "./data/plumbingData";
import landscapingData from "./data/landscapingData";
import cleaningData from "./data/cleaningData";

const industries = {
  roofing: roofingData,
  plumbing: plumbingData,
  landscaping: landscapingData,
  cleaning: cleaningData,
};

function App() {
  const [selectedIndustry, setSelectedIndustry] = useState("cleaning");
  const clientData = industries[selectedIndustry];
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We'll be in contact shortly");
  };
  return (
    <div
      style={{
        "--primary": clientData.theme.primary,
        "--secondary": clientData.theme.secondary,
      }}
    >
      <nav>
        <a href="#services">Services</a>

        <a href="#gallery">Gallery</a>

        <a href="#reviews">Reviews</a>

        <a href="#contact">Contact</a>
      </nav>
      <div>
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
        >
          <option value="roofing">Roofing</option>
          <option value="plumbing">Plumbing</option>
          <option value="landscaping">Landscaping</option>
          <option value="cleaning">Cleaning</option>
        </select>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {clientData.ctaButton}
        </button>
        <section className="hero">
          <h1>{clientData.heroTitle}</h1>

          <p>{clientData.heroText}</p>

          <button>Get Free Estimate</button>
        </section>

        <section id="services">
          <h2>Services</h2>

          {clientData.services.map((service, index) => (
            <div key={index} className="service-card">
              {service}
            </div>
          ))}
        </section>
        <section className="Trusted Section">
          <h2>Trusted by Homeowners and Businesses</h2>
          <ul>
            <li>Licensed & Insured</li>
            <li>Emergency Service</li>
            <li>Free Estimates</li>
            <li>Financing Available</li>
          </ul>
        </section>
        <div>
          <section id="gallery" className="gallery">
            <h2>Previous Work</h2>

            <div className="gallery-grid">
              {clientData.images?.map((image, index) => (
                <img key={index} src={image} alt="Project${index + 1}" />
              ))}
            </div>
          </section>
        </div>

        <section id="reviews">
          <h2>Customer Reviews</h2>

          {clientData.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">{"⭐".repeat(review.rating)}</div>

              <h3>{review.name}</h3>

              <p>{review.text}</p>
            </div>
          ))}
        </section>

        <section className="cta">
          <h2>{clientData.ctaTitle}</h2>

          <button>{clientData.ctaButton}</button>
        </section>
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>

          {clientData.whyChooseUs.map((reason, index) => (
            <div key={index} className="reason-card">
              {reason}
            </div>
          ))}
        </section>

        <section id="contact" className="contact-form">
          <h2>Request A Free Estimate</h2>

          <form>
            <div className="contact-info">
              <h3>Call Today</h3>

              <p>{clientData.contact.phone}</p>
              <p>{clientData.contact.email}</p>
              <p>{clientData.contact.address}</p>
            </div>
          </form>
        </section>
        <footer>
          <p>© 2026 {clientData.businessName}</p>
          <p>{clientData.contact.phone}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
