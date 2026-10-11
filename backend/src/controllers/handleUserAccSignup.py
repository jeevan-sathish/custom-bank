from models.users import Users
from fastapi import HTTPException

def create_user_signup(user,db):

    existing_user =db.query(Users).filter(Users.email ==user.email).first();
    if existing_user:
        print("user exist")
        raise HTTPException(
            status_code=200,
            detail="User already exits"
        )
     
    new_user =Users(
        name=user.name,
        email=user.email,
        password=user.password,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    print("user added succesfully")
    raise HTTPException(
        status_code=200,
        detail="account created"
    )

    