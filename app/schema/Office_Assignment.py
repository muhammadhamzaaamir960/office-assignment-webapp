# models/office_assignment.py
from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class OfficeAssignment(Base):
    __tablename__ = 'office_assignments'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    office_id = Column(Integer, ForeignKey('offices.id'), nullable=False)
    assigned_date = Column(DateTime, default=func.now())

    user = relationship('User', back_populates='office_assignments')
    office = relationship('Office', back_populates='office_assignments')
