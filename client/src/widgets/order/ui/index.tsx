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
                  <Typography size={'s'} text={'О товаре и продавце\n' +
                    'Нажимая «Оплатить картой», вы соглашаетесь с условиями использования сервиса Яндекс Маркет. С подробными условиями доставки можно ознакомиться на странице о доставке.\n' +
                    'Товары с доставкой партнёра Яндекс Еды купят по вашему поручению в обычном магазине (раздел 5 условий).'}/>
                </Content>
            ) : (
                <Content>
                    <ErrorBoundary>
                        <Typography
                            size={'l'}
                            text={'Выберите оборудование и добавьте его в корзину, чтобы оформить предзаказ'}
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
