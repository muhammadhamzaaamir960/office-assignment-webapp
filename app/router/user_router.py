from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.schema.user import UserCreate, UserRead, UpdatePassword, ChangePassword, UserUpdate
from app.entity.models import User as ORMUser #Update the import statement later pls
from app.utils import hashing, oauth2 #Update the import statement later pls + atually code these modules
from app.config.database import get_db #Update the import statement later pls + atually code these modules
from app.config.oauth2 import create_access_token #Update the import statement later pls + atually code these modules

router = APIRouter(prefix="/api/user", tags=["user"])

@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Check if the username already exists
    db_user = db.query(ORMUser).filter(ORMUser.username == user.username).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    
    hashed_password = hashing.get_password_hash(user.password)
    new_user = ORMUser(
        username=user.username,
        hashed_password=hashed_password,
        first_name=user.first_name,
        last_name=user.last_name,
        role=user.role,
        department_id=user.department_id
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login", response_model=oauth2.Token)
async def login_for_access_token(response: Response, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(ORMUser).filter(ORMUser.username == form_data.username).first()
    if not user or not hashing.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=oauth2.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
    )

    response.set_cookie(key="access_token", value=f"Bearer {access_token}", httponly=True)
    return {"access_token": access_token, "token_type": "bearer"}

# Define other endpoints like get_current_user, reset_password, update_account, etc.

# Remember to add exception handlers, authentication dependencies, and actual hashing functionality in the utility modules
