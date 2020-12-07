from django.db import models

# Create your models here.
class Clinic(models.Model):
    ClinicName = models.CharField(max_length = 96, blank = True)

    def get_doctors(self):
        return Doctor.objects.filter(ClinicID = self)


class Doctor(models.Model):
    DoctorName = models.CharField(max_length = 96, blank=True)
    ClinicID = models.ForeignKey(Clinic, on_delete=models.CASCADE)
    Email = models.TextField(blank = True)
    Phone = models.CharField(max_length = 12, blank = True)
    JobTitle= models.TextField(blank = True)

    def __str__(self):
        # returning the doctor info
        return f'{self.DoctorName} {self.Email} {self.Phone} {self.JobTitle}'

    def get_doctor_appt(self):
        return Appointment.object.filter(DoctorID = self)

    def get_doctor_availability(self):
        return DocAvailability.object.filter(DoctorID = self)


class Patient(models.Model):
    PatientName = models.CharField(max_length = 96, blank = True)
    Email = models.TextField(blank = True)
    Phone = models.CharField(max_length =12, blank = True)

    def __str__(self):
        # returning the patient info
        return f'{self.PatientName} {self.Email} {self.Phone}'
    def get_patient_appt(self):
        return Appointment.object.filter(PatientID = self)

class DocAvailability(models.Model):
    DoctorID = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    StartTime = models.DateTimeField(blank = True)
    EndTime = models.DateTimeField(blank = True)
    IsFree = models.BooleanField(default = True)
    IsReadonly = False


class Appointment(models.Model):
    PatientID = models.ForeignKey(Patient, blank = True, null = True, on_delete=models.CASCADE)
    DoctorID = models.ForeignKey(Doctor, blank = True, null = True, on_delete=models.CASCADE)
    Subject = models.CharField(max_length = 96, blank = True)
    StartTime = models.DateTimeField(blank = True)
    EndTime = models.DateTimeField(blank = True)
    IsReadonly = True
    IsBlock = models.BooleanField(default = False)
    
