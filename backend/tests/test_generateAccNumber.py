from src.services.userAccNoGenerator import generateAccNumber
def test_generate_acc_number(client):
    result = generateAccNumber()
    assert result is not None
    assert len(result) == 9
    
