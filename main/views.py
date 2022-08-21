from django.shortcuts import render
from django.contrib import messages
from .models import ( UserProfile, ContactProfile, Portfolio, Skill)
from .forms import ContactForm
from rest_framework import generics
from rest_framework.response import Response
from .serializers import PortfolioSerializer, ContactProfileSerializer, UserProfileSerializer
from rest_framework import status


class PortfolioView(generics.ListAPIView):
    serializer_class = PortfolioSerializer
    queryset = Portfolio.objects.all()


class PortfolioDetailView(generics.RetrieveAPIView):
    serializer_class = PortfolioSerializer

    def get(self, request, *args, **kwargs):
        slug = kwargs.get("slug")
        queryset = Portfolio.objects.get(slug=slug)
        serializer = PortfolioSerializer(queryset)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
 

class ContactView(generics.CreateAPIView):
    serializer_class = ContactProfileSerializer


class UserProfileView(generics.ListAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()