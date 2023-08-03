import React from 'react';
import Iframe from 'react-iframe';

const IframeWrapper = () => {
	return (
		<Iframe
			url='https://maps.google.com/maps?q=gulfstar%20overseas&t=&z=13&ie=UTF8&iwloc=&output=embed'
			width='100%'
			height='200px'
			id='gmap_canvas'
			className='myclassNamename'
			display='initial'
			position='relative'
		/>
	);
};

export default IframeWrapper;
