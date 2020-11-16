from django.db import models

# Create your models here.
class Doctor(models.Model):
    DoctorName = models.CharField(max_length = 96), blank = True)
    ClinicID = models.TextField(blank = True)
    Email = models.TextField(blank = True))
    Phone = models.CharField(max_length = 12, blank = True))
    JobTitle= models.TextField(blank = True))

    def __str__(self):
        # returning the doctor info
        return f'{self.DoctorName} {self.Email} {self.Phone} {self.JobTitle}'
    
    def get_doctor_appt(self):
        return Appointment.object.filter(DoctorID = self)

    def get_doctor_availability(self):
        return DocAvailability.object.filter(DoctorID = self)


class Patient(models.Model):
    PatientName = models.CharField(max_length = 96, blank = True))
    Email = models.TextField(blank = True))
    Phone = models.CharField(max_length =12, blank = True))

    def __str__(self):
        # returning the patient info
        return f'{self.PatientName} {self.Email} {self.Phone}'
    def get_patient_appt(self):
        return Appointment.object.filter(PatientID = self)

class DocAvailability(models.Model):
    DoctorID = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    StartTime = models.DateTimeField(blank = True)
    EndTime = StartTime.timedelta(minutes = 30)
    IsFree = models.BooleanField(deafult = True)

    

class Appointment(models.Model):
    PatientID = models.ForeignKey(Patient on_delete=models.CASCADE)
    DoctorID = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    StartTime = models.DateTimeField(blank = True)
    EndTime = StartTime.timedelta(minutes = 30)
    VirtualMeeting = models.URLField(blank = True)

class Clinics(models.Model):
    ClinicName = models.CharField(max_length = 96, blank = True))
    
    def get_doctors(self):
        return Doctor.objects.filter(ClinicID = self)