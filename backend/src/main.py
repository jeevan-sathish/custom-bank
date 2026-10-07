from fastapi import FastAPI, Depends
from sqlalchemy.orm import  Session
from fastapi.middleware.cors import CORSMiddleware
# from controllers.userAccNoGenerator import generateAccNumber
from database.db import engine,Base,get_db
from models.users import Users

app =FastAPI()
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/user')
def addUser(db:Session =Depends(get_db)):
    new_user=Users(
        name="jeevan",
        email="jeevan@gmail.com",
        password="11233454"
        )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message":"User created",  
    }
    




   
