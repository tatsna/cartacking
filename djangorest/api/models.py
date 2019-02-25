# api/models.py

from django.db import models


class Carlist(models.Model):
    """This class represents the carlist model."""
    number = models.CharField(max_length=4)
    
    def __str__(self):
        """Return a human readable representation of the model instance."""
        return "{}".format(self.number)