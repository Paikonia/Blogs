from django.urls import path
from .views import Blogs, Blog, BlogImage, BlogImages

urlpatterns = [
    path('blogs/', view=Blogs.as_view()),
    path('blogs/<int:pk>', view=Blog.as_view()),
    path('blogs/images/', view=BlogImages.as_view()),
    path('blogs/images/<int:pk>', view=BlogImage.as_view()),
]

