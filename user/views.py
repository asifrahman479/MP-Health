from rest_framework import viewsets, permissions
from . import models
from . import serializers
from rest_framework.decorators import api_view
from .forms import CreateAppointment
from django.views.generic import CreateView
from .models import Appointment
from django.shortcuts import redirect
from django.urls import reverse




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

class CreateAppointmentView(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "create_appointment_form.html"
    queryset = models.Appointment.objects.all()

    def get_success_url(self):
        appt = models.Appointment.objects.get( id = self.object.id)
        obj = models.DocAvailability.create( Subject = "NOT AVAILABLE", StartTime = appt.StartTime, EndTime = appt.EndTime, IsBlock = True)
        obj.save()
        return reverse('confirmation')
        
class ConfirmationView(CreateView):
    model = Appointment
    form_class = CreateAppointment
    template_name = "confirmation.html"

# def appointment_list(request):
#     if request.method == 'POST':
#         serializer = AppointmentSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status = status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# def newApt(request):
#     return render(request, 'apt.html', {"form": CreateAppointment}) 
