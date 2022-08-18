from django.db import models

# Create your models here.

class Candidate(models.Model):
    name = models.CharField(max_length=120)
    contact = models.CharField(max_length=120)
    academic_qualification = models.CharField(max_length=120)
    professional_experience = models.CharField(max_length=120)
    skills = models.CharField(max_length=120)
    status = models.IntegerField(default=1)
    accepted = models.BooleanField(default=False)
    rejected = models.BooleanField(default=False)

    def __str__(self):
        return self.name

