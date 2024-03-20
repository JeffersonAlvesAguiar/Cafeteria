import React from "react";
import "./style.css";
import Apresentation from "./Apresentation";
import CoffeeList from "./CoffeeList";

export default function Main() {
  return (
    <>
      <div className="container__main">
        <Apresentation />
        <CoffeeList />
      </div>
    </>
  );
}
