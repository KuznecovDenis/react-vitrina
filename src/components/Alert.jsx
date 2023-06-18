import React from 'react';
import { useEffect } from 'react';

const Alert = (props) => {
	const { name = '', closeAlert } = props;

	useEffect(() => {
		const timerId = setTimeout(() => {
			closeAlert();
		}, 1500);

		return () => clearTimeout(timerId);
		// eslint-disable-next-line
	}, [name]);

	return (
		<div id='toast-container'>
			<div className='toast'>{name} added to cart</div>
		</div>
	);
};

export default Alert;
