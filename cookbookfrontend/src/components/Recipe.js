import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
const Recipe = ({recipe}) => {

    const imageSource ="http://127.0.0.1:8000/static"+recipe.img
    console.log(imageSource)
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [process, setProcess] = useState(recipe.steps);
    const [selectedFile, setSelectedFile] = useState(null);

    const [recipeData, setRecipeData] = useState(recipe)

    const handleFileChange = (event)=>{
        setSelectedFile(event.target.files[0]);
    }   
 
    const handleUpdate = async (id)=>{
        const data = new FormData();
        data.append('steps', JSON.stringify(recipeData.steps));
        data.append('ingredients', JSON.stringify(recipeData.ingredients));
        data.append('name', recipeData.name);
        data.append('image', selectedFile);

        try{
            const response = await axios.put(`http://127.0.0.1:8000/api/updateRecipe/${recipe.id}/`,data)
            console.log(response);
            if (response.status == 200) {
                console.log("ok!")
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const HandleDelete = async (id)=>{
        try{
            const response = await axios.delete(`http://127.0.0.1:8000/api/deleteRecipe/${id}/`)
            console.log(response.data)

        }   
        catch(e)
        {
            console.log(e)
        }
    }

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ flexDirection: 'column', background: 'aliceblue', borderRadius: '10px' }}>
          <input  style={{ textAlign: 'center', fontSize: '2rem' }} 
          onChange={e=>({...recipeData,name:e.target.value})}
          placeholder={recipeData.name}/>
          <input type="file" onChange={handleFileChange} />
          <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img style={{ width: '50rem', height: '20rem' }} src={imageSource} /></Row>

            <Row>
              <Col style={{ border: '1px solid black' }} className='d-flex justifiy-content-center align-items-center' >
                <ul>
                      {

                          ingredients.map((ingredient, index) => (
                              <div key={ingredient.id}>
                                  <p>ingredient {index}</p>
                                  <input  placeholder={ingredient.name}
                                      onChange={(e) => {
                                          const updatedIngredients = [...recipeData.ingredient]
                                          updatedIngredients[index].name = e.target.value
                                          setRecipeData({ ...recipeData, ingredient: updatedIngredients })
                                      }}
                                  />
                              </div>
                          ))
                      }
                </ul>
            </Col>
              <Col style={{ border: '1px solid black' }} className='d-flex justifiy-content-center align-items-center' >
                  <ul>
                      {process.map((step, index) => (

                          <div key={step.id} >
                              <p>Step {index}</p>
                              <input placeholder={step.name}
                                  onChange={(e) => {
                                      const updatedSteps = [...recipeData.steps]; // Create a copy of the ingredients array
                                      updatedSteps[index].name = e.target.value; // Update the name property of the ingredient at the specified index
                                      setRecipeData({ ...recipeData, steps: updatedSteps }); // Update the recipeData state with the modified ingredients array
                                  }}
                              />
                          </div>
                      ))}
                  </ul>

              </Col>
            </Row>
          <Button onClick={() => handleUpdate(recipe.id)}>Update</Button>
          <Button onClick={() => HandleDelete(recipe.id)} >Delete</Button>
    </Container>
  )
}

export default Recipe
