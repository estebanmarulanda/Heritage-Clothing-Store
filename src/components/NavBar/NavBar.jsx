import "../NavBar/NavBarStyle/NavBar.css"
import logo from "../assets/logo.png"
import { CartWidget } from "./CartWidget/CartWidget";
import {RiSearchEyeLine,RiStoreFill,RiWhatsappLine} from "react-icons/ri"
import { Link } from "react-router-dom";
import { products } from "../DataBase/products";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
export function NavBar() {
    return (
    <div className="headerDiv">
            <div className="searchDiv">
                <ul>
                    <Link to =""><li><RiSearchEyeLine/>Search</li></Link>
                    <Link><li><RiStoreFill/>Stores</li></Link>
                    <Link><li><RiWhatsappLine/>WhatsApp</li></Link>
                </ul>
            </div>
            <div className="imgLogoDiv">
                <Link to="/"><img className="logo" src={logo} alt="Change your browser" /></Link>
            </div>

            <div className="itemsDiv">
                <ul>
                    <Link to="/category/women"><li>Women</li></Link>
                    <Link to="/category/men"><li>Men</li></Link> 
                    <Link to="/"><li>Denim</li></Link>
                    <Link ><li>Discounts</li></Link>
                    <Link ><li> Gift Cards</li></Link>
                </ul>
            </div>
            <div className="cartDiv">
                <li><CartWidget/></li>
            </div>
        </div>
  );
}

