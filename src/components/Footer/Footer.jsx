import "../Footer/footerStyle.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillYoutube,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

export const FooterDesign = () => {
  return (
    <div className="mainFooterDiv">
      {/*left footer  */}
      <div class="footer-left">
        <div>
          <p>Manizales, Colombia {<IoLocation />}</p>
        </div>

        <div>
          <p>Phone contact: (+57) 316 328 4486{<AiFillPhone />}</p>
        </div>

        <div>
          <p>Email us: esteb_95@hotmail.com {<AiTwotoneMail />}</p>
        </div>
      </div>

      {/* right footer */}

      <div class="footer-right">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Enter your email"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Catch up with the latest collection!
          </label>
        </div>
        <div className="sendBtn">
            <button>send</button> 
        </div>
      </div>

      {/* follow us */}
      <h3 className="visitUs">Follow us</h3>

      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span className="iconDiv">{<AiFillFacebook />}</span>
        </li>

        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span className="iconDiv">{<AiFillTwitterCircle />}</span>
        </li>

        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span className="iconDiv">{<AiOutlineInstagram />}</span>
        </li>

        <li className="icon github">
          <span className="tooltip">Github</span>
          <span className="iconDiv">
            <AiOutlineGithub />
          </span>
        </li>

        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span className="iconDiv">
            <AiFillYoutube />
          </span>
        </li>
      </ul>
      <div className="copyRight">
        © COPYRIGHT 2022 Esteban Marulanda Suarez. All rights reserved.
      </div>
    </div>
  );
};
