# backend/projects/urls.py
from django.urls import path, include # Asegúrate de que 'include' esté importado
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
# El router genera URLs como 'projects/' y 'projects/<pk>/'

urlpatterns = [
    path('', include(router.urls)), # Esta línea incluye las URLs generadas por el router
]