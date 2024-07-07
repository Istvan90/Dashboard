from rest_framework import serializers

from restaurant.serializer import RestaurantSerializer
from .models import Menu, Dish
        
class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    dishes = DishSerializer(many=True, read_only=True)
    restaurant_name = serializers.CharField(source='restaurant.name', read_only=True)
    class Meta:
        model = Menu
        fields = '__all__'