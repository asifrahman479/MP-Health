from rest_framework import viewsets, permissions
from . import models
from . import serializers
from rest_framework.decorators import api_view
from .forms import CreateAppointment, CreateAvailability
from django.views.generic import CreateView
from .models import Appointment, DocAvailability
from django.shortcuts import redirect
from django.urls import reverse
import datetime



from django.views import View

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = models.Doctor.objects.all()
    serializer_class = serializers.DoctorSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    #queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.appointment.all()

    # def perform_create(self, serializer):
    #     serializer.save(DoctorID=self.request.user)

    # @api_view(['POST'])
    # def appointment_list(request):
    #     if request.method == 'POST':
    #         serializer = AppointmentSerializer(data = request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(serializer.data, status = status.HTTP_201_CREATED)
    #         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class PatientViewSet(viewsets.ModelViewSet):
    queryset = models.Patient.objects.all()
    serializer_class = serializers.PatientSerializer

class DocAvailabilityViewSet(viewsets.ModelViewSet):
    queryset = models.DocAvailability.objects.all()
    serializer_class = serializers.DocAvailabilitySerializer


class ClinicViewSet(viewsets.ModelViewSet):
    queryset = models.Clinic.objects.all()
    serializer_class = serializers.ClinicSerializer

class CreateAvailabilityView(CreateView):
    model = DocAvailability
    form_class = CreateAvailability
    template_name = "setavailability.html"
    queryset = models.DocAvailability.objects.all()
    
    def get_success_url(self):
        appt = models.DocAvailability.objects.get( id = self.object.id)
        obj = models.Appointment.create( Subject = appt.Subject, StartTime = appt.StartTime, EndTime = appt.EndTime, IsBlock = False)
        obj.save()
        return reverse('confirmation2')

class CreateAppointmentView(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "create_appointment_form.html"
    queryset = models.Appointment.objects.all()

    def get_success_url(self):
        instance = models.Appointment.objects.last()
        if ((instance.EndTime - instance.StartTime) == datetime.timedelta(minutes = 30)):
            switch = True
            length = len(models.Appointment.objects.all())
            number = 0
            for x in models.Appointment.objects.all():
                number += 1
                if(x.StartTime == self.object.StartTime and x.EndTime == self.object.EndTime):
                    switch = False
                    if(length == number):
                        switch = True
                    elif(switch == False):
                        instance.delete()
                        return reverse('error')

            if switch == True:
                appt = models.Appointment.objects.get( id = self.object.id)
                obj = models.DocAvailability.create( Subject = "NOT AVAILABLE", StartTime = appt.StartTime, EndTime = appt.EndTime, IsBlock = True, Location = appt.Location)
                obj.save()
                return reverse('confirmation')
        else:
            instance.delete()
            return reverse('error2')   
    
       
        
class ConfirmationView(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "confirmation.html"
class ErrorView(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "error.html"
class Error2View(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "error2.html"
class Confirmation2View(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "confirmation2.html"

# def appointment_list(request):
#     if request.method == 'POST':
#         serializer = AppointmentSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status = status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# def newApt(request):
#     return render(request, 'apt.html', {"form": CreateAppointment}) 

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()