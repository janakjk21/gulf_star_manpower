import React, { useEffect, useState } from 'react';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../fire';
import '../../Herosection/theme.min.css';

export default function Applied() {
	const [message, setmessage] = useState([]);
	const [applied, setapplied] = useState([]);

	const getmessages = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'message'));
		querySnapshot.forEach((doc) => {
			let appObj = { ...doc.data() };
			newarr.push(appObj);
		});
		setmessage(newarr);
	};
	const appliedwithus = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'apllyjobs'));
		querySnapshot.forEach((doc) => {
			let appObj = { ...doc.data() };
			newarr.push(appObj);
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
		});
		setapplied(newarr);
	};
	useEffect(() => {
		getmessages();
		appliedwithus();
	}, []);
	console.log(applied, message);
	return (
		<div>
			{applied.length > 0 ? (
				applied.map((item) => {
					return (
						<div className='card card-horizonta'>
							{/* <div className='meta'></div> */}

							<div
								className='card'
								style={{
									backgroundColor: '#1F1B2D',
									color: '#ffffff',
								}}>
								<div className='card-body'>
									<h1 className='card-title' style={{ color: '#ffffff' }}>
										{' '}
										Name:{item.yourName}
									</h1>

									<h1
										className='card-text fs-sm opacity-70'
										style={{ color: '#ffffff' }}>
										Location:{item.Location}
									</h1>
									<h2
										className='card-text fs-sm opacity-70'
										style={{ color: '#ffffff' }}>
										father:{item.father}
									</h2>

									<h2
										className='card-text fs-sm opacity-70'
										style={{ color: '#ffffff' }}>
										Passportno:{item.passsword}
									</h2>

									<h2
										className='card-text fs-sm opacity-70'
										style={{ color: '#ffffff' }}>
										email:{item.email}
									</h2>
									<h2
										className='card-text fs-sm opacity-70'
										style={{ color: '#ffffff' }}>
										Phone:{item.phoneno}
									</h2>
									<h2
										className='card-text fs-sm opacity-70'
										style={{ color: '#ffffff' }}>
										Phone:{item.yourAgent}
									</h2>

									<p>Details:{item.details}</p>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<h1> no one applied</h1>
			)}
			{message.length > 0 ? (
				message.map((item) => {
					return (
						<div className='blog-card'>
							<div className='description'>
								<h1 className='card-text fs-sm opacity-70'>Name:{item.name}</h1>{' '}
								<h2> Email:{item.email}</h2>
								<h2> subject : {item.subject} </h2>
								<p> message:{item.message} </p>
							</div>
						</div>
					);
				})
			) : (
				<h1> no one contected us</h1>
			)}

			<hr />
		</div>
	);
}
