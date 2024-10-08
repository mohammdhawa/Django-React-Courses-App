from django.urls import path
from .api import CoursesListAPI, CoursesDetailAPI


urlpatterns = [
    path('api/courses/', CoursesListAPI.as_view()),
    path('api/courses/<int:pk>/', CoursesDetailAPI.as_view()),
]
