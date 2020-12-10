from django.urls import include, path
from rest_framework import routers
from . import views
from .views import CreateAppointmentView, ConfirmationView


urlpatterns = [
    path('create_appointment', CreateAppointmentView.as_view(), name= "create_appointment"),
    path('confirmation', ConfirmationView.as_view(), name= "confirmation")
]


