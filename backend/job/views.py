from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CandidateSerializer
from .models import Candidate

# Create your views here.

class CandidateView(viewsets.ModelViewSet):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()
    
