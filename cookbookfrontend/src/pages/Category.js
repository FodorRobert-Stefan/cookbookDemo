import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Button  ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as Rect1} from '../svg/rect1.svg'
import { ReactComponent as Rect2 } from '../svg/rect2.svg';
import { ReactComponent as Rect3 } from '../svg/rect3.svg';
import { ReactComponent as Rect4 } from '../svg/rect4.svg';
import { ReactComponent as Rect5 } from '../svg/rect5.svg';
import { ReactComponent as Rect6 } from '../svg/rect6.svg';
import { useNavigate } from 'react-router-dom';
import SpecificRedirect from '../constants/SpecificRedirect';
const Category = () => {

    const params = useParams();
    const navigate = useNavigate();

    const id = params.id;


    const getImgSource = (imageName) => {
        try{

            return require(`../img/${imageName}`)

        }
        catch(error)
        {

            console.log(error);
            return null
        }
    }

    const renderImage = (imageName) => {
        const imgSource = getImgSource(imageName);
        if(imgSource)
        {
            return <img className='imgCategory' src={imgSource} style={{width:'15rem'}} />
        }
    }
    const [redirect, setRedirect] = useState(null)

    useEffect(()=>{
        if (id === 'sweet') setRedirect(SpecificRedirect.sweet);
        if (id === 'savory') setRedirect(SpecificRedirect.savory);
        if (id === 'salad') setRedirect(SpecificRedirect.salad);
        if (id === 'coffee') setRedirect(SpecificRedirect.coffee);
    },[])

    useEffect(()=>{
        console.log(redirect)
    },[redirect])
    

    const handleRedirect = (redirectData)=>{
        navigate("/specialCategory/" + redirectData)
    }

  return (
    <div className='CategoryScreen' >
          <Container>
              <h1 style={{ fontWeight: 'bolder', fontSize: '5rem', color: 'black', fontFamily: 'cursive' }}>
                  <Link to={`/recipesDetails/${id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder', fontFamily: 'cursive' }}>
                      <Button>Select all {id} recipes</Button>
                  </Link>
              </h1>
              <Row>
                  <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button onClick={() => handleRedirect(redirect.field1)}  className='Rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none' }} >
                          <Rect1 />
                          {renderImage(`${id}1.png`)}
                      </Button>
                  </Col>

                  <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button onClick={() => handleRedirect(redirect.field2)} className='Rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none' }} >
                          <Rect2 />
                          {renderImage(`${id}2.png`)}
                      </Button>
                  </Col>
                  <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button onClick={() => handleRedirect(redirect.field3)} className='Rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none' }} >
                          <Rect3 />
                          {renderImage(`${id}3.png`)}
                      </Button>
                  </Col>
              </Row>
              <Row>
                  <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button onClick={() => handleRedirect(redirect.field4)} className='Rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none' }} >
                          <Rect4 />
                          {renderImage(`${id}4.png`)}
                      </Button>
                  </Col>
                  <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button onClick={() => handleRedirect(redirect.field5)} className='Rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none' }} >
                          <Rect5 />
                          {renderImage(`${id}5.png`)}
                      </Button>
                  </Col>
                  <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button onClick={() => handleRedirect(redirect.field6)} className='Rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none' }} >
                          <Rect6 />
                          {renderImage(`${id}6.png`)}
                      </Button>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default Category
