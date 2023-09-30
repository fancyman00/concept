import { basketItem } from "./types";

export const saveBasket = (products: basketItem[]) => {
  localStorage.setItem('Basket', JSON.stringify(products))
}
export const loadBasket = () => {
  try {
    const serialisedState = localStorage.getItem("Basket");
    if (serialisedState === null) return [];
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}