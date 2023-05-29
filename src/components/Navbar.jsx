import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons';
import icon from '../assets/icons8-crypto-trading-options-100.png';

const Navbar = () => {
	const [active, setActive] = useState(true);
	const [size, setSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setSize(window.innerWidth);

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size < 768) {
			setActive(false);
		} else {
			setActive(true);
		}
	}, [size]);
	return (
		<div className='nav-container' style={{ background: 'rgb(6 41 0)' }}>
			<div className='logo-container' style={{ background: 'rgb(6 41 0)' }}>
				<Avatar src={icon} size='large' className='icon-size' />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Ordinatrum</Link>
				</Typography.Title>
				{/* <Button className='menu-control-container' onClick={setActive(!active)}>
					<MenuOutlined />
				</Button> */}
			</div>
			{/* {active && ( */}
			<Menu theme='dark' style={{ background: 'rgb(6 41 0)' }}>
				<Menu.Item icon={<HomeOutlined />} className='menu-items'>
					<Link to='/' className='menu-links'>
						Home
					</Link>
				</Menu.Item>
				<Menu.Item icon={<FundOutlined />} className='menu-items'>
					<Link to='/cryptocurrencies' className='menu-links'>
						Cryptocurrencies
					</Link>
				</Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined />} className='menu-items'>
					<Link to='/exchanges' className='menu-links'>
						Exchanges
					</Link>
				</Menu.Item>
				<Menu.Item icon={<BulbOutlined />} className='menu-items'>
					<Link to='/blog' className='menu-links'>
						Blog
					</Link>
				</Menu.Item>
			</Menu>
			{/* )} */}
		</div>
	);
};

export default Navbar;
