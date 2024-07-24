import "./Footer.css";
import logo from "../../src/img/logo.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="left">
        <img src={logo} alt="logo" />
        <p>
          © 2022 by <a target="_blank" href="https://www.instagram.com/khach.77/">Khach</a>
        </p>
      </div>
      <div className="right">
        <span>Appartements</span>
        <span>Contact Us</span>
        <span>Images</span>
        <span>Help</span>
        <span>Support</span>
      </div>
    </section>
  );
}
