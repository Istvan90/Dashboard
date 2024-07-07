from rest_framework import generics
from reservation.models import Reservation
from reservation.serializer import ReservationSerializer


class ReservationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class ReservationListCreateView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from reservation.models import Reservation
from reservation.serializer import ReservationSerializer


class ReservationDetailView(APIView):
    def get(self, request, id):
        reservation = get_object_or_404(Reservation, id=id)
        serializer = ReservationSerializer(reservation)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        reservation = get_object_or_404(Reservation, id=id)
        serializer = ReservationSerializer(reservation, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        reservation = get_object_or_404(Reservation, id=id)
        reservation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ReservationListCreateView(APIView):
    def get(self, request):
        reservations = Reservation.objects.all()
        serializer = ReservationSerializer(reservations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ReservationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

"""