from django.shortcuts import render, redirect, get_object_or_404 
from . models import  Employee
from . forms import  EmployeeForm 
from django.contrib import messages

# Create your views here.
def employee_list(request):
    employees = Employee.objects.all()
    return render(request, 'employee_crud/employee_list.html', {'employees': employees})


def create_employee(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Employee updated successfully!')
            return redirect('employee-list')
    else:
        form = EmployeeForm()  
    return render(request, 'employee_crud/create_employee.html', {'form': form})

def view_employee(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    return render(request, 'employee_crud/view_employee.html', {'employee': employee})
  

def edit_employee(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=employee)
        if form.is_valid():
            form.save()
            messages.success(request, 'Employee details updated successfully!')
            return redirect('employee_list')
        else:
            messages.error(request, 'Error updating employee. Please check the form.')
    else:
        form = EmployeeForm(instance=employee)
    
    return render(request, 'employee_crud/create_employee.html', {'form': form, 'update': True, 'employee': employee})
     

def delete_employee(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    if request.method == 'POST':
        employee.delete()
        messages.success(request, 'Employee deleted successfully!')
        return redirect('employee-list')
    return render(request, 'employee_crud/delete_employee.html', {'employee': employee})       


