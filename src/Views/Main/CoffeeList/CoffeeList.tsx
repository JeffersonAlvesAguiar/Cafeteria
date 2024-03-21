import React from "react";
import "./style.css";
import img from "../../../assets/cup-coffee.jpg";

export default function CoffeeList() {
  return (
    <>
      <div className="container__coffeeList">
        <div className="box__list">
          <span className="title__list">Cardápio</span>

          <div className="row__box">
            <div className="card__option">
              <div className="description__option">
                <img src={img} alt="" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, iusto? Eveniet nobis qui praesentium numquam ab
                  molestias iure porro consequatur hic distinctio, sint
                  laudantium dolores, voluptatibus quod a illum? Molestiae.
                </span>
              </div>
              <button>Chamar no Watts</button>
            </div>

            <div className="card__option">
              <div className="description__option">
                <img src={img} alt="" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, iusto? Eveniet nobis qui praesentium numquam ab
                  molestias iure porro consequatur hic distinctio, sint
                  laudantium dolores, voluptatibus quod a illum? Molestiae.
                </span>
              </div>
              <button>Chamar no Watts</button>
            </div>
          </div>

          <div className="row__box">
            <div className="card__option">
              <div className="description__option">
                <img src={img} alt="" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, iusto? Eveniet nobis qui praesentium numquam ab
                  molestias iure porro consequatur hic distinctio, sint
                  laudantium dolores, voluptatibus quod a illum? Molestiae.
                </span>
              </div>
              <button>Chamar no Watts</button>
            </div>

            <div className="card__option">
              <div className="description__option">
                <img src={img} alt="" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, iusto? Eveniet nobis qui praesentium numquam ab
                  molestias iure porro consequatur hic distinctio, sint
                  laudantium dolores, voluptatibus quod a illum? Molestiae.
                </span>
              </div>
              <button>Chamar no Watts</button>
            </div>
          </div>

          <div className="row__box">
            <div className="card__option">
              <div className="description__option">
                <img src={img} alt="" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, iusto? Eveniet nobis qui praesentium numquam ab
                  molestias iure porro consequatur hic distinctio, sint
                  laudantium dolores, voluptatibus quod a illum? Molestiae.
                </span>
              </div>
              <button>Chamar no Watts</button>
            </div>

            <div className="card__option">
              <div className="description__option">
                <img src={img} alt="" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, iusto? Eveniet nobis qui praesentium numquam ab
                  molestias iure porro consequatur hic distinctio, sint
                  laudantium dolores, voluptatibus quod a illum? Molestiae.
                </span>
              </div>
              <button>Chamar no Watts</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
