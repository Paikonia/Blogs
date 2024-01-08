from rest_framework import generics
from .models import BlogPost, FeaturedImage
from .serializers import BlogPostSerializer, FeaturedImageSerializer


class Blogs(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    
class Blog(generics.RetrieveUpdateAPIView, generics.DestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    
class BlogImages(generics.ListCreateAPIView):
    queryset = FeaturedImage.objects.all()
    serializer_class = FeaturedImageSerializer

class BlogImage(generics.RetrieveUpdateAPIView, generics.DestroyAPIView):
    queryset = FeaturedImage.objects.all()
    serializer_class = FeaturedImageSerializer


