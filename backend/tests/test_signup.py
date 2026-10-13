def test_signup(client):
    response = client.post("/auth/signup",json={
        "name":"nishanth",
        "email":"nishanth@gmail.com",
        "password":"nishanth1234"
    })

    data =response.json()

    assert data['message']=="account created"
    assert len(data["access_token"]) > 0
    assert len(data["refresh_token"]) >0