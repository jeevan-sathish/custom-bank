from fastapi import HTTPException
from models.users import Users
from utils.jwt_handler import generate_access_token,generate_refresh_token
def handle_user_signin(user,db):
    existing_user =db.query(Users).filter(
        Users.email == user.email
    ).first()
    if existing_user:
        print("user account exist")
        current_user = db.query(Users).filter(Users.email == user.email).first()
        if current_user :
                user_id = current_user.id
                user_name =current_user.name
                user_email =current_user.email
                cb_access_token = generate_access_token(user_id)
                cb_refresh_token=generate_refresh_token(user_id)
                return {
                    "id":user_id,
                    "name":user_name,
                    "email":user_email,
                    "cb_access_token":cb_access_token,
                    "cb_refresh_token":cb_refresh_token
                }

    else:
        raise HTTPException(
            status_code=401,
            detail="please signup acc not found"
        )