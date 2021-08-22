import './Banner.css'
const Banner = () => {
    return ( 
        <div className='banner-section'>
            <div className='left-banner'>
                <div className='banneer-wrapper'>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/Summer-season.png?v=1592816686" alt="" />
                <h2>NATURAL FRESH FRUITS</h2>
                <button className='hero-btn banner-btn'>SHOP NOW</button>
                </div>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/banner-oranges_720x.jpg?v=1592816686" alt="" />
            </div>
            <div className='right-banner'>
                <div className='banneer-wrapper2'>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/Packaging.png?v=1592816686" alt="" />
                <div className='fix'>
                <h2>GOURMET DRIED FRUITS</h2>
                <button className='hero-btn banner-btn'>SHOP NOW</button>
                </div>
                </div>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/lg-banner-2_720x.png?v=1592816706" alt="" />
            </div>

        </div>
     );
}
 
export default Banner;