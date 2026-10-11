import secrets
import string

def generateAccNumber():
    userAccNumber = (
        ''.join(secrets.choice(string.ascii_uppercase) for _ in range(2))
        + ''.join(secrets.choice(string.digits) for _ in range(7))
         )
    return userAccNumber
  


