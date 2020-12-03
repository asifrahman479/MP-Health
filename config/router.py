from user.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Doctor',DoctorViewSet)
router.register('Appointment',AppointmentViewSet)
router.register('Patient',PatientViewSet)
router.register('DocAvailability',DocAvailabilityViewSet)
router.register('Clinic',ClinicViewSet)