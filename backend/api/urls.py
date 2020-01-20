from .views import EmployeesApi

from django.conf.urls import url


urlpatterns = [
    url(
        r"^employees/$",
        EmployeesApi.as_view({'get': 'employees'}),
        name="employees",
    ),
    url(
        r"^save/$",
        EmployeesApi.as_view({'post': 'save'}),
        name="save",
    ),

]
