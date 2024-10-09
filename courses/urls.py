from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import CoursesListAPI, CoursesDetailAPI
from .views import CoursesViewSet, CourseDetailViewSet

router = DefaultRouter()
router.register('', CoursesViewSet,  basename='courses')
router.register('<int:pk>', CourseDetailViewSet, basename='course-detail')

urlpatterns = [
    path('api/courses/', include(router.urls)),

]
