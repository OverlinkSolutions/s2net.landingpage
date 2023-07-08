import * as React from "react";
import storemap from "./storemap.module.sass";
import ondeEstamos from "../../assets/images/ondeEstamos.webp";

export default function StoreMap() {
  return (
    <section id={storemap.container} className="container row">
      <div id={storemap.locations} className="container column">
        <h2>Onde estamos</h2>
        <div className="container column">
          <p>Aracaju-SE</p>
          <p>São Cristóvão-SE</p>
          <p>Itabaiana-SE </p>
        </div>
      </div>
      <img src={ondeEstamos} alt="Onde estamos" />
    </section>
  );
}
