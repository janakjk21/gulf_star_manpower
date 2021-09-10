import React from "react";
import { makeStyles } from "@material-ui/core";
import img from "../Assets/1-min-min_2.JPG";
import Them from "./Them";
const useStyles = makeStyles((theme) => ({
	parallaxContainer: {
		position: "relative",
		overflow: "hidden",

		marginTop: "90px",
	},
	parallax: {
		position: "absolute",
		top: "50",
		height: "120%",
		width: "100%",

		backgroundImage: `url(${img})`,
		backgroundSize: "cover",
	},
	container1: {
		width: "90%",

		position: "relative",
		top: "-80px",

		backgroundColor: "#fbfbfd",
		margin: "0 auto",
		borderRadius: "10px",
		padding: "50px",
		boxShadow:
			"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
	},

	typography1: {
		fontSize: "1.5em",
	},
	[theme.breakpoints.down("sm")]: {
		container1: {
			width: "90%",

			position: "relative",
			top: "-220px",

			backgroundColor: "#F8FBFE",
			margin: "0 auto",

			padding: "0px",
		},
		typography1: {
			fontSize: "0.8em",
			padding: "5px",
			textAlign: "center",
		},
	},
}));
export default function AboutPage() {
	const classes = useStyles();

	return (
		<div>
			<Them title='Gulf Star' title1='OverSeas'></Them>
			<div className={classes.parallaxContainer}>
				<div className={classes.parallax} speed='1.5'></div>
			</div>

			<div className={classes.container1}>
				<p className={classes.typography1}>
					Gulf star overseas Pvt. Ltd a truly reliable human resource
					consultancy, has been committed to providing with an unrevealed level
					of service to both clients and the candidates. We are registered under
					the Department of Labor, Government of Nepal (License Number
					1011/068/069).
				</p>
				<p className={classes.typography1}>
					However, the Agency is newly established, we have been reinforced by
					long experience as employee from analysis and all over the gulf
					countries UAE, KSA, Qatar, Kuwait, Bahrain as well as Malaysia. After
					having an experience from abroad we have been supplying manpower for a
					long period for all over the gulf countries, Malaysia and other
					countries. We are always dedicated to successful recruitment. At Gulf
					star overseas Pvt. Ltd. we consistently hit the mark in our recruiting
					efforts because we dedicate the resources to understand and appreciate
					candidate and client requirements as well as those needed to recruit
					and source qualified candidates. We also validate every candidate and
					every requirement through a rigorous documentation process which
					ensures that we only work with quality requirements and quality
					candidates ensuring that all parties involved in the process are
					working towards the same conclusion. Our staffs are committed to
					providing a comprehensive, effective and personal recruitment service
					and are able to cope with every recruitment needed. They are carefully
					trained to efficiently handle all aspects of manpower mobilization,
					screening and documentation(admin).
				</p>
				<p className={classes.typography1}>
					Since we believe in competency blended with quality, today a huge
					number of people are getting attached to our organization for the
					prompt and quick service. We try our very best to provide candidates
					with the most suitable position in their respective fields.
				</p>
				<p className={classes.typography1}>
					Whether we are conducting national or international affairs, we always
					maintain the same regard for confidentiality and quality of service,
					and our goal to exceed your expectations – the first time, every time.
				</p>
			</div>
		</div>
	);
}
