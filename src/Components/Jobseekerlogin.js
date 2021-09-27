import React, { useEffect, useState } from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./fire";
import Them from "./Them";
import "./jobseeker.scss";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	Typography: {
		// textAlign: "center",
		fontSize: "30px",
		fontWeight: "900",
		fontFamily: "Roboto, sans-serif",
		color: "#212529",
		// marginBottom: "30px",
		// margin: "0 190px 0 190px",
	},

	[theme.breakpoints.down("sm")]: {
		Typography: {
			fontSize: "20px",
			margin: "0 0 0 0",
			marginTop: "800px",
		},
	},
}));
export default function Jobseekerlogin() {
	const classes = useStyles();

	const [jobs, setJobs] = useState([]);
	const getjobs = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, "createjobs"));
		querySnapshot.forEach((doc) => {
			let currentID = doc.id;
			let appObj = { ...doc.data(), ["id"]: currentID };
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
			{jobs.length > 0 ? (
				jobs.map((item, id) => {
					return (
						<div class='blog-card'>
							{/* <div class='meta'></div> */}
							<div class='description' key={item._id}>
								<Typography className={classes.Typography}>
									{" "}
									Company: {item.Company}
								</Typography>

								<h1>{item.Category}</h1>
								<h2>{item.Location}</h2>

								<h2>Salary:{item.Salary}</h2>
								<h2>Closing Date :{item.ClosingDate}</h2>

								<p>{item.details}</p>
								<p class='read-more'>
									<Button variant='outlined' color='secondary'>
										<Link to='/applyjob'> Apply</Link>
									</Button>
								</p>
							</div>
						</div>
					);
				})
			) : (
				<Typography className={classes.Typography}>No Jobs yet</Typography>
			)}
		</div>
	);
}
