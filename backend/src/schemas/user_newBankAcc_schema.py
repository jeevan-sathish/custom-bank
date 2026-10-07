from pydantic import BaseModel

class UserNewBankAcc(BaseModel):
    name:str
    age:str
    gender:str
    city:str
    adress:str
    email:str
    number:str
    status:str

