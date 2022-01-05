from django.apps import AppConfig
# from .signals import *


class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'
    
    def ready(self):
        import base.signals
