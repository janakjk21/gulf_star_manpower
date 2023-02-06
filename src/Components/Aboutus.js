import React from 'react';
import './Aboutus.css';
import aboutus_img from '../Assets/1-min-min_2.JPG';
import { Typography } from '@material-ui/core';

export default function Aboutus() {
	return (
		<div>
			<section className='about' id='about'>
				<div className='container'>
					<div className='heading text-center'>
						<Typography
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
							<span style={{ color: '#000000' }}> About</span>
							Us
						</Typography>
						<p>
							Gulf star overseas Pvt. Ltd a truly reliable human resource
							consultancy, has been committed to providing with an unrevealed
							level of service to both clients and the candidates. We are
							registered under the Department of Labor, Government of Nepal
							(License Number 1011/068/069).
							<br />.
						</p>
					</div>
					<div className='row'>
						<div className='col-lg-6' data-aos='fade-up' data-aos-delay='300'>
							<img
								src={aboutus_img}
								alt='about'
								className='img-fluid'
								width='100%'></img>
						</div>
						<div className='col-lg-6' data-aos='fade-up' data-aos-delay='300'>
							<h3>why choose us over our competitors? </h3>
							<p>
								GULF STAR was born out of the belief that recruitment could be
								delivered so much better. We have no gimmicks, no fancy strap
								lines and we dont want to be the biggest. We deliver what we
								say, and we seek to be the best in all trades of employment.
							</p>
							<div className='row'>
								<div className='col-md-6'>
									<h4>
										<i className='far fa-star'></i> Quality Candidates
									</h4>
								</div>
								<div className='col-md-6'>
									<h4>
										<i className='far fa-star'></i>
										Good Presentation
									</h4>
								</div>
								<div className='col-md-6'>
									<h4>
										<i className='far fa-star'></i> Low Staff Turnover
									</h4>
								</div>
								<div className='col-md-6'>
									<h4>
										<i className='far fa-star'></i>
										Strong Online Presence
									</h4>
								</div>
								<div className='col-md-6'>
									<h4>
										<i className='far fa-star'></i>10 Years Track Record
									</h4>
								</div>
								<div className='col-md-6'>
									<h4>
										<i className='far fa-star'></i>
										Speed And Flexibility
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
