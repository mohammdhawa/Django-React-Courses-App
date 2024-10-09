from django.shortcuts import render
from rest_framework import viewsets

from courses.models import Course
from .serializers import CourseSerializer, CourseDetailSerializer


class CoursesViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetailViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseDetailSerializer
