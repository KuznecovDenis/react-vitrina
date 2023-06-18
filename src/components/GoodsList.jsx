import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
	const { goods = [], addToBasket = Function.prototype } = props;

	if (!goods.length) {
		<h3>Nothing here</h3>;
	}

	return (
		<div className='goods'>
			{goods.map((item) => (
				<GoodsItem {...item} key={item.id} addToBasket={addToBasket} />
			))}
		</div>
	);
};

export default GoodsList;
