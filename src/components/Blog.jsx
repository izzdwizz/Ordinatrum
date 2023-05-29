import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNews';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const Blog = ({ simplified }) => {
	const [newsCategory, setnewsCategory] = useState('Cryptocurrency');
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	const { data } = useGetCryptosQuery(30);

	const demoImage =
		'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

	if (!cryptoNews?.value) return <Loader />;

	return (
		<>
			<Row gutter={[24, 24]}>
				{!simplified && (
					<Col span={24}>
						<Select
							showSearch
							className='select-news'
							placeholder='Select A Crypto'
							optionFilterProp='children'
							onChange={(value) => setnewsCategory(value)}
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
						>
							<Option value='Cryptocurrency'>Cryptocurrency</Option>
							{data?.data?.coins.map((coins, i) => (
								<Option value={coins.name} key={i}>
									{coins.name}
								</Option>
							))}
						</Select>
					</Col>
				)}
				{cryptoNews.value.map((news, i) => (
					<Col xs={24} sm={12} lg={8} key={i}>
						<Card hoverable className='news-card'>
							<a href={news.url} target='_blank' rel='noreferrer'>
								<div className='news-image-container'>
									<Title className='news-title' level={4}>
										{news.name}
									</Title>
									<img
										style={{ maxWidth: '200px', maxHeight: '100px' }}
										src={news?.image?.thumbnail?.contentUrl || demoImage}
										alt='new'
									/>
								</div>
								<p>
									{news.description > 100
										? `${news.description.substring(0, 100)}...}`
										: news.description}
								</p>

								<div className='provider-container'>
									<div>
										<Avatar
											src={news?.image?.thumbnail?.contentUrl || demoImage}
											alt='news'
										/>
										<Text className='provider-name'>
											{news.provider[0]?.name}
										</Text>
									</div>

									<Text>
										{moment(news.dataPublished).startOf('ss').fromNow()}
									</Text>
								</div>
							</a>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Blog;
