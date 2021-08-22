import { useEffect, useState } from 'react';
import './Cart.css'
import { projectFirestore } from './home/firebase';
import { Link } from 'react-router-dom';
import ThankYou from './ThankYou';


const Cart = ({isOpen,onClose}) => {
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

    

  

    if(!isOpen) return null
    return ( 
        <div className='cart-overlay'>
            <ThankYou openThank={openThank}/>
            <div className='cart'>
                <div className='cart-top'>
                <span>SHOPPING CART</span>
                <span className="material-icons close-icon" onClick={onClose}>close</span>
                </div>
                {!items.length && 
                <div className='empty-cart'>
                    <i className="las la-shopping-bag"></i>
                    <span>Your cart is empty.</span>
                </div>
                }
            {items && <div className='cart-items'>
                {items.map(item=>
                <div className='single-cart-item' key={item.id}>
                    <div className='cart-img-container'>
                    <img src={item.img} alt="" />
                    </div>
                    <div className='cart-item-details'>
                        <h5>{item.title}</h5>
                        <h5>${item.price}.00</h5>
                        <div className='quantity-container'>
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
                        <div>
                        <i className="far fa-trash-alt delete-icon" onClick={()=>{
                            projectFirestore.collection('cart').doc(item.id).delete()
                        }}></i>
                        </div>
                    </div>
                </div>
                
                )}
            </div>}
                <div className='cart-checkout'>
                    <div className='subtotal'>
                        <h4>Subtotal:</h4>
                        <h4>${subtotal}.00</h4>
                    </div>
                    <p>Taxes, shipping and discounts codes calculated at checkout </p>
                    <Link to='/cart'>
                    <button className='cart-btn' onClick={onClose}>VIEW CART</button>
                    </Link>
                    <button className='cart-btn green-btn' onClick={()=>{   
                        
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
        </div>
     );
}

 
export default Cart;
