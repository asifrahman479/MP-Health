from django.db import models

# Create your models here.
class Doctor(models.Model):
    DoctorName = models.TextField()
    ClinicID = models.TextField()
    Email = models.TextField()
    Phone = models.TextField()
    Appointments = models.TextField()
    JobTitle= models.TextField()