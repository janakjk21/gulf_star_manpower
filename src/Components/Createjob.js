import React, { useState } from "react";
import "./createjob.css";
import { makeStyles, Typography } from "@material-ui/core";
import Them from "./Them";
import { db } from "./fire";
import { collection, addDoc } from "firebase/firestore";
const useStyles = makeStyles((theme) => ({
	Typography: {
		textAlign: "center",
		fontSize: "55px",
		fontWeight: "900",
		fontFamily: "Roboto, sans-serif",
		color: "#0B0861",
		marginBottom: "30px",
		margin: "0 190px 0 190px",
	},
	root: {
		marginTop: "px",
	},
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

		// backgroundImage: `url(${img})`,
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
	label: { fontSize: "20px", fontWeight: "600" },
	divstyle: { padding: "15px", marginTop: "15px" },

	[theme.breakpoints.down("sm")]: {
		Typography: {
			fontSize: "40px",
			margin: "0 0 0 0",
			marginTop: "800px",
		},
		root: {
			marginBottom: "900px",
			marginTop: "50px",
		},
	},
}));

export default function Createjob() {
	const classes = useStyles();
	const [JobTitle, setJobTitle] = useState();
	const [Location, setLocation] = useState();
	const [Company, setCompany] = useState();
	const [Category, setCategory] = useState();
	const [Salary, setSalary] = useState();
	const [ClosingDate, setClosingDate] = useState();

	const createData = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "createjobs"), {
				JobTitle: JobTitle,
				Location: Location,
				Company: Company,
				Category: Category,
				Salary: Salary,
				ClosingDate: ClosingDate,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};
	return (
		<div>
			<Them title='Create' title1='Jobs'></Them>
			<div className={classes.parallaxContainer}>
				<div className={classes.parallax} speed='1.5'></div>
			</div>

			<div className={classes.container1}>
				<div class='container'>
					<form>
						<div class='row'>
							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='first' className={classes.label}>
										Job Title
									</label>
									<input
										type='text'
										class='form-control'
										placeholder=''
										id='first'
										value={JobTitle}
										onChange={(e) => setJobTitle(e.target.value)}
									/>
								</div>
							</div>

							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='last' className={classes.label}>
										Location (optional)
									</label>
									<input
										type='text'
										class='form-control'
										placeholder=''
										value={Location}
										id='last'
										onChange={(e) => setLocation(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<div class='row'>
							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='company' className={classes.label}>
										Company
									</label>
									<input
										type='text'
										class='form-control'
										placeholder=''
										id='company'
										value={Company}
										onChange={(e) => setCompany(e.target.value)}
									/>
								</div>
							</div>

							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										Category
									</label>
									<input
										type='text'
										class='form-control'
										id='phone'
										placeholder='Category'
										value={Category}
										onChange={(e) => setCategory(e.target.value)}
									/>
								</div>
							</div>
							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										Salary
									</label>
									<input
										type='text'
										class='form-control'
										id='phone'
										placeholder='Salary'
										value={Salary}
										onChange={(e) => setSalary(e.target.value)}
									/>
								</div>
							</div>

							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										Closing Date (optional){" "}
									</label>
									<input
										type='date'
										class='form-control'
										id='phone'
										placeholder='yyyy-mm-dd'
										value={ClosingDate}
										onChange={(e) => setClosingDate(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<button
							type='submit'
							class='btn btn-primary '
							style={{ marginTop: "30px" }}
							onClick={(e) => createData(e)}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
