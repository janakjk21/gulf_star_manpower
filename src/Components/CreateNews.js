import React, { useState } from "react";
import "./createjob.css";
import { makeStyles } from "@material-ui/core";
import Them from "./Them";
import { db } from "./fire";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
		top: "-117px",

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

export default function CreateNews() {
	const classes = useStyles();
	const [newsTitle, setnewsTitle] = useState();
	const [news, setnews] = useState();
	const [file, setfile] = useState();

	const createnews = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "createnews"), {
				news: news,
				newsTitle: newsTitle,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}

		const storage = getStorage();
		const storageRef = ref(storage, "createjobs1");

		// 'file' comes from the Blob or File API
		uploadBytes(storageRef, file).then((snapshot) => {
			console.log("Uploaded a blob or file!");
		});
	};
	return (
		<div>
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
											News Title
										</label>
										<input
											type='text'
											class='form-control'
											placeholder=''
											id='first'
											value={newsTitle}
											onChange={(e) => setnewsTitle(e.target.value)}
										/>
									</div>
								</div>

								<div class='col-md-6' className={classes.divstyle}>
									<div class='form-group'>
										<label for='last' className={classes.label}>
											News
										</label>
										<input
											type='text'
											class='form-control'
											placeholder=''
											value={news}
											id='last'
											style={{ height: "200px" }}
											onChange={(e) => setnews(e.target.value)}
										/>
									</div>
								</div>

								<div class='col-md-6' className={classes.divstyle}>
									<div class='form-group'>
										<label for='last' className={classes.label}>
											Image
										</label>
										<input
											type='file'
											class='form-control'
											placeholder=''
											value={File}
											id='last'
											onChange={(e) => setfile(e.target.value)}
										/>
									</div>
								</div>
							</div>

							<button
								type='submit'
								class='btn btn-primary '
								style={{ marginTop: "30px" }}
								onClick={(e) => createnews(e)}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
