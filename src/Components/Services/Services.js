import React from 'react';
import Them from '../Them';
import img1 from '../../Assets/iconsforservices/undraw_aircraft_re_m05i.svg';

export default function Services() {
	return (
		<div>
			<Them title='Our ' title1='Services'></Them>

			<section
				className='position-relative bg-white rounded-xxl-4 mb-5 pb-1 py-md-3 zindex-5'
				style={{ marginTop: '-30px' }}>
				<div className='container pt-5 mb-4 mb-md-5'>
					<div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center'>
						<SingleService
							title={'medical-care'}
							text={
								'Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellusnunc, nulla arcu posuere quis. Velit turpis orci venenatis.'
							}
							image={img1}
						/>

						<SingleService
							title={'medical-care'}
							text={'we do a lot about things and all'}
							image={img1}
						/>

						<SingleService
							title={'medical-care'}
							text={'we do a lot about things and all'}
							image={img1}
						/>
						{/* Feature item*/}
						<SingleService
							title={'medical-care'}
							text={'we do a lot about things and all'}
							image={img1}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

const SingleService = ({ title, text, image }) => {
	return (
		<div className='col'>
			<div className='card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center shadow-sm'>
				<img
					className='d-block mx-auto my-3'
					src={img1}
					width={256}
					alt='Illustration'
				/>
				<div className='card-body'>
					<h2 className='h4 card-title'>{title}</h2>
					<p className='card-text fs-sm'>{text}</p>
				</div>
				<div className='card-footer pt-0 border-0'>
					{/* <a
										className='btn btn-outline-primary stretched-link'
										href='#'>
										Place an ad
									</a> */}
				</div>
			</div>
		</div>
	);
};
