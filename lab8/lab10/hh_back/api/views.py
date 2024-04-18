from django.shortcuts import render
from rest_framework import generics
from django.http.response import HttpResponse, JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacanciesListCreateAPIView(generics.ListCreateAPIView): 
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacanciesRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer



def get_companies(request): 
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]

    return JsonResponse(companies_json, safe=False)

def get_company(request, pk=None): 
    company = Company.objects.get(id=pk)

    return JsonResponse(company.to_json(), safe=False)

def get_vacancies (request): 
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancies_json, safe = False)

def get_vacancy(request, pk = None): 
    vacancy = Vacancy.objects.get(id = pk)
    
    return JsonResponse(vacancy.to_json(), safe=False)

def get_vacancy_by_company(request, pk = None): 
    company = Company.objects.get(id=pk)

    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    
    return JsonResponse(vacancies_json, safe=False)

def get_topten(request): 
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    top_vacancies_json = [top_vacancy.to_json() for top_vacancy in top_vacancies]

    return JsonResponse(top_vacancies_json, safe=False)

# Create your views here.