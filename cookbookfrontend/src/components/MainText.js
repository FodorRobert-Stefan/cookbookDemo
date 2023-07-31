import React from "react";
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const MainText = ()=>{
    return (

        <Container>
            <Row> <h3 style={{fontWeight:'bold'}}> Are you hungry?</h3></Row>
            <Row><h1 style={{ fontSize: '8rem', color:'#DD3131',fontWeight:'bolder'}}>Delicious</h1></Row>
            <Row><h1 style={{ fontSize: '3rem',  fontWeight: '500' }}>Food plate</h1></Row>
            <Row>
                <h2 style={{ fontWeight: 'bold' }} >Immerse yourself in a treasuer trove of carefully</h2>
                <h2 style={{ fontWeight: 'bold' }}>curated recipes from various cuisines and culinary traditions.</h2>
            </Row>
            <Row className="mt-5" >
             <Button className="hoverBtn" style={{background:'green',width:'13rem',borderRadius:'100px',display:'flex',alignItems:'center',justifyContent:'center'}}>

               <h2>
                        <Link to="/recipes" style={{ textDecoration: 'none', color: 'white' }} > Recipes </Link>    
               </h2>
                
            </Button></Row>
        </Container>

    )
}
export default MainText;