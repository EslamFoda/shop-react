import "./Blog.css";
const Blog = () => {
  return (
    <div className="main-container">
      <div className="organic-header">
        <img
          src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/Latest_180x.png?v=1592820556%20180w,%20//cdn.shopify.com/s/files/1/0270/2098/4401/files/Latest_360x.png?v=1592820556%20360w"
          alt=""
        />
        <h1 className="hero-header discover-header">FROM OUR BLOG</h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/shape-heading_360x.png?v=1592815053"
          alt=""
        />
      </div>
      <div className="Blog-grid">
        <div className="blog-box">
          <div className="blog-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/articles/Blog-5_720x.jpg?v=1592966237"
              alt=""
            />
          </div>
          <h4 className="blog-header">
            Lay the pumpkin pieces on the towel and let cool completely
          </h4>
          <span className="by-kate">By Kate Hoang on June 24,2021</span>
          <p>
            On another note, steaming your pumpkin is great way to maintain the
            most nutritional value when you eat it. it's ...
          </p>
        </div>
        <div className="blog-box">
          <div className="blog-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/articles/Blog-3_720x.jpg?v=1592907632"
              alt=""
            />
          </div>
          <h4 className="blog-header">
            Caring for your body with antioxidant rich organic superfoods
          </h4>
          <span className="by-kate">By Kate Hoang on June 23,2021</span>
          <p>
            Antioxidants may be the answer to help your body grow old
            gracefully, strong and healthy. Antioxidant are substan...
          </p>
        </div>
        <div className="blog-box">
          <div className="blog-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/2098/4401/articles/Blog-2_26f505b2-34ba-4103-8a30-84f4dc8adc2f_720x.jpg?v=1592907855"
              alt=""
            />
          </div>
          <h4 className="blog-header">
            How can salmon be raised organically in fish farms?
          </h4>
          <span className="by-kate">By Kate Hoang on June 21,2021</span>
          <p>
            Organic food consumption is rapidly inceasing. The heightened
            interest in the global enviroment and a willingness...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
