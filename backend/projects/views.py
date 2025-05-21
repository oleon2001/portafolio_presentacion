# backend/projects/views.py
from rest_framework import viewsets, permissions
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite ver o editar proyectos.
    Proporciona acciones para list, create, retrieve, update, partial_update, destroy.
    """
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly] # Ejemplo: solo usuarios autenticados pueden modificar
    permission_classes = [permissions.AllowAny] # Para este ejemplo, permitimos cualquier acceso
