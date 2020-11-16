from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def doctor_homepage(request):
    return render(request, 'doctor/doctor_homepage.html')