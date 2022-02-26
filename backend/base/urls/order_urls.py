from django.urls import path
from base.views import order_views as views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# )


urlpatterns = [
    path('add/', views.addOrderItems, name='orders-add'),
    # path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('register/', views.registerUser,name='register'),

    # path('profile/', views.getUserProfile, name="user-profile"),
    # path('', views.getUsers, name="users"),


]   