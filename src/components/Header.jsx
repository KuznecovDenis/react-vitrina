import React from 'react';

const Header = () => {
	return (
		<header>
			<nav>
				<div className='nav-wrapper indigo accent-2'>
					<a href='/' className='brand-logo'>
						Shop React
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<a
								href='https://github.com/KuznecovDenis/react-vitrina'
								target='_blank'
								rel='noreferrer'>
								GitHub
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
