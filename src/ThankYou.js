import './ThankYou.css'
const ThankYou = ({openThank}) => {


    if(!openThank) return null
    return ( 
        <div className='thank-overlay'>
            <div className='thank-container'>
                <h4>You made our day, thank you for choosing us for your purchase.</h4>
            </div>
        </div>
     );
}
 
export default ThankYou;