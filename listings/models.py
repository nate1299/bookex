from django.db import models

class listing(models.Model):
    title = models.CharField(max_length=180)
    course = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    thumbnail = models.ImageField(upload_to='media')
    pending = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Order(models.Model):
    name = models.CharField(max_length=180)
    phone = models.CharField(max_length=20)
    items = models.ManyToManyField(listing)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.name