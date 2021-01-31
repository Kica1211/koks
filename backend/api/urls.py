from django.contrib import admin
from django.urls import path, include
from .views import PostsList, PostCreate, PostDelete, PostUpdate, UsersList, UserCreate, UserDelete, UserUpdate, PostDetail
urlpatterns = [
    path('posts-list/', PostsList.as_view(), name="posts-list"),
    path('post-create/', PostCreate.as_view(), name="post-create"),
    path('post-delete/<str:pk>', PostDelete.as_view(), name="post-delete"),
    path('post-update/<str:pk>', PostUpdate.as_view(), name="post-update"),
    path('post-detail/<str:pk>', PostDetail, name="post-detail"),
    path('users-list/', UsersList.as_view(), name="users-list"),
    path('user-create/', UserCreate.as_view(), name="user-create"),
    path('user-delete/<str:pk>', UserDelete.as_view(), name="user-delete"),
    path('user-update/<str:pk>', UserUpdate.as_view(), name="user-update"),
]
