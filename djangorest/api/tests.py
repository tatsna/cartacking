# /api/tests.py

from django.test import TestCase
from .models import Carlist


class ModelTestCase(TestCase):
    """This class defines the test suite for the Carlist model."""

    def setUp(self):
        """Define the test client and other test variables."""
        self.Carlist_number = "Write world class code"
        self.Carlist = Carlist(number=self.Carlist_number)
        

    def test_model_can_create_a_Carlist(self):
        """Test the Carlist model can create a Carlist."""
        old_count = Carlist.objects.count()
        self.Carlist.save()
        new_count = Carlist.objects.count()
        self.assertNotEqual(old_count, new_count)
    