from django.contrib import admin
from .models import *

admin.site.register(Doctor)
admin.site.register(Appointment)
admin.site.register(Clinic)
admin.site.register(Patient)
admin.site.register(DocAvailability)
