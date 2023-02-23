import style from './cartitem.module.css';
import { cartAction } from '../../Reduxstore/addcart';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

const CartItem = (props) => {
    console.log(props, 'props')
    const dispatch = useDispatch();
    const counter = useSelector(state => state.cart.totalQuantity)

    const cartItems = useSelector(state => state.cart.items)

    // const cartItems = [
    //     {id: '4', price: '505', quantity: 2, totalPrice: '505505', name: 'afcswdc afcwas', img: 'https://i.ibb.co/Mp5VYML/Screenshot-2023-02-17-at-8-53-06-PM.png'},  {id: '4', price: '505', quantity: 2, totalPrice: '505505', name: 'casdc gsdcsadsc', img: 'https://i.ibb.co/Mp5VYML/Screenshot-2023-02-17-at-8-53-06-PM.png'}]
    // const { quantity, total, price, id } = cartItems[0]

    const addcart = (data) => {
         const { quantity, total, price, id } = data
        dispatch(cartAction.addItemToCart({ quantity, total, price, id }))
    };

    const removecart = (data) => {
         const { quantity, total, price, id } = data
        dispatch(cartAction.removeItemFromCart({ quantity, total, price, id }))
    }

    return (
        <div className={style.body}>
            <p className={style.cartCounter}>
                Cart <span className={style.counter}>({counter} items)</span>
            </p>
            <div className={style.outerCard}>
                <div className={style.cardHeader}>
                    <img className={style.cardHeaderImage} src={'https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg'} alt="logo"></img>
                    <p className={style.cardHeaderTitle}>Free shipping, arrives tomorrow, Feb 18–Thu, Feb 23</p>
                </div>
                <div className={style.cardBody}>
                    <div className={style.cartToggler}>
                        <p>{counter} items</p>
                        <img alt='arrow' src='https://cdn-icons-png.flaticon.com/512/130/130906.png' className={`${style.cardHeaderImage} ${style.arrow}`} />
                    </div>
                    {cartItems.map((item) => (
                        <div className={style.cardItem}>
                            <div className={style.cardItemHeader}>
                                <p style={{ fontSize: '1rem' }}>Arrives tomorrow, Feb 18</p>
                                <p className={style.counter} style={{ fontSize: '0.8rem' }}>1 item</p>
                            </div>
                            <p style={{ fontSize: '0.8rem' }}>Sold and shipped by <span style={{ fontWeight: '500', fontSize: '1rem' }}>Walmart</span></p>
                            <p className={style.bestSeller}>Best Seller</p>
                            <div className={style.itemContent}>
                                <img className={style.itemImage} alt="data" src={item.img}></img>
                                <div className={style.mainContent}>
                                    <p className={style.productName}>{item.name}</p>
                                    <p className={style.counter} style={{ fontSize: '0.8rem', margin: 1.5 }}>${item.price}/ea</p>
                                    <div className={style.fexRow} style={{ marginTop: '5px' }}>
                                        <img src='https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg' className={style.returnIcon} ></img>
                                        <p style={{ fontSize: "0.9rem", marginLeft: "0.3rem" }}>Free 30-day returns</p>
                                    </div>
                                    <div className={style.fexRow} style={{ marginTop: '-9px' }}>
                                        <img src='https://i5.walmartimages.com/dfw/63fd9f59-fc02/1be09571-b0a8-4894-8001-e7a71e306c46/v1/gifting-icon.svg' className={style.returnIcon} ></img>
                                        <p style={{ fontSize: "0.7rem", marginLeft: "0.3rem" }}>Gift Eligible</p>
                                    </div>
                                </div>
                                <div className={style.minus}>
                                    <button  onClick={() => addcart(item)}>+</button>
                                    <span>{item.quantity}</span>

                                    <button  onClick={() => removecart(item)}>-</button>
                                </div>
                                <div className={style.itemImage}>129$</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default CartItem;
