import { Typography } from '@material-ui/core';
import React from 'react';
import spain_img from '../Assets/span.png';
import './style.css';
import './responsive.css';
export default function Coutry() {
	return (
		<div>
			{' '}
			<section className='margin-top-110 section-bottom-space'>
				<div className='destination-section'>
					<div className='plane-wrap'>
						{/* <img src="assets/img/shapes/plane.png" className="shape-02" alt="mountant"> */}
					</div>
					<div className='container custom-container-01'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'>
								<div className='theme-section-title desktop-center text-center'>
									<Typography
										style={{
											textAlign: 'center',
											fontSize: '55px',
											fontWeight: '900',
											fontFamily: 'Roboto, sans-serif',
											color: '#0B0861',
											marginBottom: '10px',
										}}
										data-aos='fade-up'>
										{' '}
										<span style={{ color: '#000000' }}> Top </span>
										Destinations
									</Typography>
									<p>
										We have quality partners in variety of destinations around
										the globe.
									</p>
								</div>
							</div>
						</div>
						<div className='destination-items-wrap' style={{ display: 'flex' }}>
							<div className='destination-single-item'>
								<div className='thumbnail'>
									<img src={spain_img} alt='' />
								</div>
								<h6 className='name'>Canada</h6>
							</div>
							<div className='destination-single-item'>
								<div className='thumbnail'>
									<img src={spain_img} alt='' />{' '}
								</div>
								<h6 className='name'>America</h6>
							</div>
							<div className='destination-single-item'>
								<div className='thumbnail'>
									<img src={spain_img} alt='' />{' '}
								</div>
								<h6 className='name'>London</h6>
							</div>
							<div className='destination-single-item'>
								<div className='thumbnail'>
									<img src={spain_img} alt='' />{' '}
								</div>
								<h6 className='name'>Spain</h6>
							</div>
							<div className='destination-single-item'>
								<div className='thumbnail'>
									<img src={spain_img} alt='' />{' '}
								</div>
								<h6 className='name'>French</h6>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
