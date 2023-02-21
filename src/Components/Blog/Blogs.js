import React from 'react';
import '../Herosection/theme.min.css';
import '../Herosection/tineyslider.css';
import img from '../../Assets/Blogs/01.jpg';
import img2 from '../../Assets/Blogs/11.jpg';

import img3 from '../../Assets/Blogs/03.jpg';
import { Typography } from '@material-ui/core';

export default function Blogs() {
	return (
		<div>
			<section className='container pb-4 pb-md-5 mb-2 mb-md-3'>
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
					<span style={{ color: '#000000' }}> Latest </span>
					News
				</Typography>
				<div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'></div>
				<div className='row'>
					<div className='col-md-4 mb-4'>
						<article className='card card-hover border-0 shadow-sm h-100'>
							<a
								className='card-img-top overflow-hidden position-relative'
								href='job-board-blog-single.html'>
								<span className='badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3'>
									New
								</span>
								<img className='d-block' src={img} alt='post' />
							</a>
							<div className='card-body pb-3'>
								<a
									className='fs-xs text-uppercase text-decoration-none'
									href='/'>
									Guides
								</a>
								<h3 className='fs-base pt-1 mb-2'>
									<a className='nav-link' href='job-board-blog-single.html'>
										How to Hire World-Class Engineers
									</a>
								</h3>
								<p className='fs-sm text-muted m-0'>
									Nunc, hac augue ante in facilisi id. Consectetur egestas orci,
									arcu ac tellus. Morbi orci, nunc dictum...
								</p>
							</div>
							<a
								className='card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1'
								href='#'>
								<img
									className='rounded-circle'
									src={img2}
									width={44}
									alt='Avatar'
								/>
								<div className='ps-2'>
									<h6 className='fs-sm text-nav lh-base mb-1'>Bessie Cooper</h6>
									<div className='d-flex text-body fs-xs'>
										<span className='me-2 pe-1'>
											<i className='fi-calendar-alt opacity-70 me-1' />
											May 23
										</span>
										<span>
											<i className='fi-chat-circle opacity-70 me-1' />4 comments
										</span>
									</div>
								</div>
							</a>
						</article>
					</div>
					<div className='col-md-4 mb-4'>
						<article className='card card-hover border-0 shadow-sm h-100'>
							<a
								className='card-img-top overflow-hidden position-relative'
								href='job-board-blog-single.html'>
								<span className='badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3'>
									New
								</span>
								<img className='d-block' src={img} alt='post' />
							</a>
							<div className='card-body pb-3'>
								<a
									className='fs-xs text-uppercase text-decoration-none'
									href='/'>
									Guides
								</a>
								<h3 className='fs-base pt-1 mb-2'>
									<a className='nav-link' href='job-board-blog-single.html'>
										How to Hire World-Class Engineers
									</a>
								</h3>
								<p className='fs-sm text-muted m-0'>
									Nunc, hac augue ante in facilisi id. Consectetur egestas orci,
									arcu ac tellus. Morbi orci, nunc dictum...
								</p>
							</div>
							<a
								className='card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1'
								href='#'>
								<img
									className='rounded-circle'
									src={img2}
									width={44}
									alt='Avatar'
								/>
								<div className='ps-2'>
									<h6 className='fs-sm text-nav lh-base mb-1'>Bessie Cooper</h6>
									<div className='d-flex text-body fs-xs'>
										<span className='me-2 pe-1'>
											<i className='fi-calendar-alt opacity-70 me-1' />
											May 23
										</span>
										<span>
											<i className='fi-chat-circle opacity-70 me-1' />4 comments
										</span>
									</div>
								</div>
							</a>
						</article>
					</div>
					<div className='col-md-4 mb-4'>
						<article className='card card-hover border-0 shadow-sm h-100'>
							<a
								className='card-img-top overflow-hidden position-relative'
								href='job-board-blog-single.html'>
								<span className='badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3'>
									New
								</span>
								<img className='d-block' src={img} alt='post' />
							</a>
							<div className='card-body pb-3'>
								<a
									className='fs-xs text-uppercase text-decoration-none'
									href='/'>
									Guides
								</a>
								<h3 className='fs-base pt-1 mb-2'>
									<a className='nav-link' href='job-board-blog-single.html'>
										How to Hire World-Class Engineers
									</a>
								</h3>
								<p className='fs-sm text-muted m-0'>
									Nunc, hac augue ante in facilisi id. Consectetur egestas orci,
									arcu ac tellus. Morbi orci, nunc dictum...
								</p>
							</div>
							<a
								className='card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1'
								href='/'>
								<img
									className='rounded-circle'
									src={img2}
									width={44}
									alt='Avatar'
								/>
								<div className='ps-2'>
									<h6 className='fs-sm text-nav lh-base mb-1'>Bessie Cooper</h6>
									<div className='d-flex text-body fs-xs'>
										<span className='me-2 pe-1'>
											<i className='fi-calendar-alt opacity-70 me-1' />
											May 23
										</span>
										<span>
											<i className='fi-chat-circle opacity-70 me-1' />4 comments
										</span>
									</div>
								</div>
							</a>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
}