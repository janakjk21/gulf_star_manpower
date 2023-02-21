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
			<div
				className='row  gallery'
				data-video='true'
				style={{
					paddingLeft: '10PX',
					paddingRight: '10px',
				}}>
				{/* Item */}
				<div className='col-xl-4 col-sm-6'>
					<div
						className='card card-hover border-0 shadow-sm h-100'
						style={{ backgroundColor: '#ffffff' }}>
						<div className=' card-body'>
							<p>
								"I have worked with Gulf Star Overseas Pvt. Ltd. for several
								years, and I can confidently say that they are one of the most
								reliable and trustworthy recruitment agencies I have ever worked
								with. The quality of candidates they provide is exceptional, and
								their staff is professional, knowledgeable, and always willing
								to go the extra mile to ensure that our needs are met. I highly
								recommend Gulf Star Overseas Pvt. Ltd. to anyone looking for
								high-quality recruitment services."
							</p>
							<footer className='d-flex justify-content-between'>
								<div className='pe-3'>
									<h6 className='mb-0'>John Smith, HR Manager</h6>
									<div className='text-muted fw-normal fs-sm mb-3'>
										Arab home Group Agent
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
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-sm-6'>
					<div
						className='card card-hover border-0 shadow-sm h-100'
						style={{ backgroundColor: '#ffffff' }}>
						<div className=' card-body'>
							<p>
								I had the pleasure of working with Gulf Star Overseas Pvt. Ltd.
								to find a suitable candidate for a high-level position in our
								organization. The team at Gulf Star Overseas Pvt. Ltd. was
								professional, responsive, and efficient throughout the entire
								process. They took the time to understand our unique
								requirements and provided us with a pool of qualified candidates
								to choose from. I was impressed with the level of service and
								the quality of the candidates, and I would not hesitate to work
								with them again in the future.
							</p>
							<footer className='d-flex justify-content-between'>
								<div className='pe-3'>
									<h6 className='mb-0'> Arabin Gulf CONSTRUCTION</h6>
									{/* <div className='text-muted fw-normal fs-sm mb-3'>
										Arabin_gulf CONSTRUCTION
									</div> */}
									<a
										href='/'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<FaFacebook></FaFacebook>
									</a>
									<a
										href='/'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<ImTwitter />
									</a>
									<a
										href='/'
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
								</div>
							</footer>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-sm-6'>
					<div className='card card-hover border-0 shadow-sm h-100'>
						<div className=' card-body'>
							<p>
								I am extremely impressed with the level of service I received
								from Gulf Star Overseas Pvt. Ltd. I was looking for a job in the
								Gulf countries, and they were able to find me a position that
								perfectly matched my skills and experience. The staff at Gulf
								Star Overseas Pvt. Ltd. was friendly, helpful, and professional,
								and they made the entire process of finding a job abroad much
								less daunting. I am grateful to them for their assistance, and I
								would highly recommend Gulf Star Overseas Pvt. Ltd. to anyone
								looking for a reliable and efficient recruitment agency
							</p>
							<footer className='d-flex justify-content-between'>
								<div className='pe-3'>
									<h6 className='mb-0'> Rajendra Thapa</h6>
									<div className='text-muted fw-normal fs-sm mb-3'>
										Job Seeker
									</div>
									<a
										href='/'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<FaFacebook></FaFacebook>
									</a>
									<a
										href='/'
										className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2'>
										<ImTwitter />
									</a>
									<a
										href='/'
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
						</div>
					</div>
				</div>

				{/* Add as many columns with gallery item inside as you need */}
			</div>
		</div>
	);
}
