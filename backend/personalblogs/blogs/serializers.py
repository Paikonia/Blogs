from rest_framework import serializers

from .models import BlogPost, FeaturedImage



class FeaturedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeaturedImage
        fields = ["id","blog_post", "image", "position"]

class BlogPostSerializer(serializers.ModelSerializer):
    
    featured_images = FeaturedImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = BlogPost
        fields =['id','layout', 'title', 'description','publish_date','excerpt', 'tags', 'featured_images']


