from django.shortcuts import render, redirect,get_object_or_404
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

from reservation.forms import ReservationForm
from reservation.models import Restaurant, Reservation

class ReservationsListView(LoginRequiredMixin, ListView):
    model = Reservation
    template_name = 'reservation/list_reservation.html'
    context_object_name = 'reservations'

    def get_queryset(self):
        return Reservation.objects.filter(customer=self.request.user).order_by('-reservation_date', '-reservation_time')

@login_required
def reservation_create(request, id):
    restaurant = get_object_or_404(Restaurant, id=id)
    if request.method == 'POST':
        form = ReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save(commit=False)
            reservation.restaurant = restaurant
            reservation.customer = request.user
            reservation.save()
            return redirect('reservation-confirmation', id=reservation.pk)
    else:
        form = ReservationForm()
    return render(request, 'reservation/reservation_form.html', {'form': form, 'restaurant': restaurant})

def reservation_update(request, id):
    reservation = get_object_or_404(Reservation, pk=id)
    if request.method == 'POST':
        form = ReservationForm(request.POST, instance=reservation)
        if form.is_valid():
            form.save()
            return redirect('reservation-list')
    else:
        form = ReservationForm(instance=reservation)
    return render(request, 'reservation/reservation_form.html', {'form': form})


@login_required
def reservation_confirmation(request, id):
    reservation = get_object_or_404(Reservation, id=id)
    return render(request, 'reservation/reservation_confirmation.html', {'reservation': reservation})

def reservation_ticket(resquest, id):
    reservation = get_object_or_404(Reservation, id=id)
    if reservation.status != Reservation.CONFIRMED:
        reservation.status = Reservation.CONFIRMED
        reservation.save()
    return render(resquest, 'reservation/reservation_ticket.html', {"reservation":reservation})

@login_required
def reservation_cancel(request, id):
    reservation = get_object_or_404(Reservation, id=id)
    if reservation.customer == request.user:
        reservation.status = Reservation.CANCELLED
        reservation.save()
    return redirect('reservation-list')

@login_required
def reservation_pending(request, id):
    reservation = get_object_or_404(Reservation, id=id)
    if reservation.customer == request.user:
        reservation.status = Reservation.PENDING
        reservation.save()
    return redirect('home')