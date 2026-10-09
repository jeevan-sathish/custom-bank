from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from schemas.user_signup_schema import UserSignup
from database.db import get_db
from controllers.createUserAccount import create_user_acc
signup_router = APIRouter()

@signup_router.post("/signup")
def signupUser(user:UserSignup,db:Session =Depends(get_db)):
    
    return create_user_acc(user,db)