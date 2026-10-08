from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from schemas.user_signup_schema import UserSignup
from database.db import get_db
signup_router = APIRouter()

@signup_router.post("/signup")
def signupUser(user:UserSignup,db:Session =Depends(get_db)):
    name =user.name
    print(name)
    return {"message": "signup router"}