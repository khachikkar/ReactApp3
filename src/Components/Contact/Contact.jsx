import Card from "../ContactCard/Card";
import carddata from "../ContactCard/carddata";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      {/* left Side */}

      <div className="s-part">
        
        <div className="c-right">
          {carddata.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>

        {/* right side */}

        <div className="img">
          <img
            src="https://endjoyer.github.io/neural-networks/df5ec7b6f7c3e2998ade.jpg"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
}
