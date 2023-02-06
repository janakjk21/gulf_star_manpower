import React from 'react';
import quti from '../Assets/m2.jpg';
import './hero.css';
export default function Jk() {
	return (
		<div>
			<div className='overflow-hidden'>
				<div className='container-fluid col-xxl-8'>
					<div className='row flex-lg-nowrap align-items-center g-5'>
						<div className='order-lg-1 w-100'>
							<img
								// style={{
								// 	clipPath: 'polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)',
								// }}
								className='d-block mx-lg-auto img-fluid'
								src={quti}
								alt='Milad Fakurian'
								loading='lazy'
								sizes='(max-width: 1080px) 100vw, 1080px'
								width={2160}
								height={768}
							/>
						</div>
						<div className='col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4'>
							<div className='lc-block mb-4'>
								<div editable='rich'>
									<h1 className='hero__heading'>Gulf Star over seas</h1>
								</div>
							</div>
							<div className='lc-block mb-5'>
								<div editable='rich'>
									<p className='rfs-8'>
										{' '}
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc et metus id ligula malesuada placerat sit amet quis
										enim.
									</p>
								</div>
							</div>
							<div className='lc-block mb-6'>
								{/* <a
									className='btn btn-primary px-4 me-md-2 btn-lg'
									href='#'
									role='button'>
									Get it now
								</a> */}
							</div>
							<div className='lc-block'>
								<div editable='rich'>
									<p className='fw-bold'>
										{' '}
										Business collaboration based on trust:
									</p>
								</div>
							</div>
							<div className='row'>
								<div className='lc-block col-3'>
									<img
										className='img-fluid wp-image-975'
										src='https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/motorola.svg'
										width
										height={300}
										srcSet
										sizes
										alt=''
									/>
								</div>
								<div className='lc-block col-3'>
									<img
										className='img-fluid wp-image-977'
										src='https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/asus.svg'
										width
										height={300}
										srcSet
										sizes
										alt=''
									/>
								</div>
								<div className='lc-block col-3'>
									<img
										className='img-fluid wp-image-974'
										src='https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/sony.svg'
										width
										height={300}
										srcSet
										sizes
										alt=''
									/>
								</div>
								<div className='lc-block col-3'>
									<img
										className='img-fluid wp-image-967'
										src='https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/samsung-282297.svg'
										width
										height={300}
										srcSet
										sizes
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
					{/* /lc-block */}
				</div>
			</div>
		</div>
	);
}
