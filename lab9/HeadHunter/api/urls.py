from django.urls import path 
from .views import get_companies, get_company, get_topten, get_vacancies, get_vacancy, get_vacancy_by_company

urlpatterns = [
    path('companies/', get_companies ),
    path('companies/<int:pk>/', get_company), 
    path('companies/<int:pk>/vacancies/', get_vacancy_by_company), 
    path('vacancies/', get_vacancies), 
    path('vacancies/<int:pk>/', get_vacancy), 
    path('vacancies/top_ten/', get_topten)
]