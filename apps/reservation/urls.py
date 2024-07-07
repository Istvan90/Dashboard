from django.urls import path

from reservation.views import views
from reservation.views import api

urlpatterns = [
    path('', views.ReservationsListView.as_view(), name='reservation-list'),
    path('reservation_restaurant/<int:id>/', views.reservation_create, name='reservation-restaurant'),
    path('update/<int:id>/', views.reservation_update, name='reservation-update'),
    path('confirmation/<int:id>/', views.reservation_confirmation, name='reservation-confirmation'),
    path('ticket/<int:id>/', views.reservation_ticket, name='reservation-ticket'),
    path('pending/<int:id>/', views.reservation_pending, name='reservation-pending'),
    path('canceled/<int:id>/', views.reservation_cancel, name='reservation-cancel'),
    
    path('list/api/', api.ReservationListCreateView.as_view(), name='reservation-list-api'),
    path('detail/api/<int:pk>/', api.ReservationDetailView.as_view(), name='reservation-detail'),
]