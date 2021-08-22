import Hero from './home/Hero'
import Organic from './home/Organic'
import Service from './home/Service'
import Deal from './home/Deal'
import WhyUs from './home/WhyUs'
import Discover from './home/Discover'
import Banner from './home/Banner'
import Blog from './home/Blog'
import Sponser from './home/Sponser'
import Footer from './Footer'
const Home = () => {
    return ( 
        <div>
            <Hero />
            <Organic />
            <Service />
            <Deal />
            <WhyUs />
            <div style={{overflow:'hidden'}}>
            <Discover />
            <Banner />
            <Blog />
            <Sponser />
            <Footer />
            </div>
        </div>
     );
}
 
export default Home;