import CartItem from '../CartItem/CartItem';

import {Wrapper} from './Cart.styles';

import {CartItemType} from '../../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  clearItem: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart, clearItem}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart Empty</p> : null}
      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearItem={clearItem}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart;