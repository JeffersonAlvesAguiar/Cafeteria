import React from "react";
import "./style.css";
import Header from "../Views/Header";
import Main from "../Views/Main";
import Footer from "../Views/Footer";

export default function App() {
  return (
    <>
      <div className="container__app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
