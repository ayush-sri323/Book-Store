from django.http import request
from django.urls import path
from . import views
urlpatterns = [
    path("",views.index),
    path("<str:slug>",views.book_details,name="book_details"),
]
