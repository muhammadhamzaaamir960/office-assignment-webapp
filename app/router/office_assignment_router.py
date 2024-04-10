from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..entity.models import OfficeAssignment
from ..schema.office_assignment_schema import OfficeAssignmentCreate, OfficeAssignmentRead
from ..dependencies import get_db

router = APIRouter()

@router.post("/office-assignments/", response_model=OfficeAssignmentRead, status_code=status.HTTP_201_CREATED)
def create_office_assignment(assignment: OfficeAssignmentCreate, db: Session = Depends(get_db)):
    # Here you should include any business logic to validate the office assignment
    db_assignment = OfficeAssignment(**assignment.dict())
    db.add(db_assignment)
    db.commit()
    db.refresh(db_assignment)
    return db_assignment

@router.get("/office-assignments/", response_model=list[OfficeAssignmentRead])
def list_office_assignments(db: Session = Depends(get_db)):
    return db.query(OfficeAssignment).all()
