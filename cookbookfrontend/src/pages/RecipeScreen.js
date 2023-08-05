import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Recipe from '../components/Recipe';
const RecipeScreen = () => {
    const params = useParams();

    const id = params.id;

    const [recipes, setRecipes] = useState([])


    const getRecipes = async ()=>{
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/recipeCategory/${id}/`)
            console.log(response)
            if(response.status== 200)
            {
                setRecipes(response.data)
            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{

        getRecipes()

    },[])

  return (
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'scroll' }}>

          <Container className='d-flex align-items-center justify-content-center' style={{ flexDirection: 'column', position: 'relative' }}>
            <div styke={{height:'10rem'}} >
                <h1>{id} Category</h1>
                <h3>{recipes.length} recipe/s</h3>
                {
                    recipes.map((recipe,index)=>(
                        <div key={recipe.id} >
                            <p style={{ fontWeight: 'bolder', fontSize: '2.2rem', opacity: '0.9' }}> Recipe {index} </p>
                            <Recipe recipe={recipe}/>
                        </div>
                    ))
                }
            </div>
        </Container>

     </div>
  )
}

export default RecipeScreen
