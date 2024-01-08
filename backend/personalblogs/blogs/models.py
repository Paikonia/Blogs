from django.db import models





class BlogPost(models.Model):
    layout = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    publish_date = models.DateField()
    excerpt = models.TextField()
    tags = models.JSONField()
    markdown_content = models.TextField()
    featured_image = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.title
    
class FeaturedImage(models.Model):
    blog_post = models.ForeignKey(BlogPost, related_name='featured_images', on_delete=models.CASCADE)
    image = models.ImageField()
    position = models.PositiveIntegerField()