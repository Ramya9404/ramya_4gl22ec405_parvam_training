from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    phone = models.CharField(max_length=10, unique=True)
    email = models.CharField(max_length=50)
    qualification= models.CharField(max_length=20)
    salary= models.IntegerField()
    department= models.CharField(max_length=50)
    experience = models.IntegerField()

    def __str__(self):
        return self.name
