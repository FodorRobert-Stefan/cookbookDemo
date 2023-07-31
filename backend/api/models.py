from django.db import models
import uuid
# Create your models here.

class Recipe(models.Model):
    name = models.CharField(max_length=50,blank=False,null=False)
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False, blank=False, null=False , unique=True)
    img = models.ImageField(blank=True,null=True,default='/placeholder.png')
    category = models.CharField(blank=False,null=False,max_length=50,default="sweet")
    specificCategory = models.CharField(blank=False,null=False,max_length=50,default="cookie")
    
    def __str__(self):
        return self.name


class Ingredient(models.Model):
    recipe = models.ForeignKey(Recipe,on_delete = models.CASCADE)
    name = models.CharField(max_length=100,blank=False,null=False)

    def __str__(self):
        return self.name

class Step(models.Model):
    recipe = models.ForeignKey(Recipe,on_delete = models.CASCADE)
    name = models.CharField(max_length=100,blank=False,null=False)

    def __str__(self):
        return self.name