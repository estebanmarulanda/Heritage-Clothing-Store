import {RiMapPinUserLine,RiShoppingCart2Line} from "react-icons/ri"
export const CartWidget = ()=>{
    return(
        <div className="cartDiv">   
             <ul>
             <a href=""><li>My account<RiMapPinUserLine/></li></a>
             <a href=""><li>Cart<RiShoppingCart2Line/></li></a>
             </ul>       
        </div>
    )
}