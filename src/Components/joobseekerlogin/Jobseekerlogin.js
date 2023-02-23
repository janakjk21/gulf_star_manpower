import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../fire';
import Them from '../Them';
import '../Herosection/theme.min.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
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
				class='row g-4 gallery'
				data-video='true'
				style={{ padding: '20px' }}>
				{jobs.length > 0 ? (
					jobs.map((item, id) => {
						return (
							<div class='col-xl-4 col-sm-6' key={item._id}>
								<div className='card bg-secondary card-hover'>
									<div className='card-body'>
										<div className='d-flex justify-content-between align-items-start mb-2'>
											<div className='d-flex align-items-center'>
												{/* <img
													className='me-2'
													src='path-to-image'
													width={24}
													alt='IT Pro TV'
												/> */}
												<span className='fs-sm text-dark opacity-80 px-1'>
													Company: {item.Company}
												</span>
												<span className='badge bg-faded-accent rounded-pill fs-sm ms-2'>
													featured
												</span>
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
										<h3 className='h6 card-title pt-1 mb-3'>{item.Category}</h3>
										<div className='fs-sm'>
											<span className='text-nowrap me-3'>
												<BiLocationPlus></BiLocationPlus>
												{item.Location}
											</span>
											<span className='text-nowrap me-3'>
												<HiOutlineCurrencyRupee className='fi-cash fs-base text-muted me-1'></HiOutlineCurrencyRupee>
												Salary:{item.Salary}
											</span>
										</div>{' '}
										<button className='btn btn-primary btn-lg rounded-pill ms-sm-auto'>
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
					<Loading />
				)}
			</div>
		</div>
	);
}
