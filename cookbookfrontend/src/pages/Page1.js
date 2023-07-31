import React from 'react'
import {Container} from 'react-bootstrap';
import '../App.css';
import MainText from '../components/MainText';
const Page1 = ()=>{

    return (
       <Container className='Page1 d-flex align-items-center justify-content-start ' fluid >
            <MainText/>
       </Container>
    )
}

export default Page1;