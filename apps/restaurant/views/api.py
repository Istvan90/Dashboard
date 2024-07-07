from restaurant.models import Restaurant
from restaurant.serializer import RestaurantSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics


class RestaurantListAPI(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    
class RestaurantDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantSearchAPI(APIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('q', None)
        if not query:
            return Response({"error": "A search query is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        results = Restaurant.objects.filter(name__icontains=query)
        serializer = RestaurantSerializer(results, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class RestaurantTopTen(generics.ListAPIView):
    queryset = Restaurant.objects.order_by('-rating')[:5]
    serializer_class = RestaurantSerializer
