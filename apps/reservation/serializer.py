from rest_framework import serializers
from . models import *

from rest_framework import serializers
from .models import Reservation
from accounts.models import Customer
from restaurant.models import Restaurant

class ReservationSerializer(serializers.ModelSerializer):
    restaurant_name = serializers.CharField(source='restaurant.name', read_only=True)
    customer_username = serializers.CharField(source='customer.username', read_only=True)
    qr_code_url = serializers.ImageField(read_only=True)

    class Meta:
        model = Reservation
        fields = [
            'id', 'restaurant', 'restaurant_name', 'customer', 'customer_username', 'reservation_date',
            'reservation_time', 'number_of_people', 'special_requests', 'status', 'qr_code_url'
        ]