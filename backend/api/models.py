from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Post(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=3000)
    pub_date = models.DateTimeField('date published')
    author = models.TextField(max_length=50)
