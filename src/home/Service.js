import './Service.css'
const Service = () => {
    return ( 
        <div className='service-grid'>
            <div className='service-box'>
                <i className="las la-shipping-fast service-icon"></i>
                <div>
                <h4>FREE SHIPPING</h4>
                <span>Free shipping on all US order or order above $100</span>
                </div>
            </div>
            <div className='service-box'>
                <i className="las la-life-ring service-icon"></i>
                <div>
                <h4>SUPPORT 24/7</h4>
                <span>Contact us 24 hours a day, 7 days a week</span>
                </div>
            </div>
            <div className='service-box'>
               <i className="las la-exchange-alt service-icon"></i>
                <div>
                <h4>30 DAYS RETURN</h4>
                <span>Simply return it within 30 days for an exchange.</span>
                </div>
            </div>
            <div className='service-box'>
               <i className="las la-money-check service-icon"></i>
                <div>
                <h4>100% PAYMENT SECURE</h4>
                <span>We ensure secure payment with PEV</span>
                </div>
            </div>
        </div>
     );
}
 
export default Service;