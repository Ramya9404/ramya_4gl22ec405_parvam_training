from django.urls import path
from . import views

urlpatterns = [
    path('', views.employee_list, name="employee-list"),
    path('create', views.create_employee, name="create-employee"),
    path('<int:pk>/', views.view_employee, name="view-employee"),
    path('<int:pk>/edit/', views.edit_employee, name="edit-employee"),
    path('<int:pk>/delete/', views.delete_employee, name="delete-employee"),
]