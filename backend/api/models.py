from django.db import models

# Create your models here.


class Position(models.Model):
    """The positions that the people could have"""
    name = models.CharField(max_length=30)


class Skill(models.Model):
    """ The skills that the people could have"""
    name = models.CharField(max_length=30, unique=True)


class Employee(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(
        max_length=70,
        blank=True,
        null=True,
        unique=True
    )
    birthday = models.DateField()
    address = models.CharField(max_length=30)
    # ForighKey
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    # Many to Many
    skills = models.ManyToManyField(Skill)


class Admin(models.Model):
    """ The skills that the people could have"""
    email = models.EmailField(
        max_length=70,
        blank=True,
        null=True,
        unique=True,
        default="admin@NullData.com"
    )
    password = models.CharField(
        max_length=30,
        default="admin"
    )
