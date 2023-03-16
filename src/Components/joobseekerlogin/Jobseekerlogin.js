import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../fire';
import Them from '../Them';
import '../Herosection/theme.min.css';
import { Link } from 'react-router-dom';
import { BiLocationPlus } from 'react-icons/bi';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Jobseekerlogin() {
	const [jobs, setJobs] = useState([]);
	const getjobs = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'createjobs'));
		querySnapshot.forEach((doc) => {
			let appObj = { ...doc.data() };
			newarr.push(appObj);
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
		});
		setJobs(newarr);
	};
	useEffect(() => {
		getjobs();
	}, []);
	// console.log(jobs);
	// console.log(jobs.length);
	return (
		<div>
			<Them title='Jobs' title1='Available'></Them>
			<div
				class='row g-4 gallery bg-secondary'
				data-video='true'
				style={{ padding: '20px' }}>
				{jobs.length > 0 ? (
					jobs.map((item, id) => {
						return (
							<div class='col-xl-4 col-sm-6' key={item._id}>
								<div className='card  card-hover'>
									<div className='card-body'>
										<div className='d-flex justify-content-between align-items-start mb-2'>
											<div className='d-flex align-items-center'>
												<h3 className='h6 card-title pt-1 mb-3'>
													Job Title:
													<span className='fs-md text-dark opacity-100 px-1'>
														{item.jobTitle}
													</span>{' '}
												</h3>
												<h3 className='h6 card-title pt-1 mb-3'>
													<span className='fs-md text-dark opacity-80 px-1'>
														Company: {item.company}
													</span>
												</h3>
											</div>
											<div className='dropdown content-overlay'>
												<button
													type='button'
													className='btn btn-icon btn-light btn-xs rounded-circle shadow-sm'
													id='contextMenu'
													data-bs-toggle='dropdown'
													aria-expanded='false'>
													<BsThreeDotsVertical className='fi-dots-vertical'></BsThreeDotsVertical>
												</button>
											</div>
										</div>
										<span className='fs-md text-info opacity-90 px-1 rounded-pill bg-faded-info badge'>
											Job Category:{item.category}
										</span>
										<span className='text-nowrap me-3 rounded-pill bg-faded-success badge'>
											<BiLocationPlus></BiLocationPlus>Location:
											{item.location}
										</span>
										<div className='fs-sm mt-3'>
											<span className='text-nowrap me-3'>
												<HiOutlineCurrencyRupee className='fi-cash fs-base text-muted me-1'></HiOutlineCurrencyRupee>
												Salary:{item.salary}
											</span>
											<span className='badge bg-faded-accent rounded-pill fs-sm ms-2'>
												closingDate:{item.closingDate}
											</span>
										</div>{' '}
										<button className='btn btn-primary btn-lg rounded-pill ms-sm-auto mt-5'>
											<Link to='/applyjob' style={{ color: 'ButtonFace' }}>
												apply
											</Link>
										</button>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<>
						<h1> No Jobs Available</h1>
					</>
				)}
			</div>
		</div>
	);
}
