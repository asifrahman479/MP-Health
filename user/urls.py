from django.urls import include, path
from rest_framework import routers
from . import views
from .views import CreateAppointmentView, ConfirmationView, ErrorView, Error2View, CreateAvailabilityView, Confirmation2View


urlpatterns = [
    path('create_appointment', CreateAppointmentView.as_view(), name= "create_appointment"),
    path('confirmation', ConfirmationView.as_view(), name= "confirmation"), 
    path('error', ErrorView.as_view(), name= "error"),
    path('error2', Error2View.as_view(), name= "error2"),
    path('setavailability', CreateAvailabilityView.as_view(), name= "setavailability"),
    path('confirmation2', Confirmation2View.as_view(), name= "confirmation2")
]


