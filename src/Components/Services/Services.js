import React from 'react';
import Them from '../Them';
import img2 from '../../Assets/iconsforservices/undraw_educator_re_ju47.svg';
import img1 from '../../Assets/iconsforservices/undraw_interview_re_e5jn.svg';
import img3 from '../../Assets/iconsforservices/undraw_medicine_b-1-ol.svg';
import img4 from '../../Assets/iconsforservices/undraw_engineering_team_a7n2.svg';

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
							title={'Recruitment'}
							text={
								'Being the top employment agency for Nepali professionals, we have a proven track record of placing thousands of applicants in major multinational corporations. From skilled to unskilled and professional roles, our experienced recruiters can assist with all forms of applicant recruiting. Let us assist you in locating the ideal position or applicant.'
							}
							image={img1}
						/>

						<SingleService
							title={'Counseling and Guidance'}
							text={
								'Our primary objective is fair and ethical hiring, and we do this by not only defending our employees against fraud and unethical behavior but also by assisting them in avoiding and combating it. We have had numerous counseling and workshop sessions to support and mentor employees regarding ethical hiring.'
							}
							image={img2}
						/>

						<SingleService
							title={'medical-care'}
							text={
								'Pre-employment checkup includes the basic screening investigations needed to determine the candidate s medical fitness required for employment'
							}
							image={img3}
						/>
						{/* Feature item*/}
						<SingleService
							title={'Pre-departure Orientation'}
							text={
								'We have been giving pre-departure orientation to the employees ahead of their departure and give them a thorough understanding of the working hours, tasks and responsibilities, salary and allowance, country and company overview, departure and arrival process, airport system, and various rules and regulations. Our pre-departure training s primary goal is to provide the employees the tools they need to overcome the cultural, professional, social, and personal problems they will face when they arrive in their destination country.'
							}
							image={img4}
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
					src={image}
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
