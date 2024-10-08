from rest_framework import generics
from .serializers import CourseSerializer, CourseDetailSerializer
from .models import Course


class CoursesListAPI(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CoursesDetailAPI(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseDetailSerializer
