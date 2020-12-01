from user.viewsets import DoctorViewSet
from user.viewsets import AppointmentViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Doctor',DoctorViewSet)
router.register('Appointment',AppointmentViewSet)