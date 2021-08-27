import './Deal.css'
import { Link, useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { projectFirestore } from './firebase';
import { useEffect, useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import Loading from '../Loading'
import Cart from '../Cart'
SwiperCore.use([Navigation, A11y]);
const Deal = () => {
  const history = useHistory()
  const [isOpen,setIsOpen] = useState(false)
  const [openModel,setOpenModel] = useState(false)
  const [days,setDays] = useState('')
  const [hours,setHours] = useState('')
  const [min,setMin] = useState('')
  const [sec,setSec] = useState('')
  const [item,setItem] = useState(null)
  const [count, setCount] = useState(1);
  
  useEffect(()=>{
  
   const clock = setInterval(() => {
    const now = new Date()
    setDays(now.getDay())
    setHours(now.getHours())
    setMin(now.getMinutes())
    setSec(now.getSeconds())
    }, 1000);

    return ()=> clearInterval(clock)
  },[])

    const [deals,setDeals] = useState(null)
    useEffect(()=>{
      const unsub = projectFirestore.collection('deals').onSnapshot(snap=>{
   
         let results = []
            snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
          setDeals(results)
         
        })

        return () => unsub()
    },[])

    
    

  


    return ( 
        <div className='main-container'>
          <Cart isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
          <div className='swiper-wrapp'>
            <div className='deal-header'> 
            <h1 className='hero-header'>Daily Deal Of The Day </h1>
            <span className='ends-in'>End in:  {days} Days {hours}:{min}:{sec}</span>
            </div>
           {deals && <Swiper className='swipe'
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 17,
        },
        764: {
          slidesPerView: 4,
           spaceBetween: 20,
        },
         1024:{
          slidesPerView: 4,
          spaceBetween: 24
        }
      }}
      navigation
    
    >
    { deals.map((deal,index)=>
        <SwiperSlide className='single-swiper'  key={index}>
          <Link to={`/products/deal/${deal.id}`}>
          <h2 className='deal-title title-hover'>{deal.title}</h2>
          </Link>
          <div>
          <h2 className='deal-title'>${deal.price}.00</h2>
          </div>
          <div className='deal-img-container'>
            <div className='overview'>
            <div className='btn-container'>
            <button className='deal-btn model-btn' onClick={()=>
               projectFirestore.collection('deals').doc(deal.id).onSnapshot(snap=>{
                 setItem({...snap.data(),id:deal.id})
                 setOpenModel(true)
                 
               })
               }>
              <div className='btn-animation'>
              <span>Quick View</span>
               <span className="material-icons-outlined">visibility</span>
              </div>
              </button>
            <button className='deal-btn sec-deal-btn' onClick={()=>{
              let getItem = null
              projectFirestore.collection('deals').doc(deal.id).onSnapshot(snap=>{
                getItem = snap.data()
                const addItem = {
                  title: getItem.title,
                  price: getItem.price,
                  sku: getItem.sku,
                  Categories: getItem.Categories,
                  bigImg: getItem.bigImg,
                  img: getItem.img,
                  totla: getItem.price * count,
                  quantity: count

                }
                projectFirestore.collection('cart').add(addItem)
              })
              setIsOpen(true)
            }}>
              <div className='btn-animation'>
                <span>Add To Cart</span>
                <span className="material-icons-outlined">shopping_cart</span>
              </div>
              </button>
            </div>
            </div>
            <div className='overview-media'>
              <span className="material-icons-outlined visibility-icon-media" onClick={()=>
               projectFirestore.collection('deals').doc(deal.id).onSnapshot(snap=>{
                 setItem({...snap.data(),id:deal.id})
                 setOpenModel(true)
                 
               })
               }>visibility</span>
              <span className="material-icons-outlined shop-icon-media" onClick={()=>{
              let getItem = null
              projectFirestore.collection('deals').doc(deal.id).onSnapshot(snap=>{
                getItem = snap.data()
                const addItem = {
                  title: getItem.title,
                  price: getItem.price,
                  sku: getItem.sku,
                  Categories: getItem.Categories,
                  bigImg: getItem.bigImg,
                  img: getItem.img,
                  totla: getItem.price * count,
                  quantity: count

                }
                projectFirestore.collection('cart').add(addItem)
              })
              setIsOpen(true)
            }}>shopping_cart</span>
            </div>
          <img src={deal.img} alt="" />
          </div>
          <h5 className='sold'>Sold: {deal.sold}</h5>
        </SwiperSlide>
    ) }
    </Swiper>}
          </div>
          <AnimatePresence>
          {openModel && <motion.div className='model-overlay' exit={{opacity:0}}>
            <motion.div className='model-container'
             initial={{scale:.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{type:'spring',duration:.5}}
            exit={{scale:.5,opacity:0}}
            >
              <span className="material-icons-outlined close-model" style={{cursor:'pointer'}} onClick={()=> setOpenModel(false)}>close</span>
              <div className='model-grid'>
                <div className='left-model'>
                  <img src={item.bigImg} alt="" />
                </div>
                <div className='right-model'>
                      <div className='product-details'>
                    <h1 className='deal-title product-title'>{item.title}</h1>
                    <div>
                    <h3 className='deal-title product-price'>${item.price}.00</h3>
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
                        <button className='add-btn' onClick={()=>{
                          const newItem = {
                            title:item.title,
                            price: item.price,
                            Categories: item.Categories,
                            sku: item.sku,
                            img: item.img,
                            bigImg: item.bigImg,
                            totla: item.price * count,
                            quantity: count
                          }
                          projectFirestore.collection('cart').add(newItem)
                          setCount(1)
                          setOpenModel(false)
                          setIsOpen(true)
                          
                        }}>ADD TO CART</button>
                        <span className="material-icons quantity-fav">favorite_border</span>
                    </div>

                    <div className='buy-container'>
                        <button className='deal-btn buy-btn' onClick={()=>{
                      history.push(`/products/deal/${item.id}`)
                    }}>MORE DETAILS</button>
                    </div>
                    <p className='product-order'>Order in the next 0 hours 59 minutes to get it by Wednesday 15 July, 2020</p>
                    <div className='guranteed'>
                        <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/PROD1_500x_b7e7d1ea-7d34-4184-9e02-85bd20c991d9_480x.png?v=1593504046" alt="" />
                    </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
           </AnimatePresence>
          {!deals && <Loading />}
        </div>
     );
}

 
export default Deal;