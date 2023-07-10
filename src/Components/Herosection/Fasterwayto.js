import React from 'react';
import './theme.min.css';
import conferance from '../../Assets/Team/directiors.JPG';

import { Typography } from '@material-ui/core';
import Aos from 'aos';
export default function Fasterwayto() {
	Aos.init();
	return (
		<div>
			<section className='features-section style-01 margin-top-110 home-two'>
				<Typography
					data-aos='zoom-in-up'
					style={{
						textAlign: 'center',
						fontSize: '55px',
						fontWeight: '900',
						fontFamily: 'Roboto, sans-serif',
						color: '#219ebc',
						marginBottom: '30px',
						paddingBottom: '40px',
					}}>
					{' '}
					<span style={{ color: '#000000' }}> Message from </span>
					Directors
				</Typography>
				<div className='container custom-container-01'>
					<div className='row align-items-center row-reverse'>
						<div className='col-lg-6'>
							<div className='thumbnail' data-aos='zoom-in-up'>
								<img
									src={conferance}
									alt='directors of the compony'
									style={{ borderRadius: '10px' }}
								/>
							</div>
						</div>
						<div className='col-lg-5 offset-lg-1' data-aos='zoom-in-up'>
							<div className='theme-section-title'>
								{/* <Typography
									style={{
										textAlign: 'center',
										fontSize: '55px',
										fontWeight: '900',
										fontFamily: 'Roboto, sans-serif',
										color: '#219ebc',
										marginBottom: '30px',
									}}
									data-aos='fade-up'>
									{' '}
									<span style={{ color: '#000000' }}> Top </span>
									Destinations
								</Typography> */}
								{/* <span className='subtitle'>ADVANTAGE FEATURES</span> */}

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
								<a
									href='/aboutus'
									className='btn btn-primary btn-sm rounded-pill ms-2 order-lg-3'>
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
