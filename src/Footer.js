import './Footer.css'
const Footer = () => {
    return ( 
       <div className="footer">
    <div className="footer-top">
        <div className="footer-box-left">
            <img className='logo' src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/kalles_2x_a389d494-6b66-41e9-91dd-9f1b90710be6_140x.png?v=1591951678" alt="" />
            <p>Subscribe our newsletter and get discount 30% off</p>
            <div className="footer-icons">
               
            </div>
        </div>
        <div className="footer-box">
            <h4>Customer Care</h4>
            <div className="footer-line"></div>
            <h5 href="#">About Us</h5>
            <h5 href="#">Privacy Policy</h5>
            <h5 href="#">Terms & Conditions</h5>
            <h5 href="#">Products Return</h5>
            <h5 href="#">Wholesale Policy</h5>
        </div>
        <div className="footer-box">
            <h4>Quick Shop</h4>
            <div className="footer-line"></div>
            <h5 href="#">Pagination</h5>
            <h5 href="#">Terms & Conditions</h5>
            <h5 href="#">Contact</h5>
            <h5 href="#">Accessories</h5>
            <h5 href="#">Term of use</h5>
        </div>
        <div className="footer-box">
            <h4>Company</h4>
            <div className="footer-line"></div>
            <h5 href="#">Help Center</h5>
            <h5 href="#">Address Store</h5>
            <h5 href="#">Privacy Policy</h5>
            <h5 href="#">Receivers & Amplifiers</h5>
            <h5 href="#">Clothings</h5>
        </div>
    </div>
    <div className="footer-bottom">
        <p>© Copyright 2021 | Shop By <span className="myName">Eslam Mohamed.</span> Powered by <span className="vue">React js</span>.</p>
    </div>
</div>
     );
}
 
export default Footer;