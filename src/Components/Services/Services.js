import React from 'react';
import Them from '../Them';

export default function Services() {
	return (
		<div>
			<Them title='Our ' title1='Services'></Them>

			<section
				className='position-relative bg-white rounded-xxl-4 mb-5 pb-1 py-md-3 zindex-5'
				style={{ marginTop: '-30px' }}>
				<div className='container pt-5 mb-4 mb-md-5'>
					{/* <h2 className='text-center'> Services </h2>
					<p
						className='mb-4 pb-2 mx-auto fs-lg text-center'
						style={{ maxWidth: '616px' }}>
						Travelers across the globe use our platform to discover where to
						stay, what to do and where to eat in any part of the world.
					</p> */}
					{/* Features grid*/}
					<div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center'>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-accent text-accent rounded-circle mb-3'>
										<i className='fi-bed' />
									</div>
									<h3 className='h5 card-title'>Safety is our priority</h3>

									<p className='card-text fs-sm'>
										Vel et aliquet diam vulputate hendrerit lorem eget amet
										adipiscing. At ut ut consectetur in sed.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-warning text-warning rounded-circle mb-3'>
										<i className='fi-cash' />
									</div>
									<h3 className='h5 card-title'>Fair price</h3>
									<p className='card-text fs-sm'>
										Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui.
										Maecenas ultricies laoreet facilisis fusce amet.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-primary text-primary rounded-circle mb-3'>
										<i className='fi-heart' />
									</div>
									<h3 className='h5 card-title'>Empathy</h3>
									<p className='card-text fs-sm'>
										Id velit, dui condimentum dictumst sapien quis a elementum
										dignissim. Dignissim ultrices scelerisque.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-success text-success rounded-circle mb-3'>
										<i className='fi-users' />
									</div>
									<h3 className='h5 card-title'>Results-driven team</h3>
									<p className='card-text fs-sm'>
										Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui.
										Maecenas ultricies laoreet facilisis fusce amet.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-primary text-primary rounded-circle mb-3'>
										<i className='fi-briefcase' />
									</div>
									<h3 className='h5 card-title'>Daily hard work</h3>
									<p className='card-text fs-sm'>
										Elementum quisque cursus sagittis purus mauris. Ultrices ut
										eu egestas at tristique malesuada.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-success text-success rounded-circle mb-3'>
										<i className='fi-chat-left' />
									</div>
									<h3 className='h5 card-title'>Communication</h3>
									<p className='card-text fs-sm'>
										Faucibus sollicitudin id vitae pharetra tristique cursus id.
										Blandit at proin purus cursus id sem.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-info text-info rounded-circle mb-3'>
										<i className='fi-like' />
									</div>
									<h3 className='h5 card-title'>Passion &amp; enthusiasm</h3>
									<p className='card-text fs-sm'>
										Cras aliquam fringilla sollicitudin quis potenti lacinia
										volutpat nisl amet. Felis gravida sed sit nec nulla id
										morbi.
									</p>
								</div>
							</div>
						</div>
						{/* Feature item*/}
						<div className='col'>
							<div className='card border-0 shadow-sm card-hover h-100'>
								<div className='card-body icon-box'>
									<div className='icon-box-media bg-faded-warning text-warning rounded-circle mb-3'>
										<i className='fi-checkbox-checked-alt' />
									</div>
									<h3 className='h5 card-title'>Simple solutions</h3>
									<p className='card-text fs-sm'>
										Porta vulputate commodo ut pulvinar. Fames augue dui
										faucibus porttitor dis duis id faucibus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
