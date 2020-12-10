from django import forms
from .models import Appointment, DocAvailability

class CreateAppointment(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['Subject', 'StartTime', 'EndTime']
        

