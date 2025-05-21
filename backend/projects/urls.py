# backend/projects/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet

# Crea un router y registra nuestro viewset con él.
router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project') # El basename es importante si personalizas el queryset en el ViewSet

# Las URLs de la API son determinadas automáticamente por el router.
urlpatterns = [
    path('', include(router.urls)),
]
