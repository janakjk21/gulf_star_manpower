import React from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";

import Them from "./Them";
import img1 from "../Assets/Apple iPhone 8 Plus 3024x4032_012374 (1).jpg";
import "./jobseeker.scss";
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

	return (
		<div>
			<Them title='Jobs' title1='Available'></Them>

			<div class='blog-card'>
				{/* <div class='meta'></div> */}
				<img src={img1} style={{ height: "500px" }}></img>

				<div class='description'>
					<Typography className={classes.Typography}>
						{" "}
						Company: Janak private
					</Typography>

					<h1>Driver</h1>
					<h2>Duabai</h2>

					<h2>Salary:rs300000</h2>
					<h2>Closing Date :2057/04/05</h2>

					<p>
						It's full time job foor the person who need job of any kind contact
						us for any kind of information
					</p>
					<p class='read-more'>
						<Button variant='outlined' color='secondary'>
							Apply
						</Button>
					</p>
				</div>
			</div>
			<div class='blog-card'>
				{/* <div class='meta'></div> */}

				<div class='description'>
					<Typography className={classes.Typography}>
						{" "}
						Company: Janak private
					</Typography>

					<h1>Driver</h1>
					<h2>Duabai</h2>

					<h2>Salary:rs300000</h2>
					<h2>Closing Date :2057/04/05</h2>

					<p>
						It's full time job foor the person who need job of any kind contact
						us for any kind of information
					</p>
					<p class='read-more'>
						<Button variant='outlined' color='secondary'>
							Apply
						</Button>
					</p>
				</div>
			</div>
		</div>
	);
}
