# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models.base import Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./office-assignment.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Import all the models
from .models.department import Department
from .models.office import Office
from .models.user import User
from .models.office_assignment import OfficeAssignment

# Create the tables
Base.metadata.create_all(bind=engine)
