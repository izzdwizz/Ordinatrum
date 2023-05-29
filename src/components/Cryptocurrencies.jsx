import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Card, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useEffect } from 'react';
import Loader from './Loader';
const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setcryptos] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const filtered = cryptosList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(search)
		);
		setcryptos(filtered);
	}, [cryptosList, search]);

	if (isFetching) return <Loader />;
	console.log(cryptos);
	return (
		<>
			{!simplified && (
				<div className='search-crypto'>
					<Input
						placeholder='Search Currencies'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			)}

			<Row gutter={[32, 32]} className='crypto-card-container'>
				{cryptos?.map((currency) => (
					<Col
						xs={24}
						sm={12}
						lg={6}
						className='crypto-card'
						key={currency.rank}
					>
						<Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={<img className='crypto-image' src={currency.iconUrl} />}
								hoverable
								className='my-hover'
							>
								<p>Price: {millify(currency.price)}</p>
								<p>Market Cap: {millify(currency.marketCap)}</p>
								<p>Daily Change: {millify(currency.change)}</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
