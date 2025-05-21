# backend/projects/serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo Project.
    Convierte instancias de Project a JSON y viceversa.
    """
    class Meta:
        model = Project
        fields = [
            'id',
            'title',
            'description',
            'image_url',
            'project_url',
            'repository_url',
            'technologies',
            'created_at',
            'updated_at'
        ]
        # Opcional: definir campos de solo lectura si es necesario
        # read_only_fields = ['id', 'created_at', 'updated_at']
