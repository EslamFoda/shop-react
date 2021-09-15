import { useEffect, useState } from 'react';
import { projectFirestore } from './firebase';
import { Link, useHistory } from 'react-router-dom';
import Cart from '../Cart';
import './Discover.css'
import Loading from '../Loading';
import { motion,AnimatePresence } from 'framer-motion';
const Discover = () => {
  const history = useHistory()
  const [product,setProduct] = useState(null)
  const [isOpen,setIsOpen] = useState(false)
  const [openModel,setOpenModel] = useState(false)
  const [count, setCount] = useState(1);
  const openCity = function (evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
const [all,setAll] = useState(null)
useEffect(()=>{
  const unsub = projectFirestore.collection('all').onSnapshot(snap=>{
         let results = []
            snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
         setAll(results)
        })

        return () => unsub()
},[])
const [fruits,setFruits] = useState(null)
useEffect(()=>{
 
  const unsub = projectFirestore.collection('fruits').onSnapshot(snap=>{
         let results = []
            snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
            setFruits(results)
            
          })

        return () => unsub()
},[])
const [vegetables,setVegetables] = useState(null)
useEffect(()=>{
  const unsub = projectFirestore.collection('vegetables').onSnapshot(snap=>{
         let results = []
            snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
         setVegetables(results)
        })

        return () => unsub()
},[])
const [juice,setJuice] = useState(null)
useEffect(()=>{
  const unsub = projectFirestore.collection('juices').onSnapshot(snap=>{
         let results = []
            snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
         setJuice(results)
        })

        return () => unsub()
},[])
const [dried,setDried] = useState(null)
useEffect(()=>{
  const unsub = projectFirestore.collection('dried').onSnapshot(snap=>{
         let results = []
            snap.docs.forEach(doc=>{
              results.push({...doc.data(),id:doc.id})
              
            })
         setDried(results)
        })

        return () => unsub()
},[])

    return ( 
        <div className='main-container discover-container'>
           <Cart isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
             <div className='organic-header'>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/heading-png_180x.png?v=1592814960" alt="" />
                <h1 className='hero-header discover-header'>OUR PRODUCTS</h1>
                <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/shape-heading_360x.png?v=1592815053" alt="" />
            </div>
            <div className="tab">
  <button className="tablinks active" onClick={(e)=> {openCity(e, 'All')}}>All </button>
  <span className='slash'>/</span>
  <button className="tablinks" onClick={(e)=> {openCity(e, 'Fruits')}}>Fruits</button>
  <span className='slash'>/</span>
  <button className="tablinks" onClick={(e)=> {openCity(e, 'Vegetables')}}>Vegetables</button>
  <span className='slash'>/</span>
  <button className="tablinks" onClick={(e)=> {openCity(e, 'Juice')}}>Juice</button>
  <span className='slash'>/</span>
  <button className="tablinks" onClick={(e)=> {openCity(e, 'Dried')}}>Dried</button>
</div>

<div id="All" className="tabcontent active-tab">
  
  {all && <div className='discover-grid'>
      { all.map((item,index)=>
        <div className='single-swiper'  key={index}>
          <div className='deal-img-container'>
            <div className='overview'>
            <div className='btn-container'>
            <button className='deal-btn' onClick={()=>
               projectFirestore.collection('all').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
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
              projectFirestore.collection('all').doc(item.id).onSnapshot(snap=>{
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
              <span className="material-icons-outlined visibility-icon-media"onClick={()=>
               projectFirestore.collection('all').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
                 setOpenModel(true)
                 
               })
               }>visibility</span>
              <span className="material-icons-outlined shop-icon-media" onClick={()=>{
              let getItem = null
              projectFirestore.collection('all').doc(item.id).onSnapshot(snap=>{
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
          <img src={item.img} alt="" />
          </div>
          <Link to={`/products/all/${item.id}`}>
           <h2 className='deal-title title-hover'>{item.title}</h2>
          </Link>
          <div>
          <h2 className='deal-title'>${item.price}.00</h2>
          </div>
        </div>
    ) }
      </div>}
</div>

<div id="Fruits" className="tabcontent">
  
   {fruits && <div className='discover-grid'>
      { fruits.map((item,index)=>
        <div className='single-swiper'  key={index}>
          <div className='deal-img-container'>
            <div className='overview'>
            <div className='btn-container'>
            <button className='deal-btn' onClick={()=>
               projectFirestore.collection('fruits').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
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
              projectFirestore.collection('fruits').doc(item.id).onSnapshot(snap=>{
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
              <span className="material-icons-outlined visibility-icon-media"onClick={()=>
               projectFirestore.collection('fruits').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
                 setOpenModel(true)
                 
               })
               }>visibility</span>
              <span className="material-icons-outlined shop-icon-media" onClick={()=>{
              let getItem = null
              projectFirestore.collection('fruits').doc(item.id).onSnapshot(snap=>{
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
          <img src={item.img} alt="" />
          </div>
          <Link to={`/products/fruits/${item.id}`}>
           <h2 className='deal-title title-hover'>{item.title}</h2>
          </Link>
          <div>
          <h2 className='deal-title'>${item.price}.00</h2>
          </div>
        </div>
    ) }
      </div>} 
</div>

<div id="Vegetables" className="tabcontent">
  
  {vegetables && <div className='discover-grid'>
      { vegetables.map((item,index)=>
        <div className='single-swiper'  key={index}>
          <div className='deal-img-container'>
            <div className='overview'>
            <div className='btn-container'>
            <button className='deal-btn' onClick={()=>
               projectFirestore.collection('vegetables').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
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
              projectFirestore.collection('vegetables').doc(item.id).onSnapshot(snap=>{
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
              <span className="material-icons-outlined visibility-icon-media"onClick={()=>
               projectFirestore.collection('vegetables').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
                 setOpenModel(true)
                 
               })
               }>visibility</span>
              <span className="material-icons-outlined shop-icon-media" onClick={()=>{
              let getItem = null
              projectFirestore.collection('vegetables').doc(item.id).onSnapshot(snap=>{
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
          <img src={item.img} alt="" />
          </div>
          <Link to={`/products/vegetables/${item.id}`}> 
           <h2 className='deal-title title-hover'>{item.title}</h2>
          </Link>
          <div>
          <h2 className='deal-title'>${item.price}.00</h2>
          </div>
        </div>
    ) }
      </div>} 
</div>
<div id="Juice" className="tabcontent">

  {juice && <div className='discover-grid'>
      { juice.map( (item,index)=>
        <div className='single-swiper'  key={index}>
          <div className='deal-img-container'>
            <div className='overview'>
            <div className='btn-container'>
            <button className='deal-btn'  onClick={()=>
               projectFirestore.collection('juices').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
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
              projectFirestore.collection('juices').doc(item.id).onSnapshot(snap=>{
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
              <span className="material-icons-outlined visibility-icon-media"onClick={()=>
               projectFirestore.collection('juices').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
                 setOpenModel(true)
                 
               })
               }>visibility</span>
              <span className="material-icons-outlined shop-icon-media" onClick={()=>{
              let getItem = null
              projectFirestore.collection('juices').doc(item.id).onSnapshot(snap=>{
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
          <img src={item.img} alt="" />
          </div>
          <Link to={`/products/juice/${item.id}`}>
           <h2 className='deal-title title-hover'>{item.title}</h2>
          </Link>
          <div>
          <h2 className='deal-title'>${item.price}.00</h2>
          </div>
        </div>
    ) }
      </div>} 
</div>
<div id="Dried" className="tabcontent">

  {dried && <div className='discover-grid'>
      { dried.map( (item,index)=>
        <div className='single-swiper'  key={index}>
          <div className='deal-img-container'>
            <div className='overview'>
            <div className='btn-container'>
            <button className='deal-btn' onClick={()=>
               projectFirestore.collection('dried').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
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
              projectFirestore.collection('dried').doc(item.id).onSnapshot(snap=>{
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
              <span className="material-icons-outlined visibility-icon-media"onClick={()=>
               projectFirestore.collection('dried').doc(item.id).onSnapshot(snap=>{
                 setProduct({...snap.data(),id:item.id})
                 setOpenModel(true)
                 
               })
               }>visibility</span>
              <span className="material-icons-outlined shop-icon-media" onClick={()=>{
              let getItem = null
              projectFirestore.collection('dried').doc(item.id).onSnapshot(snap=>{
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
          <img src={item.img} alt="" />
          </div>
          <Link to={`/products/dried/${item.id}`}>
           <h2 className='deal-title title-hover'>{item.title}</h2>
          </Link>
          <div>
          <h2 className='deal-title'>${item.price}.00</h2>
          </div>
        </div>
    ) }
      </div>} 
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
                  <img src={product.bigImg} alt="" />
                </div>
                <div className='right-model'>
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
                        <button className='add-btn' onClick={()=>{
                          const newItem = {
                            title:product.title,
                            price: product.price,
                            Categories: product.Categories,
                            sku: product.sku,
                            img: product.img,
                            bigImg: product.bigImg,
                            totla: product.price * count,
                            quantity: count
                          }
                          projectFirestore.collection('cart').add(newItem)
                          setCount(1)
                          setOpenModel(false)
                          setIsOpen(true)
                          
                        }}>ADD TO CART</button>
                        <span className="material-icons-outlined quantity-fav">favorite_border</span>
                    </div>

                    <div className='buy-container'>
                        <button className='deal-btn buy-btn'onClick={()=>{
                          if(product.name === 'fruits'){
                            history.push(`/products/fruits/${product.id}`)
                          } else if(product.name === 'all') {
                            history.push(`/products/all/${product.id}`)
                          } else if(product.name === 'juices'){
                            history.push(`/products/juice/${product.id}`)
                          } else if(product.name === 'dried'){
                            history.push(`/products/dried/${product.id}`)
                          } else if (product.name === 'vegetables'){
                            history.push(`/products/Vegetables/${product.id}`)
                          }
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
          {!all && <Loading />}
        </div>
     );
}
 
export default Discover;