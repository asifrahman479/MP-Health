from django import forms
from .models import Appointment, DocAvailability

class CreateAppointment(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['Subject', 'Location',  'StartTime', 'EndTime', 'CategoryColor']
        
class CreateAvailability(forms.ModelForm):
    class Meta:
        model = DocAvailability
        fields = ['Subject', 'StartTime', 'EndTime', 'IsBlock']

