import Dropdown from "../Dropdown/Dropdown";
import "./Value.css";

import data from "../Dropdown/dropdata";
import { Accordion } from "react-accessible-accordion";

export default function Value() {
  return (
    <section className="value">
      {/* Left Part Image */}
<div className="imgcont">
    <img src="https://avatars.mds.yandex.net/i?id=676ccfbae3546986ec13ddb1659c1d39e81f63ca-7085252-images-thumbs&n=13" alt="imggg" />
</div>
      {/* Right part */}
    
      <div className="r-part">

      <div className="he">
        <h1>Our Values</h1>
        <span>What we Belive</span>
      </div>

        <Accordion className="accordion">
          {data.map((item, i) => (
            <Dropdown data={item} key={i} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
