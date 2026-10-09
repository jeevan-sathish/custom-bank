
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_app_starts():
    assert app is not None


def test_openapi_endpoint():
    response = client.get("/openapi.json")

    assert response.status_code == 200

    data = response.json()
    assert "paths" in data