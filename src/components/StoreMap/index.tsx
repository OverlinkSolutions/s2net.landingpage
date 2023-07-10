import storemap from "./storemap.module.sass";

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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.649636899512!2d-37.059842624648915!3d-10.914209289243086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab373f47aacd9%3A0x24d2ee2cad1ec326!2sAv.%20Pedro%20Calazans%2C%20855%20-%202%20-%20Centro%2C%20Aracaju%20-%20SE%2C%2049010-490!5e0!3m2!1spt-BR!2sbr!4v1688947641884!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        title="Mapa da BatCarva"
      ></iframe>
    </section>
  );
}
