import React from "react";
import "../styles/Header.css";
import logo from "../assets/header.png";

export default function Header({ children, onQuit }) {
  return (
    <header className="header">
      <h1>
        <span className="poke">Memory</span>
        <img className="logo" src={logo} alt="memory" />
        <span className="memo">Tiles</span>
      </h1>
      {children}
    </header>
  );
}
