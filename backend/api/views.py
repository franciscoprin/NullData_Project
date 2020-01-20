# Django.
from django.shortcuts import render
from django.template.loader import get_template
from django.conf import settings

# Rest API.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

# Sengrid API
import sendgrid
from sendgrid.helpers.mail import (
    Mail,
    Email,
    Content,
    CustomArg,
    Attachment,
    Personalization,
)
# Models
from api.models import (
    Employee,
    Position,
    Skill,
    Admin
)
from django.core.paginator import Paginator

# Serializer
from .serializer import EmployeesSerializer

# Other
from string import Template
from pprint import pprint
import dateparser


def mess_formater(mess, **parms):
    return Template(mess).substitute(**parms)

# Create your views here.


class EmployeesApi(viewsets.ViewSet):
    REASON = {
        1: "registed",
        2: "user already exist",
    }

    def employees(self, request, **kwargs):
        """
            TYPE: GET
            DESC: LIST OF EMPLOYEE
        """
        page = request.data.get("page", 1)
        order_by = request.data.get("order_by", "name").lower()
        order_type = request.data.get("desc", "desc").lower()
        order_type = "-" if order_type == "desc" else ""
        search = request.data.get("search", "").lower()  # TODO:has to be implemented

        employees = Employee.objects.all().order_by(order_type + order_by)
        # TODO: position object has to be converted to JSON.
        # TODO: THE SKILLS ARE MISSING.
        ######
        # from rest_framework.renderers import JSONRenderer
        # JSONRenderer().render(employees).data
        return Response(EmployeesSerializer(employees, many=True).data)

    def save(self, request, **kwargs):
        """
            TYPE: POST
            DESC: SAVE NEW EMPLOYEE
        """
        print("a############")
        pprint(request.data)
        print("a############")
        # GET REQUEST VALUES
        name_str = request.POST.get("name", "").lower()
        email_str = request.POST.get("email", "").lower()
        position_str = request.POST.get("position", "").lower()
        birthday_str = request.POST.get("birthday", "").lower()
        address_str = request.POST.get("address", "").lower()
        skills = request.POST.get("skills", [])
        # GET POSITION OR CREATE THE POSITION.
        position_obj, created = Position.objects.get_or_create(
            name=position_str
        )
        position_obj.save()
        # CREATE NEW EMPLOYEEE RECORD.
        new_employee, created = Employee.objects.get_or_create(
            name=name_str,
            email=email_str,
            birthday=dateparser.parse(birthday_str),  # TODO: What is the best way to do this?
            address=address_str,  # TODO: Sustitud this for cordinates.
            position=position_obj,
        )
        # IF THE USER ALREADY EXIST DON'T SAVE A NEW RECORD.
        if not create:
            resp = {
                "status": 0,
                "reason": PersonalApi.REASON1[2],
            }
            return Response(resp)
        else:
            new_employee.save()
        # CREATE/GET SKILLS
        skills_list = []
        for skill in skills:
            skilObj, created = Skill.objects.get_or_create(
                name=skill
            )
            if created:
                skilObj.save()
                skills_list.append(skilObj)
         # ADDING ALL THE SKILLS TO AN EMPLOYEE.
        new_employee.skills.add(*tuple(skills_list))
        # SAVE PATIENT.
        resp = {
            "status": 1,
            "reason": PersonalApi.REASON1[1],
        }
        return Response(resp)
