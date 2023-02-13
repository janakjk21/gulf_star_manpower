import { Typography } from '@material-ui/core';
import React from 'react';
import './theme.min.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { GrBlockQuote } from 'react-icons/gr';

export default function Testimonial() {
	return (
		<div id='portfolio' style={{ paddingBottom: '50px' }}>
			<Typography
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '900',
					fontFamily: 'Roboto, sans-serif',
					color: '#0B0861',
					marginBottom: '30px',
				}}>
				{' '}
				<span style={{ color: '#000000' }}> Testimonials </span>
				of Clients
			</Typography>
			<div className='row g-5 gallery' data-video='true'>
				{/* Item */}
				<div className='col-xl-4 col-sm-6'>
					{/* Testimonial inside card: Compound */}
					<div
						className='card border-0 shadow-sm'
						style={{ backgroundColor: '#ffffff' }}>
						<blockquote className=' card-body'>
							<h4 style={{ maxWidth: '20rem' }}>
								"I will select the best accommodation for you"
							</h4>
							<p>
								Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc
								id ante adipiscing. Vel metus odio at faucibus ac. Neque id
								placerat et id ut. Scelerisque eu mi ullamcorper sit urna. Est
								volutpat dignissim elementum nec.
							</p>
							<footer className='d-flex justify-content-between'>
								<div className='pe-3'>
									<h6 className='mb-0'>Floyd Miles</h6>
									<div className='text-muted fw-normal fs-sm mb-3'>
										Imperial Property Group Agent
									</div>
									<a
										href='jk'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<FaFacebook></FaFacebook>
									</a>
									<a
										href='jk'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<ImTwitter />
									</a>
									<a
										href='jk'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<FaLinkedin></FaLinkedin>
									</a>
								</div>
								<div>
									<div className='star-rating'>
										<AiFillStar className='star-rating-icon fi-star-filled active'></AiFillStar>
										<AiFillStar className='star-rating-icon fi-star-filled active'></AiFillStar>
										<AiFillStar className='star-rating-icon fi-star-filled active'></AiFillStar>
										<AiFillStar className='star-rating-icon fi-star-filled active'></AiFillStar>

										<AiFillStar className='star-rating-icon fi-star-filled active'></AiFillStar>
									</div>
									<div className='text-muted fs-sm mt-1'>45 reviews</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className='col-xl-4 col-sm-6'>
					{/* Testimonial inside card: Compound */}
					<div className='card border-0 shadow-sm'>
						<blockquote className='blockquote card-body'>
							<h4 style={{ maxWidth: '20rem' }}>
								"I will select the best accommodation for you"
							</h4>
							<p>
								Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc
								id ante adipiscing. Vel metus odio at faucibus ac. Neque id
								placerat et id ut. Scelerisque eu mi ullamcorper sit urna. Est
								volutpat dignissim elementum nec.
							</p>
							<footer className='d-flex justify-content-between'>
								<div className='pe-3'>
									<h6 className='mb-0'>Floyd Miles</h6>
									<div className='text-muted fw-normal fs-sm mb-3'>
										Imperial Property Group Agent
									</div>
									<a
										href='#'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<i className='fi-facebook' />
									</a>
									<a
										href='#'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<i className='fi-twitter' />
									</a>
									<a
										href='#'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<i className='fi-linkedin' />
									</a>
								</div>
								<div>
									<div className='star-rating'>
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
									</div>
									<div className='text-muted fs-sm mt-1'>45 reviews</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className='col-xl-4 col-sm-6'>
					{/* Testimonial inside card: Compound */}
					<div className='card border-0 shadow-sm'>
						<blockquote className='blockquote card-body'>
							<h4 style={{ maxWidth: '20rem' }}>
								"I will select the best accommodation for you"
							</h4>
							<p>
								Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc
								id ante adipiscing. Vel metus odio at faucibus ac. Neque id
								placerat et id ut. Scelerisque eu mi ullamcorper sit urna. Est
								volutpat dignissim elementum nec.
							</p>
							<footer className='d-flex justify-content-between'>
								<div className='pe-3'>
									<h6 className='mb-0'>Floyd Miles</h6>
									<div className='text-muted fw-normal fs-sm mb-3'>
										Imperial Property Group Agent
									</div>
									<a
										href='#'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<i className='fi-facebook' />
									</a>
									<a
										href='#'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<i className='fi-twitter' />
									</a>
									<a
										href='#'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<i className='fi-linkedin' />
									</a>
								</div>
								<div>
									<div className='star-rating'>
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
										<i className='star-rating-icon fi-star-filled active' />
									</div>
									<div className='text-muted fs-sm mt-1'>45 reviews</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
				{/* Add as many columns with gallery item inside as you need */}
			</div>
		</div>
	);
}
