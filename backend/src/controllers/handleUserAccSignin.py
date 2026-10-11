from fastapi import HTTPException
from models.users import Users
def handle_user_signin(user,db):
    existing_user =db.query(Users).filter(
        Users.email == user.email
    ).first()
    if existing_user:
        print("user account exist")

    else:
        raise HTTPException(
            status_code=401,
            detail="please signup acc not found"
        )