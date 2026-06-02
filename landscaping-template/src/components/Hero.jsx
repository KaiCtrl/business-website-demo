import clientData from "../data/clientData";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Trusted {clientData.industry} Services in {clientData.city}
      </h1>

      <p>Professional solutions from {clientData.businessName}</p>

      <button>Call {clientData.phone}</button>
    </section>
  );
}

export default Hero;
