from rest_framework import viewsets
from . import models
from . import serializers
from rest_framework.decorators import api_view

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = models.Doctor.objects.all()
    serializer_class = serializers.DoctorSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

    @api_view(['POST'])
    def appointment_list(request):
        if request.method == 'POST':
            serializer = AppointmentSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status = status.HTTP_201_CREATED)
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class PatientViewSet(viewsets.ModelViewSet):
    queryset = models.Patient.objects.all()
    serializer_class = serializers.PatientSerializer

class DocAvailabilityViewSet(viewsets.ModelViewSet):
    queryset = models.DocAvailability.objects.all()
    serializer_class = serializers.DocAvailabilitySerializer

class ClinicViewSet(viewsets.ModelViewSet):
    queryset = models.Clinic.objects.all()
    serializer_class = serializers.ClinicSerializer

# def appointment_list(request):
#     if request.method == 'POST':
#         serializer = AppointmentSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status = status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)