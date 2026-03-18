from django.shortcuts import render

def home(request):
    return render(request, 'main/home.html')

def about(request):
    return render(request, 'main/about.html')

def activities(request):
    return render(request, 'main/activities.html')

def contact(request):
    return render(request, 'main/contact.html')