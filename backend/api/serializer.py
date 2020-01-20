from rest_framework import serializers
from .models import Position, Skill, Employee, Admin


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = ('name',)


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('name',)


class EmployeesSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True)
    position = PositionSerializer()

    class Meta:
        model = Employee
        fields = ('skills', 'position')
