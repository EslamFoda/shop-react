import "./Organic.css";
const Organic = () => {
  return (
    <div className="main-container">
      <div className="organic-header">
        <img
          src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/icon_180x.png?v=1592648805"
          alt=""
        />
        <h1 className="hero-header">WELCOME TO ORGANIK</h1>
        <span>From our family farm right to your doorstep.</span>
      </div>
      <div className="organic-grid">
        <div className="organic-box">
          <div className="organic-img-container">
            <div className="organic-img-wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/banner1_360x.png?v=1592648680"
                alt=""
              />
            </div>
            <h2>WHO WE ARE?</h2>
            <p>
              Understanding the sometimes harmful methods of modern agriculture,
              we started a niche for quality organic produce grown.
            </p>
            <button className="organic-btn">Read More</button>
          </div>
        </div>
        <div className="organic-box">
          <div className="organic-img-container">
            <div className="organic-img-wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/banner-2_360x.png?v=1592648680"
                alt=""
              />
            </div>
            <h2>HOW WE WORK?</h2>
            <p>
              We believe it’s the best way to inspire our community to relish in
              the taste of real, seasonal produce and keep connected to the
              land.
            </p>
            <button className="organic-btn">Read More</button>
          </div>
        </div>
        <div className="organic-box">
          <div className="organic-img-container">
            <div className="organic-img-wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/banner-3_360x.png?v=1592648679"
                alt=""
              />
            </div>
            <h2>WHAT WE GROW?</h2>
            <p>
              We take special care to select and grow specific crop varieties
              where exceptional flavor is the focus, with a determination to
              bring the best-tasting produce.
            </p>
            <button className="organic-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organic;
