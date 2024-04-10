# models/office.py
from sqlalchemy import Column, Integer, String, ForeignKey, CheckConstraint
from .base import Base

class Office(Base):
    __tablename__ = 'offices'
    
    id = Column(Integer, primary_key=True)
    office_number = Column(String, nullable=False, unique=True)
    capacity = Column(Integer, CheckConstraint('capacity > 0'), nullable=False)
    current_occupancy = Column(Integer, CheckConstraint('current_occupancy <= capacity'), nullable=False, default=0)
    department_id = Column(Integer, ForeignKey('departments.id'))
