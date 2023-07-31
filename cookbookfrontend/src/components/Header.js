import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
const Header = ()=>{

    const [focused,setFocused]=useState("Home")

    return (
        <Navbar style={{zIndex:'5',position:'fixed',top:'0',width:'100vw',height:'6rem'}} expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">CookBook</Navbar.Brand>
                <Nav>
                    <Link style={{ color: `${focused == 'Home' ? '#DD3131' : 'black'}`, fontSize: '2.3rem', marginLeft: '3rem' ,textDecoration:'none'}} onClick={() => setFocused("Home")} to="/" >Home</Link>
                    <Link style={{ color: `${focused == 'Recipes' ? '#DD3131' : 'black'}`, fontSize: '2.3rem', marginLeft: '3rem', textDecoration: 'none' }} onClick={() => setFocused("Recipes")} to="/recipes" >Recipes</Link>
                    <Link style={{ color: `${focused == 'Create' ? '#DD3131' : 'black'}`, fontSize: '2.3rem', marginLeft: '3rem', textDecoration: 'none' }} onClick={() => setFocused("Create")} >Create</Link>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;