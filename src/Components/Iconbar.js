import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	fastyle: {
		marginRight: "5px",
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
		backgroundColor: "#F5F5F5",
	},
}));

export default function Iconbar() {
	const classes = useStyles();
	return (
		<Grid justify='flex-end' container style={{ marginRight: "30px" }}>
			<Fab size='small' className={classes.fastyle}>
				<FaFacebook>
					<Link href='http://gulfstaroverseas.com/'></Link>
				</FaFacebook>
			</Fab>
			<Fab size='small' className={classes.fastyle}>
				<FaYoutube>
					<Link href='http://gulfstaroverseas.com/'></Link>
				</FaYoutube>
			</Fab>
			<Fab size='small' className={classes.fastyle}>
				<ImTwitter>
					{" "}
					<Link href='http://gulfstaroverseas.com/'></Link>
				</ImTwitter>
			</Fab>
		</Grid>
	);
}
