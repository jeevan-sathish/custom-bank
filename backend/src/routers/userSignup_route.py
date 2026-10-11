from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from schemas.user_signup_schema import UserSignup
from database.db import get_db
from controllers.handleUserAccSignup import create_user_signup
signup_router = APIRouter(prefix="/auth")

@signup_router.post("/signup")
def signupUser(user:UserSignup,db:Session =Depends(get_db)):
    
    return create_user_signup(user,db)