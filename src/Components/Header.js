import { ShoppingCartRounded } from "@mui/icons-material";
import React from "react";
import "./header.css";
function Header() {
  return (
    <header className="head">
      <div className="head__left">
        <img
          src="https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-burger-vector-illustration-with-filled-line-design-burger-clip-art-png-image_1923564.jpg"
          alt=""
          className="head__image"
        />
        <h2>Brrrgrrr</h2>
      </div>
      <div className="head__right">
        <ShoppingCartRounded className="cart" />
      </div>
    </header>
  );
}

export default Header;
