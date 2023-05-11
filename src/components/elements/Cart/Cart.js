import React from 'react';
import Image from 'next/image';
import styles from './index.module.css'
import { useCart, useCartDispatch } from '@/context/CartContext';

const Cart = () => {
  const carts = useCart();
  const dispatch = useCartDispatch();

  const handleAddToCart = product => {
    dispatch({
      type: 'add',
      payload: product
    })
  }

  const handleDecreaseCart = product => {
    dispatch({
      type: 'decrease',
      payload: product
    })
  }

  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      <div className={styles['cart__cart-list']}>
        {carts.map((cart, index) => {
          return (
            <div key={index} className={styles['cart-item']}>
              <div className={styles['cart-item__image']}>
                <Image 
                  src={cart.img_product}
                  alt={cart.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={styles['cart-item__desc']}>
                <p>{cart.name}</p>
                <p>{cart.price}</p>
              </div>
              <div className={styles['cart-item__action']}>
                <button onClick={() => handleDecreaseCart(cart)}>-</button>
                <p>{cart.quantity}</p>
                <button onClick={() => handleAddToCart(cart)}>+</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart;