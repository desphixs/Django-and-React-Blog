from django.contrib import admin
from api import models as api_models

class UserAdmin(admin.ModelAdmin):
    search_fields  = ['full_name', 'username', 'email']
    list_display  = ['username', 'email']

class ProfileAdmin(admin.ModelAdmin):
    search_fields  = ['user']
    list_display = ['thumbnail', 'user', 'full_name']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ["title"]

class PostAdmin(admin.ModelAdmin):
    list_display = ["title","user","category","view"]

class CommentAdmin(admin.ModelAdmin):
    list_display = ["post","name","email","comment"]

class BookmarkAdmin(admin.ModelAdmin):
    list_display = ["user","post"]

class NotificationAdmin(admin.ModelAdmin):
    list_display = ["user","post","type","seen",]

admin.site.register(api_models.User, UserAdmin)
admin.site.register(api_models.Profile, ProfileAdmin)
admin.site.register(api_models.Category, CategoryAdmin)
admin.site.register(api_models.Post, PostAdmin)
admin.site.register(api_models.Comment, CommentAdmin)
admin.site.register(api_models.Notification, NotificationAdmin)
admin.site.register(api_models.Bookmark, BookmarkAdmin)