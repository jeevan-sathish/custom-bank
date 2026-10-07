from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from schemas.user_login_schema import UserLogin
from database.db import get_db



signin_router =APIRouter()

@signin_router.post('/signin')
def signin_user(user: UserLogin,db:Session=Depends(get_db)):
    return {"message":"Signin route"}