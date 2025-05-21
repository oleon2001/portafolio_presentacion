# backend/projects/models.py
from django.db import models

class Project(models.Model):
    """
    Modelo para representar un proyecto en el portafolio.
    """
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descripción")
    image_url = models.URLField(max_length=500, blank=True, null=True, verbose_name="URL de la Imagen")
    project_url = models.URLField(max_length=500, blank=True, null=True, verbose_name="URL del Proyecto")
    repository_url = models.URLField(max_length=500, blank=True, null=True, verbose_name="URL del Repositorio")
    technologies = models.CharField(max_length=300, blank=True, verbose_name="Tecnologías Usadas (separadas por coma)")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Creación")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Fecha de Actualización")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ['-created_at']
