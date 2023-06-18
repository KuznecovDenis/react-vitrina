import React from 'react';

const GoodsItem = (props) => {
	const { id, name, description, price, full_background, addToBasket } = props;
	return (
		<div className='card' id={id}>
			<div className='card-image'>
				<img src={full_background} alt={name} />
				<a className='btn-floating halfway-fab waves-effect waves-light red' href='/'>
					<i className='material-icons'>add</i>
				</a>
			</div>
			<div className='card-content'>
				<span className='card-title'>{name}</span>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn deep-purple accent-2'
					onClick={() => addToBasket({ id, name, description, price, full_background })}>
					Add cart
				</button>
				<span className='right' style={{ fontSize: '1.8rem' }}>
					{price} ₽
				</span>
			</div>
		</div>
	);
};

export default GoodsItem;
