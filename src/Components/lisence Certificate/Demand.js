import React from 'react';
import img1 from '../../Assets/officedocuments/iso new.jpg';
import img2 from '../../Assets/officedocuments/jitco.jpg';
import img3 from '../../Assets/officedocuments/Pan.jpg';
import img4 from '../../Assets/officedocuments/componey darta.jpg';
import img5 from '../../Assets/officedocuments/ijajat patra.jpg';
import img6 from '../../Assets/officedocuments/RBA.bmp';
// import img5 from '../../Assets/Demand/page0005.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './documents.css';
import Them from '../Them';

import '../Herosection/jk.css';

export default function Demand() {
	AOS.init();
	return (
		<div
			style={{
				backgroundColor: 'rgb(237,237,237)',
			}}>
			<Them title='Company' title1='Documents'></Them>
			<section className='our-team-area-wrapper section-top-space section-bottom-space'>
				<div className='our-team-inner'>
					<div className='container custom-container-01'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'></div>
						</div>
						<div className='row column-gap-50'>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img1} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img2} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img3} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img4} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img6} title={'licence'}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye image={img5} title={'licence'}></Singleemploye>
							</div>
							{/* <div className='col-md-6 col-lg-4'>
								<Singleemploye image={img2} title={'licence'}></Singleemploye>
							</div> */}
							<div className='col-md-6 col-lg-4'></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
const Singleemploye = ({ image, title }) => {
	return (
		<div className='col' style={{ margin: '4px' }}>
			<div className='card border-0 shadow-sm'>
				<Zoom>
					{' '}
					<img className='card-img-top' src={image} alt='Devon Lane' />
				</Zoom>
				<div className='card-body text-center'>
					<h3 className='h5 card-title mb-2'>{title}</h3>
					{/* <span className='d-inline-block mb-3 fs-sm'>President &amp; CEO</span> */}
					<div className='pt-1'></div>
				</div>
			</div>
		</div>
	);
};
