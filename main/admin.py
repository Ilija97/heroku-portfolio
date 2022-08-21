from django.contrib import admin
from .models import ( UserProfile, ContactProfile, Portfolio, Skill)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')

@admin.register(ContactProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'name')

@admin.register(Portfolio)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_active')
    readonly_fields = ('slug',)

@admin.register(Skill)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'score')

