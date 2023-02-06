import React, { useEffect, useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './fire';

import Them from './Them';
// import "./jobseeker.scss";
const useStyles = makeStyles((theme) => ({
	Typography: {
		// textAlign: "center",
		fontSize: '30px',
		fontWeight: '900',
		fontFamily: 'Roboto, sans-serif',
		color: '#212529',
		// marginBottom: "30px",
		// margin: "0 190px 0 190px",
	},

	[theme.breakpoints.down('sm')]: {
		Typography: {
			fontSize: '20px',
			margin: '0 0 0 0',
			marginTop: '800px',
		},
	},
}));
export default function Applied() {
	const classes = useStyles();
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
			<Them title='Applied' title1='With us'></Them>
			{applied.length > 0 ? (
				applied.map((item) => {
					return (
						<div class='blog-card'>
							{/* <div class='meta'></div> */}

							<div class='description'>
								<Typography className={classes.Typography}>
									{' '}
									Name:{item.yourName}
								</Typography>
								<h1>Location:{item.Location}</h1>
								<h2>father:{item.father}</h2>

								<h2>Passportno:{item.passsword}</h2>

								<h2>email:{item.email}</h2>
								<h2>Phone:{item.phoneno}</h2>
								<h2>Phone:{item.yourAgent}</h2>

								<p>Details:{item.details}</p>
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
						<div class='blog-card'>
							<div class='description'>
								<Typography className={classes.Typography}>
									{' '}
									Name:{item.name}
								</Typography>

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
