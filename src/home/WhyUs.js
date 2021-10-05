import { useEffect } from "react";
import "./WhyUs.css";
const WhyUs = () => {
  useEffect(() => {
    const toggles = document.querySelectorAll(".faq-toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
      });
    });
  });

  return (
    <div className="faq-section">
      <h1 className="hero-header">Why choose</h1>
      <h1 className="hero-header">ORGANIC PRODUCTS</h1>
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-title">What Is Organic?</h3>

          <p className="faq-text">
            What does “organic” mean? Simply stated, organic produce and other
            ingredients are grown without the use of pesticides, synthetic
            fertilizers, sewage sludge, genetically modified organisms, or
            ionizing radiation. The USDA National Organic Program (NOP) defines
            organic as follows: Organic food is produced by farmers who
            emphasize the use of renewable resources and the conservation of
            soil and water to enhance environmental quality for future
            generations. Organic meat, poultry, eggs, and dairy products come
            from animals that are given no antibiotics or growth hormones.
          </p>

          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">What does the USDA Organic seal mean?</h3>
          <p className="faq-text">
            The USDA Organic seal assures consumers of the quality and integrity
            of organic products. Organic-certified operations must have an
            organic system plan and records that verify compliance with that
            plan. Operators are inspected annually in addition there are random
            checks to assure standards are being met.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">How do I know if something is organic?</h3>
          <p className="faq-text">
            The USDA has identified for three categories of labeling organic
            products: 100% Organic: Made with 100% organic ingredients Organic:
            Made with at least 95% organic ingredients Made With Organic
            Ingredients: Made with a minimum of 70% organic ingredients with
            strict restrictions on the remaining 30% including no GMOs
            (genetically modified organisms) Products with less than 70% organic
            ingredients may list organically produced ingredients on the side
            panel of the package, but may not make any organic claims on the
            front of the package.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">Why does organic products cost more?</h3>
          <p className="faq-text">
            The truth of the matter is that organic food doesn’t always cost
            more. When the cost is higher, consider these facts: - Organic
            farmers don’t receive federal subsidies like conventional farmers
            do. Therefore, the price of organic food reflects the true cost of
            growing. - The price of conventional food does not reflect the cost
            of environmental cleanups that we pay for through our tax dollars. -
            Organic farming is more labor and management intensive. - Organic
            farms are usually smaller than conventional farms and so do not
            benefit from the economies of scale that larger growers get.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="faq">
          <h3 className="faq-title">Does the organic food taste better?</h3>
          <p className="faq-text">
            Taste is definitely an individual matter, but hundreds of gourmet
            chefs across the nation are choosing organic food to prepare because
            they believe it has superior taste and quality. An increasing number
            of consumers are also of the opinion that organic food tastes
            better. Because organic food is grown in well-balanced soil, it
            makes sense that these healthy plants have a great taste. Try
            organic food for yourself and see what you think!
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-title">
            Is organic food more nutritious than conventional food?
          </h3>
          <p className="faq-text">
            At this time, there is no definitive research that makes this claim.
            It is extremely difficult to conduct studies that would control the
            many variables that might affect nutrients, such as seeds, soil
            type, climate, postharvest handling, and crop variety. However, some
            recently published studies in peer-reviewed journals have shown
            organic foods to have higher nutritional value. For example,
            researchers at the University of California, Davis, recently found
            that organic tomatoes had higher levels of phytochemicals and
            vitamin C than conventional tomatoes.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="faq">
          <h3 className="faq-title">
            How does a farmer go about converting land to organic status?
          </h3>
          <p className="faq-text">
            Converting land to organic status is a three-year process. There is
            a two-year conversion process consisting of building up the
            fertility of the land. Produce grown in the first year cannot be
            stated as organic. In the second year produce may be stated as “In
            Conversion”. It is not until the third year that produce may be
            stated as fully organic. Soil and natural fertility building are
            important parts of organic farming.
          </p>
          <button className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
