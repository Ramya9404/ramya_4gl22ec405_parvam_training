from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about_us, name='about-us'),
    path('services', views.services, name='services'),
    path('contact', views.contact_us, name='contact-us'),
]