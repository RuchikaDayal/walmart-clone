// import Card from '../UI/Card';

import CartItem from './cartitem';
import { useSelector } from 'react-redux';
import Navbar from './navbar';
import React, { useEffect, useState } from "react";
import style from './cart.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = (props) => {
  const [empty, setEmpty] = useState(true)
  const cartitem = props.items;

  console.log(cartitem, 'cartitem')
  const counter = useSelector(state => state.cart.totalQuantity)
  console.log(counter, 'counter')
  const login = useSelector(state=>  state.auth.login);
  
  // if(counter===0){
  //   setEmpty(true)
  // }
  // useEffect(() => {
  //   if (counter > 0) {
  //     setEmpty(false)
  //   }else{
  //     setEmpty(true)
  //   }
  // }, [counter])

  useEffect(() => {
    if (counter === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    console.log('co',counter)
  }, [counter]);

  return (
   <>

      {empty &&
        <div className={style.cartContainer}>
          <h3 className={style.number}>Cart <span>( 0 items)</span></h3>
          <img className={style.car} src={'https://i.ibb.co/YpkYMWR/Screenshot-20230218-013119.png'}></img>
          {!login ? <p className={style.para}> Sign in to see your saved items.</p>: <p className={style.para}> Time to start shopping!</p> }
          {!login&&<Link to={'/login'}><button className={style.signin}> Sign in</button></Link>}
          <p className={style.paraa}>Time to start shopping!</p>
          <p className={style.para}>Fill it up with savings from these popular departments.
          </p>
          <img className={style.data} src={'https://i.ibb.co/Gp5F6sN/Screenshot-20230218-013405.png'} />
          </div>}
          {/* </div>): (<ul>
        {cartitem.map(item =>{
        return (
          <ul>
        <CartItem
           key={item.id}
          item={{id :item.id,
         title:item.name,
          quantity: item.quantity,
            total: item.totalPrice,
            price: item.price }}
              />
               <CartItem/> 
        
      </ul>)} */}
          {!empty && <CartItem />}
        </>

        )
      };

const mapStateToProps = (state) => {
  return {
        items: state.cart.items,
      totalQuantity: state.cart.totalQuantity,
  };
};

      export default connect(mapStateToProps)(Cart);