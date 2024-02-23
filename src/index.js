import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./data.js";
import pizzaData from "./data.js";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Header() {
  return (
    <div className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <>
        <p>
          Authentic Itslian cuisine. 6 creative dishes to choose from. Allfrom
          our stone oven, all organic, all delichious.
        </p>
        <div className="pizzas">
          {pizzaData.map((pizzza) => (
            <Pizza pizzaObj={pizzza} />
          ))}
        </div>
      </>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const closedHour = 24;
  const openHour = 6;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    // <div className="footer">
    //   {isOpen > open && isOpen < closed ? (
    //     <h3> We are Open untile {closed}:00</h3>
    //   ) : (
    //     <h3>We are Closed untile {open}:00</h3>
    //   )}
    //   <button className="btn">Order</button>
    // </div>
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <div>
          <p>
            We are welcome to to serve you {openHour}:00 To{closedHour}:00 use
            online order only
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Order({ closedHour }) {
  return (
    <div className="order">
      <p>We are open until {closedHour}:00.come and visit us or order online</p>
    </div>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>

        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </div>
  );
}
