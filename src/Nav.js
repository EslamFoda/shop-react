import { Link } from "react-router-dom";
import './Nav.css'
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { projectFirestore } from "./home/firebase";
const Nav = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [items,setItems] = useState(null)
    useEffect(()=>{
        const unsub = projectFirestore.collection('cart').onSnapshot(snap=>{
            let results = []
            snap.docs.forEach(doc=>{
                results.push({...doc.data(),id:doc.id})
            })
            setItems(results)
            
        })
        return () => unsub()
    },[])
    return ( 
        <div>
            <Cart isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
            <nav>
                <div className='nav-links'>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/kalles_2x_a389d494-6b66-41e9-91dd-9f1b90710be6_140x.png?v=1591951678" alt="" />
                <Link to='/'>Home</Link>
                <span style={{cursor:'pointer'}}>Shop</span>
                <span className='blog-icon' style={{cursor:'pointer'}}>Blog</span>
                </div>
                <div className='nav-icons'>
                    <span className="material-icons">favorite_border</span>
                    <div className='cart-icon-container'>
                    <span className="material-icons-outlined cart-icon" style={{cursor:'pointer'}} onClick={()=> setIsOpen(true)}>shopping_cart</span>
                    {items && <span className='cart-quantity'>{items.length}</span>}
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Nav;