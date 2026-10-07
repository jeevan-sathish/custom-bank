from fastapi import FastAPI

app = FastAPI()

@app.get("/:id")
def demo(id:int):
    return f"hello from fastapi {id}"