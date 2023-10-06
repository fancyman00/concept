import functools
from fastapi import HTTPException


def error_wrapper(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as error:
            print("Error: " + error)
            return HTTPException(status_code=400, detail=error)
    return wrapper
