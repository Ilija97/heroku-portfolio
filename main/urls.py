from django.urls import path, include
from . import views

urlpatterns = [
    path('portfolio/', views.PortfolioView.as_view(), name="portfolios"),
    path('portfolio/<slug:slug>', views.PortfolioDetailView.as_view(), name='portfolio'),
    path('contact/', views.ContactView.as_view(), name="contact"),
    path('profile/', views.UserProfileView.as_view(), name="profile"),
]