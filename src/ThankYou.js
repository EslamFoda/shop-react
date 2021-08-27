import './ThankYou.css'
import { motion,AnimatePresence } from 'framer-motion';
const ThankYou = ({openThank}) => {


    
    return ( 
        <div>
            <AnimatePresence>
        {openThank && <motion.div className='thank-overlay' exit={{opacity:0}}>
            <motion.div className='thank-container'
            initial={{y:-400}}
            animate={{y:0}}
            transition={{type:'spring',duration:.3,stiffness:110}}
            exit={{y:-400}}
            >
                <h4>You made our day, thank you for choosing us for your purchase.</h4>
            </motion.div>
        </motion.div>}
            </AnimatePresence>
        </div>
     );
}
 
export default ThankYou;