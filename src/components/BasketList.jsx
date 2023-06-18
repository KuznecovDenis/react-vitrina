import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
	const { order = [], handleBasketShow, removeFromBasket, incQuantity, decQuantity } = props;

	const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0);

	return (
		<ul className='collection basket-list'>
			<li className='collection-item active'>Cart</li>
			{order.length ? (
				order.map((item) => (
					<BasketItem
						{...item}
						key={item.id}
						removeFromBasket={removeFromBasket}
						incQuantity={incQuantity}
						decQuantity={decQuantity}
					/>
				))
			) : (
				<li className='collection-item '> Empty cart</li>
			)}
			<li className='collection-item '>
				Total <span className='right'>{totalPrice}</span>
			</li>
			<li className='collection-item'>
				<button className='btn'>sell</button>
			</li>
			<i className='material-icons basket-close' onClick={handleBasketShow}>
				close
			</i>
		</ul>
	);
};

export default BasketList;
