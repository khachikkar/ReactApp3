import logo from "../../img/logo.svg"
import "./Nav.css"
import { Link } from "react-router-dom"



export default function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">

                <img className="logo" src={logo} alt="logo"  />

                </Link>
            </div>
            <li id="little" href="">Menu</li>
            <div className="menu">
                <ul>

                <li>Appartements</li>
                <li>Contact Us</li>
                <li><Link className="lil" to="/src/Images">Images</Link></li>
                <li><button className="primaryButton">Get Start</button></li>

                </ul>
            </div>
            <button id="little-btn" className="primaryButton">Get Start</button>
        </div>
    )
}