from .models import Step,Recipe,Ingredient
from rest_framework import serializers

class StepsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields= '__all__'

class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields= '__all__'


class RegularRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model =Recipe
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):

    steps = serializers.SerializerMethodField(read_only=True)
    ingredients = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=Recipe
        fields = '__all__'

    def get_steps(self,obj):
        try:
            steps = Step.objects.filter(recipe=obj)
            serializer = StepsSerializer(steps,many=True)

            return serializer.data
        except:
            return None
        
    def get_ingredients(self,obj):
        try:
            ingredients = Step.objects.filter(recipe=obj)
            serializer = IngredientsSerializer(ingredients,many=True)

            return serializer.data
        except:
            return None


    