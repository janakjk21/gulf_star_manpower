import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
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
		borderRadius: "35px",
	},
	container1: {
		width: "90%",
		borderRadius: "35px",

		position: "relative",
		top: "-112px",

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

export default function Applyjob() {
	const classes = useStyles();
	const [yourName, setyourName] = useState();
	const [Location, setLocation] = useState();
	const [passsword, setpasssword] = useState();
	const [yourAgent, setyourAgent] = useState();
	const [father, setfather] = useState();
	const [details, setdetails] = useState();

	const [email, setemail] = useState();
	const [phoneno, setphoneno] = useState();

	const createData = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "apllyjobs"), {
				yourName: yourName,
				Location: Location,
				passsword: passsword,
				yourAgent: yourAgent,
				father: father,
				phoneno: phoneno,
				details: details,
				email: email,
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
										Your name
									</label>
									<input
										type='text'
										class='form-control'
										placeholder='your name'
										id='first'
										value={yourName}
										onChange={(e) => setyourName(e.target.value)}
									/>
								</div>
							</div>

							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='last' className={classes.label}>
										Your Address
									</label>
									<input
										type='text'
										class='form-control'
										placeholder='your address'
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
									<label for='passsword' className={classes.label}>
										Password No
									</label>
									<input
										type='text'
										class='form-control'
										placeholder='password no'
										id='passsword'
										value={passsword}
										onChange={(e) => setpasssword(e.target.value)}
									/>
								</div>
							</div>

							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										your agent
									</label>
									<input
										type='text'
										class='form-control'
										id='phone'
										placeholder='your agent'
										value={yourAgent}
										onChange={(e) => setyourAgent(e.target.value)}
									/>
								</div>
							</div>
							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										father name
									</label>
									<input
										type='text'
										class='form-control'
										id='phone'
										placeholder='father name'
										value={father}
										onChange={(e) => setfather(e.target.value)}
									/>
								</div>
							</div>
							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										describe your self
									</label>
									<input
										type='text'
										class='form-control'
										id='phone'
										placeholder='details'
										value={details}
										onChange={(e) => setdetails(e.target.value)}
									/>
								</div>
							</div>
							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										email address
									</label>
									<input
										type='email'
										class='form-control'
										id='phone'
										placeholder='email'
										value={email}
										onChange={(e) => setemail(e.target.value)}
									/>
								</div>
							</div>

							<div class='col-md-6' className={classes.divstyle}>
								<div class='form-group'>
									<label for='phone' className={classes.label}>
										phone no
									</label>
									<input
										type='tel'
										class='form-control'
										id='phone'
										placeholder='phone no '
										value={phoneno}
										onChange={(e) => setphoneno(e.target.value)}
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
