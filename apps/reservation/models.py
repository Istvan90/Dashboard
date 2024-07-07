from django.db import models

from accounts.models import Customer
from restaurant.models import Restaurant
import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw

class Reservation(models.Model):
    PENDING = 'pending'
    CONFIRMED = 'confirmed'
    CANCELLED = 'cancelled'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (CONFIRMED, 'Confirmed'),
        (CANCELLED, 'Cancelled'),
    ]

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)    
    #table_id = models.IntegerField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    reservation_date = models.DateField()
    reservation_time = models.TimeField()
    number_of_people = models.IntegerField()
    special_requests = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default=PENDING,
    )
    qr_code = models.ImageField(blank=True, upload_to='qr_codes/')
    
    def save(self, *args, **kwargs):
        if self.status == 'confirmed':        
            qr_data = f"Reservation ID: {self.pk}\nRestaurant: {self.restaurant.name}\nClient: {self.customer.username}\nClient ID: {self.customer.pk}\nDate: {self.reservation_date}\nTime: {self.reservation_time}\nNumber of People: {self.number_of_people}"

            qr_image = qrcode.make(qr_data)
            qr_offset = Image.new('RGB', (580, 580), "white")
            qr_offset.paste(qr_image)
            file_name = f"reservation-{self.id}-qr.png"
            stream = BytesIO()
            qr_offset.save(stream, "PNG")
            self.qr_code.save(file_name, File(stream), save=False)
            qr_offset.close()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Reservation {self.pk} - {self.reservation_date} at {self.reservation_time}"
