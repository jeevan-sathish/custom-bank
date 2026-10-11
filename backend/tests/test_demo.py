def test_cemo_route(client):
    response =client.get('/')
    assert response.status_code == 200
    assert response.json() =={
        "message":"this is fast api server"
    }