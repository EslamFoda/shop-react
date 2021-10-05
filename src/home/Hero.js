import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <img
        className="hero-img"
        src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/slider_1512x.jpg?v=1592621878"
        alt=""
      />
      <div className="hero-text">
        <div className="hero-wrapper">
          <img
            className="hero-title"
            src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/text-slider.png?v=1592622373"
            alt=""
          />
          <h1 className="hero-header">TRUST THE NATURE!</h1>
          <button className="hero-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
