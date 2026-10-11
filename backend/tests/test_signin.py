def test_signin(client):
    response =client.post("/auth/signin",json={
        "email":"jeevanjeev@gmail.com",
        "password":"jeevanjeev@1234"
    })
    assert response.status_code == 401
    data =response.json()
    assert data["detail"]=="please signup acc not found"