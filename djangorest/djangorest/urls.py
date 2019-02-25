# djangorest/urls.py
# This is the main urls.py. It should'nt be mistaken for the urls.py in the api directory

from django.conf.urls import url, include

urlpatterns = [

    url(r'^', include('api.urls')) # Add this line
]