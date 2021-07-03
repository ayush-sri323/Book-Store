from django.shortcuts import render
from .models import book
# Create your views here.
def index(request):
    books=book.objects.all()
    return render(request,"book_outlet/index.html",{
        "books":books
    })
def book_details(request,slug):
    books=book.objects.get(slug=slug)
    return render(request,"book_outlet/book_detail.html",{
        "title":books.title,
        "author":books.author,
        "rating":books.rating,
        "is_bestseller":books.is_bestselling,
    })