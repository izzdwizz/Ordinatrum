import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
	Navbar,
	Exchanges,
	Homepage,
	Blog,
	Cryptocurrencies,
	CryptoDetails,
} from './components';
import './App.css';
import 'antd/dist/antd';
const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Routes>
							<Route exact path='/' element={<Homepage />}></Route>
							<Route exact path='/exchanges' element={<Exchanges />}></Route>
							<Route
								exact
								path='/cryptocurrencies'
								element={<Cryptocurrencies />}
							></Route>
							<Route
								exact
								path='/crypto/:coinId'
								element={<CryptoDetails />}
							></Route>
							<Route exact path='/blog' element={<Blog />}></Route>
						</Routes>
					</div>
				</Layout>
				<div className='footer' level={5}>
					<Typography.Title style={{ color: 'white', textAlign: 'center' }}>
						Ordinatrum <br></br>
						All rights reserved.
					</Typography.Title>
					<Space>
						<Link
							to='/'
							style={{ color: 'rgb(168 180 139)', fontSize: '0.9rem' }}
						>
							Home
						</Link>
						<Link
							to='/exchanges'
							style={{ color: 'rgb(168 180 139)', fontSize: '0.9rem' }}
							y
						>
							Exchanges
						</Link>
						<Link
							to='/blog'
							style={{ color: 'rgb(168 180 139)', fontSize: '0.9rem' }}
							y
						>
							Blog
						</Link>
					</Space>
				</div>
			</div>{' '}
		</div>
	);
};

export default App;
