import React from 'react'
import {Container ,Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Sweet from '../img/tiramisu.png';
import Coffee from '../img/coffee.png'
import Savory from '../img/savory.png'
import salad from '../img/salad.png'
const Page2 = () => {
    return (
      <Container style={{position:'relative',top:'6rem'}} fluid  className='Page2 d-flex flex-column justify-content-center align-items-center'>

        <Row>
            <Col style={{border:'3px solid white'}}>
                    <Link style={{ color: 'black', fontWeight: "bolder" }} className='d-flex flex-column justify-content-center align-items-center' to='/category/sweet' > 
                        <img className='FoodCategory' style={{ width: '35rem', height: '30rem' }} src={Sweet} />
                    
                     </Link>
            </Col>

            <Col style={{ border: '3px solid white' }}>
                    <Link style={{ color: 'black', fontWeight: "bolder" }} className='d-flex flex-column justify-content-center align-items-center' to='/category/coffee' >
                        <img className='FoodCategory' style={{ width: '35rem', height: '30rem' }} src={Coffee} />

                    </Link>
            </Col>
        </Row>
        <Row>

                <Col style={{ border: '3px solid white' }}>
                    <Link style={{ color: 'black', fontWeight: "bolder" }} className='d-flex flex-column justify-content-center align-items-center' to='/category/savory' >
                        <img className='FoodCategory' style={{ width: '35rem', height: '30rem' }} src={Savory} />

                    </Link>
                </Col>
                <Col style={{ border: '3px solid white' }}>

                    <Link style={{ color: 'black', fontWeight: "bolder" }} className='d-flex flex-column justify-content-center align-items-center' to='/category/salad' >
                        <img className='FoodCategory' style={{ width: '35rem', height: '30rem' }} src={salad} />

                    </Link>
                </Col>

        </Row>

      </Container>
    )
}

export default Page2;