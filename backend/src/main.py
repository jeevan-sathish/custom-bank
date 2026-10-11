from fastapi import FastAPI, Depends
from sqlalchemy.orm import  Session
from fastapi.middleware.cors import CORSMiddleware

from database.db import engine,Base,get_db
from models.users import Users
from routers.userSignup_route import signup_router
from routers.userSignin_route import signin_router

app =FastAPI()
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(signup_router)
app.include_router(signin_router)




   
