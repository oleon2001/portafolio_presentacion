# backend/projects/views.py
from rest_framework import viewsets, permissions
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite ver o editar proyectos.
    Cualquiera puede ver la lista, pero solo usuarios autenticados pueden crear/editar/borrar.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
