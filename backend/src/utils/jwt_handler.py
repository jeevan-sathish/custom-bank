import os
import jwt
from dotenv import load_dotenv
from datetime import datetime,timedelta,timezone


secret_key =os.getenv("SECRET_KEY")
algorithm="HS256"
access_token_expire_min = 30
refresh_token_exprie_day=7

load_dotenv()
def generate_access_token(user_id:int):
   
    expire = datetime.now(timezone.utc) + timedelta(minutes=access_token_expire_min)
    payload ={
        "sub":str(user_id),
        "type":"access",
        "exp":expire
    }

    access_token =jwt.encode(
        payload,
        secret_key,
        algorithm=algorithm
    )
    return access_token



def generate_refresh_token(user_id:int):
    expire = datetime.now(timezone.utc) + timedelta(days=refresh_token_exprie_day)
    payload ={
            "sub":str(user_id),
            "type":"refresh",
            "exp":expire
        }
    
    refresh_token =jwt.encode(
            payload,
            secret_key,
            algorithm=algorithm
        )
    return refresh_token
    
    