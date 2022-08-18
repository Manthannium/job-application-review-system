from attr import field
from rest_framework import serializers
from .models import Candidate

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id', 'name', 'contact','academic_qualification','professional_experience','skills','status','accepted','rejected')