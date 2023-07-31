from django.shortcuts import render
from .models import Recipe,Step,Ingredient
from rest_framework.decorators import api_view
from .serializers import RegularRecipeSerializer,RecipeSerializer,StepsSerializer,IngredientsSerializer
from rest_framework.response import Response
import json
# Create your views here.

@api_view(['GET'])
def getrecipeCategory(request,pk):
    try:
        recipes = Recipe.objects.filter(category=pk)

        serializers = RecipeSerializer(recipes,many=True)

        return Response(serializers.data)
    except Exception as e:
        print(e)
        return Response({"message":"data not found!"})

@api_view(['GET'])
def getspecificRecipeCategory(request,pk):
     try:
        recipes = Recipe.objects.filter(specificCategory=pk)

        serializers = RecipeSerializer(recipes,many=True)

        return Response(serializers.data)
     except Exception as e:
        print(e)
        return Response({"message":"data not found!"})

@api_view(['GET'])
def getrecipe(request,pk):
    try:
        recipe = Recipe.objects.get(id=pk)

        serializer = RecipeSerializer(recipe,many=False)

        return Response(serializer.data)
    except Exception as e:
        print(e)
        return Response({"message":"data not found!"})

@api_view(['POST'])
def createRecipe(request):
    try:
        data = request.data
        ingredients = json.loads(data['ingredients'])
        steps = json.loads(data['steps'])
        name = data['name']
        category=data['category']
        specificCategory = data['specificCategory']
        image = request.FILES.get('image')

        recipe = Recipe.objects.create(name=name,category=category,img=image)

        for step in steps:
            stepObj = Step.objects.create(recipe=recipe,name=step)

        for ingr in ingredients:
           ingredientObj = Ingredient.objects.create(recipe=recipe,name=ingr)
        return Response({"message":"Recipe Added"})
    except Exception as e:
        print(e)
        return Response({"message":"invalid data"})

@api_view(['DELETE'])
def deleteRecipe(request,pk):
    try:
        recipe = Recipe.objects.get(id=pk)

        recipe.delete()

        return Response({"message":"deleted"})
    except Exception as e:
        print(e)
        return Response({"message":"invalid data"})


@api_view(['PUT'])
def updateRecipe(request,pk):
    try:
        recipe = Recipe.objects.get(id=pk)

        data = request.data

        updated_name = data['name']
        updated_img = request.FILES.get('image')

        if updated_name is None:
            updated_img = recipe.name
        if updated_img is None:
            updated_img = recipe.img
        
        serializer = RegularRecipeSerializer(recipe,data={'name',updated_name,'img',updated_img},partial=True)

        if serializer.is_valid():
            serializer.save()

        steps = data['steps']

        for step in steps:
            step_id = step['id']
            step_obj = Step.objects.get(id=step_id)

            serializer = StepsSerializer(step_obj,data=step)

            if serializer.is_valid():
                serializer.save()

        ingredients = data['ingredients']

        for ingr in ingredients:
            ingr_id = step['id']
            ingr_obj = Ingredient.objects.get(id=ingr_id)

            serializer = IngredientsSerializer(ingr_obj,data=ingr)

            if serializer.is_valid():
                serializer.save()
    except Exception as e:
        return Response({"message":e})
        

