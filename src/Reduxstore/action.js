import { cartAction } from '../components/store/addcart'


export const getfetchdata = () => {
    return async (dispatch) => {
        const fetchdata = async () => {
            const response = await fetch('https://react-b8fe7-default-rtdb.firebaseio.com/product.json');

            if (!response.ok) {
                throw new Error('fetch data is not get')
            }
            const data = await response.json()
console.log(data)
            return data;
        }
        try {
            const cartdata = await fetchdata()
            dispatch(cartAction.replaceCart({
                items: cartdata.items || [],
                totalQuantity: cartdata.totalQuantity,
            }
            ))
        } catch (err) {
            dispatch(
                cartAction.shownotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            )
        }
    }
};