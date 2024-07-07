from rest_framework import serializers
from . models import *

class RestaurantImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantImage
        fields = ['id', 'image']

class RestaurantSerializer(serializers.ModelSerializer):
    secondary_images = RestaurantImageSerializer(many=True, read_only=True)

    class Meta:
        model = Restaurant
        fields = [
            'id', 'name', 'address', 'phone_number', 'email',
            'description', 'opening_time', 'closing_time', 'opening_days',
            'speciality', 'rating', 'main_image', 'secondary_images'
        ]
        
