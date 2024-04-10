from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..entity.models import Office
from ..schema.office_schema import OfficeCreate, OfficeRead
from ..dependencies import get_db

router = APIRouter()

@router.post("/offices/", response_model=OfficeRead, status_code=status.HTTP_201_CREATED)
def create_office(office: OfficeCreate, db: Session = Depends(get_db)):
    db_office = db.query(Office).filter(Office.office_number == office.office_number).first()
    if db_office:
        raise HTTPException(status_code=400, detail="Office number already registered")
    db_office = Office(**office.dict())
    db.add(db_office)
    db.commit()
    db.refresh(db_office)
    return db_office

@router.get("/offices/", response_model=list[OfficeRead])
def list_offices(db: Session = Depends(get_db)):
    return db.query(Office).all()
