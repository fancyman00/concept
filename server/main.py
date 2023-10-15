import os

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from service import Email

origins = [
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
buildDir = str(os.path.abspath(os.getcwd()))+"/server/dist"
app.mount("/", StaticFiles(directory=buildDir, html=True), name="static")
uvicorn.run(app, host='0.0.0.0', port=5000, log_level='info', workers=True)
# email = Email(app, "***", "***", "***")
