import React, { useEffect, useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Loading from "./Loading";
import Them from "./Them";
import img1 from "../Assets/239-2396321_government-logo-of-nepal.png";
import "./jobseeker.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./fire";

const useStyles = makeStyles((theme) => ({
	Typography: {
		// textAlign: "center",
		fontSize: "30px",
		fontWeight: "900",
		fontFamily: "Roboto, sans-serif",
		color: "#212529",
		marginBottom: "30px",
		margin: "0 190px 0 190px",
	},

	[theme.breakpoints.down("sm")]: {
		Typography: {
			fontSize: "20px",
			margin: "0 0 0 0",
			marginTop: "800px",
		},
	},
}));
export default function News() {
	const [news, setNews] = useState([]);
	const classes = useStyles();
	const getnews = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, "createnews"));
		querySnapshot.forEach((doc) => {
			let appObj = { ...doc.data() };
			newarr.push(appObj);
		});
		setNews(newarr);
	};
	useEffect(() => {
		getnews();
	}, []);

	return (
		<div>
			<Them title='New' title1='News'></Them>

			{news.length > 0 ? (
				news.map((item) => {
					return (
						<div class='blog-card' style={{ maxWidth: "70%" }}>
							<img
								src={img1}
								style={{
									width: "50%",
									overflow: "hidden",
									objectFit: "cover",
								}}
								alt='news'></img>

							<div class='description'>
								<Typography className={classes.Typography}>
									{" "}
									{item.newsTitle}
								</Typography>

								<p></p>
								{item.news}
								<p></p>
							</div>
						</div>
					);
				})
			) : (
				<Loading />
			)}
		</div>
	);
}
