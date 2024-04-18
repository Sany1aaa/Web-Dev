from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=25)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=25)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default = 1)
    def __str__(self):
        return self.name
