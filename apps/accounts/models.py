from django.contrib.auth.models import AbstractUser

class Customer(AbstractUser):
    class Meta:
        app_label = 'accounts'