import './productlist.css'
    import { cartAction } from '../../Reduxstore/addcart.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';  

const Productlist = () => {
    const  [add , setAdd]=useState(false)
    const [item , setItem] = useState([])
    
      const fetchItems = async () => {
       
        try {
          const response = await fetch(
            'https://walmart-demo-69821-default-rtdb.firebaseio.com/product.json'
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
            console.log(data)
          const addItem = [];
    
          
          for (const taskKey in data) {
            addItem.push({ id: data[taskKey].id, name: data[taskKey].name, description:data[taskKey].description, price: data[taskKey].price, img:data[taskKey].img});
          }
    
         return setItem(addItem);
        } catch (err) {
          console.log(err)
        }
      };
    
      useEffect(()=>{
        fetchItems()
    },[]);
    
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.cart.totalQuantity)
    const cartItems = useSelector(state=> state.cart.items)

    const addcart=(data)=>{
        const { name, quantity, total, price , id, img} = data;
      dispatch(cartAction.addItemToCart({title:name, quantity, total, price , id, img}))

    };
    const removecart=(data)=>{
        const { name, quantity, total, price , id, img} = data;
      dispatch(cartAction.removeItemFromCart({title:name, quantity, total, price , id, img }))
      if(counter===0){
        setAdd(false)
    }
    }
    const cartHandler=(data)=>{
        console.log(data)
        setAdd(true)
        addcart(data)
       
    }

    return <>
        <div className='product'>

            {item.map(item => {
                const quantity = cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;
                return (<div className='list' style={{ color: 'black' }}>
                    <img  className='productimg'  src={item.img} />
                   { !add ?<button className='add' onClick={() => cartHandler(item)}> +Add</button> : <div className='btn'><button className='btncart' onClick={() => addcart(item)}>+</button><span style={{color: 'white'}}>{quantity}</span>
          <button className='btncart' onClick={() => removecart(item)}>-</button></div>}

                    <p className='price'>Now $ {item.price}</p>

                    <div className='description'>{item.description} </div>
                    <p style={{
                        color: '#1271dc'
                    }}>save with w+</p>
                    <div className='shipping'>1-day shipping</div>
                    <button 
                    className='best'>best seller</button>
                </div>
                )
            })}


        </div>
    </>
}
export default Productlist;