import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Nav.css";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


import { useRef } from "react";

export default function Nav() {
  const navRef = useRef();

  const shownavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul ref={navRef}>
        <li>Appartements</li>
        <li>Contact Us</li>
        <li onClick={shownavbar}>
          <Link to="/src/Images">Images</Link>
        </li>
        <li onClick={shownavbar}>
          <Link to="/src/Gift">Gift</Link>
          {/* <label>new</label> */}
        </li>
        <li onClick={shownavbar}>
          <Link to="/src/Paris">
            <span>Paris Olympics</span>
          </Link>
          
        </li>
        <li onClick={shownavbar}>
          <Link to="/src/Pages/Todo/TodoApp">
          <span>ToDo Mini App</span>
          </Link>
        </li>
        <li>
          <button className="primaryButton">Get Start</button>
        </li>
        <button onClick={shownavbar} className="nv-btn close">
          <IoClose className="iicon" />
        </button>
      </ul>

      <button onClick={shownavbar} className="nv-btn">
        <IoMenu className="iicon" />
      </button>
    </div>
  );
}
