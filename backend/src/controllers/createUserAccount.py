from models.users import Users

def create_user_acc(user,db):
     
    new_user =Users(
        name=user.name,
        email=user.email,
        password=user.password,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    print("user added succesfully")

    print(user.name)
    return user.name