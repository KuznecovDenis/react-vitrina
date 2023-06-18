import React from 'react';

const BasketItem = (props) => {
	const { id, name, price, quantity, removeFromBasket, incQuantity, decQuantity } = props;
	return (
		<li className='collection-item '>
			{name} {price} x{' '}
			<i
				onClick={() => decQuantity(id)}
				className='material-icons'
				style={{ transform: 'translateY(0.5rem)', cursor: 'pointer' }}>
				chevron_left
			</i>
			{quantity}
			<i
				onClick={() => incQuantity(id)}
				className='material-icons'
				style={{ transform: 'translateY(0.5rem)', cursor: 'pointer' }}>
				chevron_right
			</i>{' '}
			= {price * quantity}
			<span className='secondary-content' onClick={() => removeFromBasket(id)}>
				<i className='material-icons basket-delete'>close</i>
			</span>
		</li>
	);
};

export default BasketItem;
