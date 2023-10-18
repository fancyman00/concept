import OrderList from '../../../features/order-list';
import { useSelector } from 'react-redux';
import { BasketItem } from '../../../entities/basket/ui/basket-item';
import Typography from '../../../shared/ui/typography';
import { Content, ErrorBoundary, Ref, Style, Title } from "../style";
import { basketItem } from '../../../entities/basket/model/types';
import { useActions } from '../../../shared/model';
import { basketSlice } from '../../../entities/basket/model/slice.ts';
import { OrderForm } from "../../../features/order-form/ui";
import { sendOrder } from "../api";
import {myCartChooseProduct, myCartSmallText} from "../../../shared/const/typography.ts";


export const Order = () => {
    const products = useSelector((state: RootState) => state.basket.products);
    const { addProduct, removeProduct, clearProduct } = useActions(basketSlice.actions);

    const submitHandle = (d: any) => {
        const data = {...d, products}
        sendOrder(data)
    }

    return (
        <Style>
            <Title>
                <Typography size={'xl'} text={'Предзаказ'} />
            </Title>
            {products.length > 0 ? (
                <Content>
                    <OrderList
                        items={products}
                        renderItem={(item: basketItem) => (
                            <BasketItem
                                name={item.productId}
                                count={item.productCount}
                                add={() => addProduct(item.productId)}
                                del={() => clearProduct(item.productId)}
                                remove={() => removeProduct(item.productId)}
                            />
                        )}
                    />
                <OrderForm onSubmit={submitHandle}/>
                  <Typography size={'s'} text={myCartSmallText}/>
                </Content>
            ) : (
                <Content>
                    <ErrorBoundary>
                        <Typography
                            size={'l'}
                            text={myCartChooseProduct}
                        />
                        <Ref to={'/products'}>
                            <Typography size={'m'} text={'Оборудование'} color={'#00aaff'} />
                        </Ref>
                    </ErrorBoundary>
                </Content>
            )}
        </Style>
    );
};
