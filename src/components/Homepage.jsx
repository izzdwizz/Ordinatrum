import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, Blog } from '../components';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptosQuery(10);
	const globalStats = data?.data?.stats;
	console.log(data);
	console.log(isFetching);

	if (isFetching) return <Loader />;
	return (
		<Title level={2} className='heading'>
			<Row>
				<Col span={12}>
					<Statistic title='Total Cryptocurrencies' value={globalStats.total} />
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Exchanges'
						value={millify(globalStats.totalExchanges)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Market Cap'
						value={millify(globalStats.totalMarketCap)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total 24h volume'
						value={millify(globalStats.total24hVolume)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Markets'
						value={millify(globalStats.totalMarkets)}
					/>
				</Col>
			</Row>

			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Top 10 Cryptocurrencies
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/cryptocurrencies'>Show more</Link>
				</Title>
			</div>
			<Cryptocurrencies simplified />
			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Latest News in the Crypto World
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/blog'>Show more</Link>
				</Title>
			</div>
			<Blog simplified />
		</Title>
	);
};

export default Homepage;
