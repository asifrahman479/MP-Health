from django.urls import path
from . import views

urlpatterns = [
    path('doctors/', views.doctor_homepage)
]