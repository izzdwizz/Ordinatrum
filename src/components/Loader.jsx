import React from 'react';
import { Spin } from 'antd';
const Loader = () => {
	return (
		<div className='loader'>
			<Spin colorPrimary='rgba(6 41 0)' />
		</div>
	);
};

export default Loader;
