from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(max_length=5000)
    price = models.FloatField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='courses/')

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name