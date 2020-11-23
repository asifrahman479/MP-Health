from user.viewsets import DoctorViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Doctor',DoctorViewSet)