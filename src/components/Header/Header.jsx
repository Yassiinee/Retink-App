import React from "react";
import Join from "../../components/Join/Join";
import logo from "../../assets/images/retink_.png";
import {Container,NavbarLink,Navbar,NavItems} from "./style";
import "./style.css";

function Header(){
  return (
    <>
    <Navbar>
      <img src={logo} alt="Logo" />
      <NavItems>
        <Container>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
        <NavbarLink to="/about">About Us</NavbarLink>
        </Container>
      </NavItems>
        <Join/>
    </Navbar>
    
    </>
  );
};

export default Header;
