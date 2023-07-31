import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
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
    <div style={{position:'relative',top:'10rem'}}>
        {
            recipes.map((element)=><p>{element.name}</p>)
        }
    </div>
  )
}

export default RecipeScreen
