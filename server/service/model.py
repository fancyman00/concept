from __future__ import annotations

from typing import Optional, List

from pydantic import BaseModel


class Message(BaseModel):
    name: str
    phone: str
    email: str
    message: str


class Product(BaseModel):
    productId: str
    productCount: int


class Order(BaseModel):
    name: str
    surname: str
    phone: str
    mail: str
    products: List[Product]
