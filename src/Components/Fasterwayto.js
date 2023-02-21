import React from 'react';
import './Fasterwatyto.css';
import conferance from '../Assets/IMG-0249.jpg';
import img from '../Assets/IMG-0249.jpg';
import { Typography } from '@material-ui/core';
export default function Fasterwayto() {
	return (
		<div>
			<section className='features-section style-01 margin-top-110 home-two'>
				<div className='container custom-container-01'>
					<div className='row align-items-center row-reverse'>
						<div className='col-lg-6'>
							<div className='thumbnail'>
								<img src={conferance} alt='' />
							</div>
						</div>
						<div className='col-lg-5 offset-lg-1'>
							<div className='theme-section-title'>
								{/* <Typography
									style={{
										textAlign: 'center',
										fontSize: '55px',
										fontWeight: '900',
										fontFamily: 'Roboto, sans-serif',
										color: '#0B0861',
										marginBottom: '30px',
									}}
									data-aos='fade-up'>
									{' '}
									<span style={{ color: '#000000' }}> Top </span>
									Destinations
								</Typography> */}
								{/* <span className='subtitle'>ADVANTAGE FEATURES</span> */}
								<h4 className='title'>
									Message from Board
									<br /> of Directors
									<svg
										className='title-shape style-03 active'
										width='255'
										height='15'
										viewBox='0 0 355 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											className='path'
											d='M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362'
											stroke='#000000'
											stroke-width='3'
											stroke-linecap='square'></path>
										<path
											className='path'
											d='M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13'
											stroke='#000000'
											stroke-width='3'
											stroke-linecap='square'></path>
										<path
											className='path'
											d='M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985'
											stroke='#FFC44E'
											stroke-width='3'
											stroke-linecap='square'></path>
									</svg>
								</h4>
								<p>
									We are proud to present Gulf Star Overseas Pvt. Ltd., a
									leading manpower agency in Nepal. Our company has established
									itself as one of the most reputable and successful recruitment
									agencies in the country. Our commitment to providing
									high-quality manpower, who are skilled, dedicated, and
									experienced, has earned us the trust and respect of our
									clients.
								</p>
								<p>
									As a company, we are dedicated to ensuring that each and every
									placement is a successful one, and we take great pride in the
									quality of our service. We believe that our business
									relationship with our clients is a long-term one, and we are
									committed to providing the best possible service, now and in
									the future. Thank you for considering Gulf Star Overseas Pvt.
									Ltd. for your manpower needs. We look forward to working with
									you.
								</p>
							</div>
							<div className='btn-wrap margin-top-60'>
								<a href='/aboutus' className='btn-common fill-btn'>
									More About us
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
