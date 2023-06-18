import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setIsBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	const addToBasket = (item) => {
		const itemIndex = order.findIndex((el) => el.id === item.id);

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((el, index) => {
				if (index === itemIndex) {
					return {
						...el,
						quantity: el.quantity + 1,
					};
				} else {
					return el;
				}
			});

			setOrder(newOrder);
		}

		setAlertName(item.name);
	};

	const incQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.id === itemId) {
				const newQuantity = el.quantity + 1;
				return {
					...el,
					quantity: newQuantity,
				};
			} else {
				return el;
			}
		});

		setOrder(newOrder);
	};

	const decQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.id === itemId) {
				const newQuantity = el.quantity - 1;
				return {
					...el,
					quantity: el.quantity <= 1 ? 1 : newQuantity,
				};
			} else {
				return el;
			}
		});

		setOrder(newOrder);
	};

	const handleBasketShow = () => {
		setIsBasketShow(!isBasketShow);
	};

	const removeFromBasket = (id) => {
		const filterOrder = order.filter((item) => item.id !== id);
		setOrder(filterOrder);
	};

	useEffect(() => {
		fetch(API_URL, { headers: { Authorization: API_KEY } })
			.then((res) => res.json())
			.then((data) => {
				data.featured && setGoods(data.featured);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	const closeAlert = () => {
		setAlertName('');
	};

	return (
		<main className='container content'>
			<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
			{loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
			{isBasketShow && (
				<BasketList
					order={order}
					handleBasketShow={handleBasketShow}
					removeFromBasket={removeFromBasket}
					incQuantity={incQuantity}
					decQuantity={decQuantity}
				/>
			)}
			{alertName && <Alert closeAlert={closeAlert} name={alertName} />}
		</main>
	);
};

export default Shop;
