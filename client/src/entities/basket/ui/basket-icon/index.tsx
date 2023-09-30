import { Counter, IconItem, Title } from "./style.ts";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

type BasketIconProps = {
    to: string;
    icon: string;
    title: string;
};
export const BasketIcon = (props: BasketIconProps) => {
    const { to, icon, title } = props;
    const [count, setCount] = useState(0)
    const products = useSelector((state: RootState) => state.basket.products);
    useEffect(()=>{
      console.log(products)
      setCount(products.reduce((accumulator, currentValue) => currentValue.productCount + accumulator, 0))
    }, [products])
    return (
        <IconItem href={to}>
            <img src={icon} alt={''} />
            <Title>
              {title}
              <Counter>{count}</Counter>
            </Title>
        </IconItem>
    );
};