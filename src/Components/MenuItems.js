import { React, useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	typography: {
		fontWeight: "800",
		fontSize: "15px",
		color: "#000",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "10px",
			fontWeight: "400",
		},
	},
}));

export default function MenuItems() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorEl1, setAnchorEl1] = useState(null);
	const open = Boolean(anchorEl);
	const open1 = Boolean(anchorEl1);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClick1 = (event) => {
		setAnchorEl1(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClose1 = () => {
		setAnchorEl1(null);
	};
	return (
		<div>
			<Button color='secondary' style={{ margin: "10px" }}>
				<Link to='/' style={{ textDecoration: "none" }}>
					<Typography className={classes.typography}>Home</Typography>
				</Link>
			</Button>
			<Button
				aria-controls='fade-menu'
				aria-haspopup='true'
				onClick={handleClick}
				fontWeight='fontWeightBold'
				style={{ margin: "10px" }}>
				<Typography className={classes.typography}>About Us</Typography>
				<IoIosArrowDown />
			</Button>
			<Menu
				id='fade-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}>
				<MenuItem onClick={handleClose}>
					<Link to='/aboutus' style={{ textDecoration: "none" }}>
						{" "}
						<Typography className={classes.typography}>ABOUT US</Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/Team' style={{ textDecoration: "none" }}>
						{" "}
						<Typography className={classes.typography}> OUR TEAM </Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/whyus' style={{ textDecoration: "none" }}>
						{" "}
						<Typography className={classes.typography}>WHY US </Typography>
					</Link>
				</MenuItem>
			</Menu>{" "}
			<Button
				aria-controls='fade-menu'
				aria-haspopup='true'
				onClick={handleClick1}>
				<Link style={{ textDecoration: "none" }}>
					<Typography className={classes.typography}>Documents</Typography>{" "}
				</Link>
				<IoIosArrowDown />
			</Button>
			<Menu
				id='fade-menu'
				anchorEl={anchorEl1}
				keepMounted
				open={open1}
				onClose={handleClose1}
				TransitionComponent={Fade}>
				<MenuItem onClick={handleClose}>
					<Link to='/Documents' style={{ textDecoration: "none" }}>
						<Typography className={classes.typography}>
							Company Document
						</Typography>{" "}
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Typography className={classes.typography}>
						Demand Documents{" "}
					</Typography>{" "}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Typography className={classes.typography}>
						{" "}
						Company Leaflet{" "}
					</Typography>
				</MenuItem>
			</Menu>{" "}
			<Button style={{ margin: "10px" }}>
				<Link style={{ textDecoration: "none" }} to='/contactus'>
					<Typography className={classes.typography}>contact Us</Typography>
				</Link>
			</Button>
			<Button style={{ margin: "10px" }}>
				<Link style={{ textDecoration: "none" }} to='/news'>
					<Typography className={classes.typography}> News</Typography>
				</Link>
			</Button>
		</div>
	);
}
