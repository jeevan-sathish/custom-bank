def test_signup(client):
    response = client.post("/signup",json={
        "name":"sathish",
        "email":"sathish@gmail.com",
        "password":"sathish1234"
    })

    assert response.status_code == 409
    data =response.json() 
    assert data["detail"] =="User already exits"