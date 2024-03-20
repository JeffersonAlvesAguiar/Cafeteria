import React from "react";
import "./style.css";

export default function Apresentation() {
  return (
    <>
      <div className="container__apresentation">
        <div className="card__apresentation">
          <span className="text__secundary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam
            molestiae, voluptatem sunt modi officia possimus totam blanditiis
            impedit excepturi harum non, ad labore laboriosam quibusdam,
            inventore velit perspiciatis pariatur! 
          </span>
        </div>
        <div className="box__button">
          <button>Cardápio</button>
          <button>Chamar no Watts</button>
        </div>
      </div>
    </>
  );
}
