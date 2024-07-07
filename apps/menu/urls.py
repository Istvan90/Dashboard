from django.urls import path
from .views import views
from .views import api

urlpatterns = [
    path('', views.MenuListView.as_view(), name='menu-list'),
    path('create/', views.menu_create, name='menu-create'),
    path('edit/<int:pk>/', views.menu_update, name='menu-update'),
    path('delete/<int:pk>/', views.menu_delete, name='menu-delete'),
    
    path('dishes', views.DishListView.as_view(), name='dish-list'),
    path('dish/create/', views.dish_create, name='dish-create'),
    path('dish/edit/<int:pk>/', views.dish_update, name='dish-update'),
    path('dish/delete/<int:pk>/', views.dish_delete, name='dish-delete'),
    
    path('list/api/<int:restaurant_id>/', api.MenuListAPIView.as_view(), name='menu-list-create'),
    path('detail/api/<int:pk>/', api.MenuDetailAPIView.as_view(), name='menu-detail'),
    path('dish/list/api/', api.DishListAPIView.as_view(), name='dish-list-create'),
    path('dish/detail/api/<int:pk>/', api.DishDetailAPIView.as_view(), name='dish-detail'),
]