from models.users import Users
from fastapi import HTTPException
from utils.jwt_handler import generate_access_token , generate_refresh_token

def create_user_signup(user,db):

    existing_user =db.query(Users).filter(Users.email ==user.email).first();
    if existing_user:
        raise HTTPException(
            status_code=409,
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
    
    

    