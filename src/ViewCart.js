import './ViewCart.css'
import { projectFirestore } from './home/firebase';
import { useEffect,useState } from 'react';
import Footer from './Footer'
import Viewed from './Viewed'
import ThankYou from './ThankYou';
import { motion,AnimatePresence } from 'framer-motion';
const ViewCart = () => {
    const [items,setItems] = useState(null)
    const [subtotal,setSubtotal] = useState(0)
    const [openThank,setOpenThank] = useState(false)

   useEffect(()=>{
       const unsub = projectFirestore.collection('cart').onSnapshot(snap=>{
           let results = []
           let price = 0
           snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
            setItems(results)
           let totalPrice =  results.map(item=>{
                return item.totla
            })
            totalPrice.forEach(itemPrice=>{
                price += parseInt(itemPrice)
            })
            setSubtotal(price)  
        })
        return () => unsub()
    },[])


    return ( 
        <div>
            <ThankYou openThank={openThank}/>
       {items && <div>
            <div className='shopping-cart-title'>
                <h2>SHOPPING CART</h2>
            </div>
            <div className='main-container'>
                <div className='list-container'>
                    <div className='list-titles'>
                    <h5 className='span'>PRODUCT</h5>
                    <h5>PRICE</h5>
                    <h5>QUANTITY</h5>
                    <h5 className='align-right'>TOTAL</h5>
                    </div>
                </div>
                  {!items.length && 
                <motion.div className='empty-cart' 
                initial={{display:'none',opacity:0,x:60}} 
                animate={{display:"flex",opacity:1,x:0}} 
                transition={{delay:.5,type:'spring'}}
                >
                    <i className="las la-shopping-bag"></i>
                    <span>Your cart is empty.</span>
                </motion.div>
                }
                {items && <div>
                    <AnimatePresence>
                    {items.map(item=>
                    <motion.div className='single-list-item' key={item.id}
                     exit={{x:-300,opacity:0}}
                     transition={{duration:.5}}
                    >
                        <div className='product-list-wrapper'>
                        <div className='list-img-container'>
                            <img src={item.img} alt="" />
                        </div>
                        <div>
                        <h5 className='m-y'>{item.title}</h5>
                        <i className="far fa-trash-alt del-btn" onClick={()=>{
                             projectFirestore.collection('cart').doc(item.id).delete()
                        }}></i>
                        </div>
                        </div>
                        <div className='price-container'>
                            <h5>${item.price}.00</h5>
                        </div>
                        <div className='quantity-container align-self'>
                            <div className='quantity-flex'>
                           <span className="material-icons-outlined quantity-icons" onClick={()=>{
                               if(item.quantity > 1){
                                   item.quantity--
                                   projectFirestore.collection('cart').doc(item.id).update({
                                       quantity:item.quantity,
                                       totla: item.quantity * item.price
                                   })
                               }
                           }}>remove</span>
                            <input className='quantity' type="number" readOnly value={item.quantity}  />
                            <span className="material-icons-outlined quantity-icons" onClick={()=>{
                                item.quantity++
                                projectFirestore.collection('cart').doc(item.id).update({
                                    quantity: item.quantity,
                                    totla: item.quantity * item.price
                                })
                                
                            }}>add</span>
                            </div>
                        </div>
                        <div className='cart-list-total'>
                            <h5>${item.totla}.00</h5>
                        </div>
                    </motion.div>
                    )}
                    </AnimatePresence>
                </div>}
                <div className='Checkout-cart-container'>
                    <div className='subtotal-cart'>
                    <h4>SUBTOTAL:</h4>
                    <h4>${subtotal}.00</h4>
                    </div>
                    <p>Taxes, shipping and discounts codes calculated at checkout</p>
                    <button className='subtotal-btn'  onClick={()=>{   
                        
                        if(items.length > 0){
                            setOpenThank(true)
                        }
                        projectFirestore.collection('cart').get().then(snap=>{
                            snap.docs.forEach(doc=>{
                                doc.ref.delete()
                            })
                        })
                        setTimeout(()=>{
                            setOpenThank(false)
                        },2000)
                        
                    }}>CHECK OUT</button>
                </div>
            </div>
            <Viewed />
            <Footer />
        </div>}
        </div>
     );
}
 
export default ViewCart;