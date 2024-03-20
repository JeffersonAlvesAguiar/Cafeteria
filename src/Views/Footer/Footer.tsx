import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <>
      <div className="container__footer">
        <div className="box__content">
          <span>Desenvolvido por @Jefferson Alves</span>
        </div>

        <div className="box__content">
          <span>Rua: Uma Rua Qualquer</span>
          <span>Bairro: Uma Bairro Qualquer</span>
        </div>

        <div className="box__content">
            <span>Watts: (00) 00000-0000</span>
            <span>Instagran</span>
            <span>FaceBook</span>
        </div>
      </div>
    </>
  );
}
