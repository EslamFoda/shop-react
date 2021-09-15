import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { projectFirestore } from "./home/firebase";
import { Link } from "react-router-dom";

import Tabs from "./Tabs";
import Like from "./Like";
import Viewed from "./Viewed";
import Footer from "./Footer";
import Loading from './Loading'
import Cart from "./Cart";
const Vegetables = () => {
    const [loading,setLoading] = useState(false)
    const params = useParams()
    const [product,setProduct] = useState(null)
    const [count, setCount] = useState(1);
    const [isOpen,setIsOpen] = useState(false)
    useEffect(()=>{
          setLoading(true)
        const unsub = projectFirestore.collection('vegetables').doc(params.id).onSnapshot(snap=>{
            setProduct(snap.data())
            setLoading(false)
        })
        
        return ()=> unsub()
    },[params.id])

     const handleAdd = ()=>{
        const item = {
            title: product.title,
            price: product.price,
            Categories: product.Categories,
            sku: product.sku,
            img: product.img,
            bigImg: product.bigImg,
            totla: product.price * count,
            quantity: count
        }
        projectFirestore.collection('cart').add(item)
        setCount(1)
        setIsOpen(true)
    }


    return ( 
        <div>
            <Cart isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
            {product && <div>
            {product && <div className='product-title-nav'>
                <Link className='product-title-link' to='/'>Home</Link>
                <span className="material-icons-outlined arrow">keyboard_arrow_right</span>
                <span>{product.title}</span>
            </div>}
            {product && <div className='product-grid'>
                <div className='left-product-grid'>
                <img src={product.bigImg} alt="" />
                </div>
                <div className='right-product-grid'>
                    <div className='product-details'>
                    <h1 className='deal-title product-title'>{product.title}</h1>
                    <div>
                    <h3 className='deal-title product-price'>${product.price}.00</h3>
                    </div>
                    <p>This beautifully coloured jam uses the best blueberries to achieve a full, fruity flavour. Ingredients: Sugar, Blueberries, Pectin, Citric Acid, Sodium Citrate. Organic food is food produced by methods that comply with...</p>
                    </div>
                    <div className='add-container-wrapper'>

                    <div className='add-container'>
                        <div className='quantity-container'>
                            <div className='quantity-flex'>
                             <span className="material-icons-outlined quantity-icons"onClick={() => {if(count > 1){setCount(count - 1)}}}>remove</span>
                            <input className='quantity' type="number" readOnly value={count} />
                            <span className="material-icons-outlined quantity-icons" onClick={() => setCount(count + 1)}>add</span>
                            </div>
                        </div>
                        <button className='add-btn' onClick={handleAdd}>ADD TO CART</button>
                        <span className="material-icons-outlined quantity-fav">favorite_border</span>
                    </div>

                    <div className='buy-container'>
                        <button className='deal-btn buy-btn'>BUY IT NOW</button>
                    </div>
                    <p className='product-order'>Order in the next 0 hours 59 minutes to get it by Wednesday 15 July, 2020</p>
                    <div className='guranteed'>
                        <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/PROD1_500x_b7e7d1ea-7d34-4184-9e02-85bd20c991d9_480x.png?v=1593504046" alt="" />
                    </div>
                    <span className='product-ask'>Ask a Question</span>
                    <span>SKU: {product.sku}</span>
                    <span className='product-categories'>Categories: 
                    {product.Categories.map((item,index)=>{
                        return <span className='single-categories' key={index}> {item},</span>
                    })}
                    </span>
                    <span>Tags: Price $7-$50, Vendor Kalles Shopify Niche Store</span>
                    <div className='product-social-icons'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fas fa-envelope"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-facebook-messenger"></i>
                    </div>
                    </div>
                </div>
            </div>}
            <Tabs />
            <Like />
            <Viewed />
            <Footer />
            </div>}
            {loading && <Loading />}
        </div>
     );
}
 
export default Vegetables;