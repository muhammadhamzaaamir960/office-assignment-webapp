from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..entity.models import Department
from ..schema.department_schema import DepartmentCreate, DepartmentRead
from ..dependencies import get_db

router = APIRouter()

@router.post("/departments/", response_model=DepartmentRead, status_code=status.HTTP_201_CREATED)
def create_department(department: DepartmentCreate, db: Session = Depends(get_db)):
    db_department = db.query(Department).filter(Department.name == department.name).first()
    if db_department:
        raise HTTPException(status_code=400, detail="Department already registered")
    db_department = Department(**department.dict())
    db.add(db_department)
    db.commit()
    db.refresh(db_department)
    return db_department

@router.get("/departments/", response_model=list[DepartmentRead])
def list_departments(db: Session = Depends(get_db)):
    return db.query(Department).all()
