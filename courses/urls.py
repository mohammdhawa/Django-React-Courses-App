from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import CoursesListAPI, CoursesDetailAPI
from .views import CoursesViewSet, CourseDetailViewSet, CategoriesViewSet

router = DefaultRouter()
router.register('courses', CoursesViewSet,  basename='courses')
router.register('courses/<int:pk>', CourseDetailViewSet, basename='course-detail')
router.register('categories', CategoriesViewSet, basename='categories')

urlpatterns = [
    path('api/', include(router.urls)),

]
