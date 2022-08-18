from django.contrib import admin
from .models import Candidate

class CandidateAdmin(admin.ModelAdmin):
    list_display = ("name", "contact", "status")

# Register your models here.
admin.site.register(Candidate, CandidateAdmin)


