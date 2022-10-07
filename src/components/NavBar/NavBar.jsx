import "../NavBar/NavBarStyle/NavBar.css"
import logo from "../assets/logo.png"
import { CartWidget } from "./CartWidget/CartWidget";
import {RiSearchEyeLine,RiStoreFill,RiWhatsappLine} from "react-icons/ri"
import { Link } from "react-router-dom";
import { products } from "../DataBase/products";
export function NavBar() {
    return (
    <div className="headerDiv">
            <div className="searchDiv">
                <ul>
                    <Link to =""><li><RiSearchEyeLine/>Search</li></Link>
                    <a href=""><li><RiStoreFill/>Stores</li></a>
                    <a href=""><li><RiWhatsappLine/>WhatsApp</li></a>
                </ul>
            </div>
            <div className="imgLogoDiv">
                <a href=""><img className="logo" src={logo} alt="Change your browser" /></a>   
            </div>

            <div className="itemsDiv">
                <ul>
                    <a href=""><li>Women</li></a>
                    <a href=""><li>Men</li></a>
                    <a href=""><li>Denim</li></a>
                    <a href=""><li>Discounts</li></a>
                    <a href=""><li> Gift Cards</li></a>
                </ul>
            </div>
            <div className="cartDiv">
                <li><CartWidget/></li>
            </div>
        </div>
  );
}

