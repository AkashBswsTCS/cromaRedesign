import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/surfacepro8one">SurfacePro8One</Link>
        </li>
        <li>
          <Link to="/home2scrolllower">Home2scrollLower</Link>
        </li>
        <li>
          <Link to="/home1scrollupper">Home1scrollUpper</Link>
        </li>
        <li>
          <Link to="/homelitemode">HomeLiteMode</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <li>
          <Link to="/pdppurpleone">PDPpurpleOne</Link>
        </li>
        <li>
          <Link to="/pdppurple">PDPpurple</Link>
        </li>
        <li>
          <Link to="/pdpgoldtwo">PDPgoldTwo</Link>
        </li>
        <li>
          <Link to="/pdpgoldone">PDPgoldOne</Link>
        </li>
        <li>
          <Link to="/pdpwhitetwo">PDPwhiteTwo</Link>
        </li>
        <li>
          <Link to="/pdpwhiteone">PDPwhiteOne</Link>
        </li>
        <li>
          <Link to="/pdpblack">PDPblack</Link>
        </li>
        <li>
          <Link to="/pdpblackone">PDPblackOne</Link>
        </li>
        <li>
          <Link to="/pdppurplewithcartitem">PDPpurpleWithCartItem</Link>
        </li>
        <li>
          <Link to="/pdppurplewithcartitemone">PDPpurpleWithCartItemOne</Link>
        </li>
        <li>
          <Link to="/pdpgold">PDPgold</Link>
        </li>
        <li>
          <Link to="/pdpgoldwithcartitem">PDPgoldWithCartItem</Link>
        </li>
        <li>
          <Link to="/pdpwhite">PDPwhite</Link>
        </li>
        <li>
          <Link to="/pdpwhitewithcartitem">PDPwhiteWithCartItem</Link>
        </li>
        <li>
          <Link to="/pdpblacktwo">PDPblackTwo</Link>
        </li>
        <li>
          <Link to="/pdpblackwithcartitem">PDPblackWithCartItem</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;