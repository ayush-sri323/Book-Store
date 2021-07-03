from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator
from django.db.models.deletion import CASCADE
from django.urls import reverse
from django.utils.text import slugify

# Create your models here.
class Country(models.Model):
    name=models.CharField(max_length=200)
    code=models.CharField(max_length=14)

class address(models.Model):
    city=models.CharField(max_length=233)
    street=models.CharField(max_length=334)
    def __str__(self):
        return f"{self.city},{self.street}"

class Author(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    address=models.OneToOneField(address,on_delete=models.CASCADE,null=True)
    def full_name(self):
        return self.first_name + " " +self.last_name
    def __str__(self):
         return self.full_name()
            
class book(models.Model):
    title=models.CharField(max_length=50)
    rating=models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    author=models.ForeignKey(Author,on_delete=models.CASCADE,null=True)
    is_bestselling=models.BooleanField(default=False)
    slug=models.SlugField(default="",null=False)
    city=models.ManyToManyField(Country)

    def __str__(self):
        return f"{self.title},({self.rating})"
    def get_absolute_url(self):
        return reverse("book_details", args=[self.slug])
        