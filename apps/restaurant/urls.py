from django.contrib import admin 
from django.urls import path

from restaurant.views import api
from restaurant.views import views

urlpatterns = [
    path("list/", views.RestaurantListView.as_view(), name="restaurant-list"),
    path('search/', views.search_restaurant, name='search_restaurant'),
    path("detail/<int:pk>/", views.RestaurantDetailView.as_view(), name="restaurant-detail"),
    
    path('search/api/', api.RestaurantSearchAPI.as_view(), name='restaurant-search-api'),
    path("list/api/", api.RestaurantListAPI.as_view(), name="restaurant-list-api"),
    path("list/top/api/", api.RestaurantTopTen.as_view(), name="restaurant-list-top-api"),
    path("detail/api/<int:pk>/", api.RestaurantDetailAPI.as_view(), name="restaurant-detail-api"),
]