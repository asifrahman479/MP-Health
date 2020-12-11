from django.db import models

# Create your models here.
class Clinic(models.Model):
    ClinicName = models.CharField(max_length = 96, blank = True)

    def get_doctors(self):
        return Doctor.objects.filter(ClinicID = self)


class Doctor(models.Model):
    DoctorName = models.CharField(max_length = 96, blank=True)
    ClinicID = models.ForeignKey(Clinic, related_name="clinic", on_delete=models.CASCADE)
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

    def get_patient_name(pk):
        return Patient.filter(PatientID = self).PatientName


class DocAvailability(models.Model):
    # DoctorID = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    Subject = models.CharField(max_length = 96, blank = True)
    StartTime = models.DateTimeField(blank = True)
    EndTime = models.DateTimeField(blank = True)
    IsBlock = models.BooleanField(default = True)
    Location = models.EmailField( blank = True , max_length=254)
    
    @classmethod
    def create(cls, Subject, StartTime, EndTime, IsBlock, Location):
        appt = cls( Subject= Subject, StartTime = StartTime, EndTime=EndTime, IsBlock = IsBlock, Location = Location)
        return appt


colors = {
    ("#fe6140", 'Emergency'),
    ("#f28e26", 'Sick'),
    ("#46d5c5", 'Examination'),
    ("#0facff", 'Telemedicine'),
    ("#6665dd", 'Routine Check-Up')

}

class Appointment(models.Model):
    # PatientID = models.ForeignKey(Patient, blank = True, null = True, on_delete=models.CASCADE)
    # DoctorID = models.ForeignKey(Doctor, blank = True, null = True, on_delete=models.CASCADE)
    Subject = models.CharField(max_length = 96, blank = True)
    StartTime = models.DateTimeField(blank = True)
    EndTime = models.DateTimeField(blank = True)
    CategoryColor = models.CharField(max_length=10, choices = colors, blank = True) 
    IsBlock = models.BooleanField(default = False)
    Location = models.EmailField(blank = True, max_length=254)

    @classmethod
    def create(cls, Subject, StartTime, EndTime, IsBlock):
        appt = cls( Subject= Subject, StartTime = StartTime, EndTime=EndTime, IsBlock = IsBlock)
        return appt
    
    
