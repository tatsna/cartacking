# api/views.py

from rest_framework import generics
from .serializers import CarlistSerializer
from .models import Carlist


class CreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Carlist.objects.all()
    serializer_class = CarlistSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new Carlist."""
        serializer.save()