# models/department.py
from sqlalchemy import Column, Integer, String, Text
from .base import Base

class Department(Base):
    __tablename__ = 'departments'
    
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False, unique=True)
    description = Column(Text)
