# api/serializers.py

from rest_framework import serializers
from .models import Carlist


class CarlistSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Carlist
        fields = ('id','number')
        read_only_fields = ('date_created', 'date_modified')
    