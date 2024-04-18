from django.urls import path 
from .views_company import CompanyCRUD, CompaniesCRUD
from .views_vacancy import vacancy_list, vacancy_detail, vacancy_company

urlpatterns = [
    path('companies/', CompaniesCRUD.as_view()),
    path('companies/<int:pk>/', CompanyCRUD.as_view()),
    path('companies/<int:id>/vacancies/', vacancy_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
]