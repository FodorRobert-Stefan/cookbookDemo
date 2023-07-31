from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("recipeCategory/<str:pk>/",views.getrecipeCategory,name="recipeCategory"),
    path("recipeSpecificCategory/<str:pk>/",views.getspecificRecipeCategory,name="recipeSpecific"),
    path("recipe/<str:pk>/",views.getrecipe,name="getrecipe"),
    path("createRecipe/",views.createRecipe,name="createRecipe"),
    path("deleteRecipe/<str:pk>/",views.deleteRecipe,name="deleteRecipe"),
    path("updateRecipe/<str:pk>/",views.updateRecipe,name="updateRecipe"),


]
