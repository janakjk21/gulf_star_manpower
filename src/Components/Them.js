import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import image1 from '../Assets/cool-background.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	Typography: {
		textAlign: 'left',
		fontSize: '80px',
		fontWeight: '900',
		fontFamily: 'Roboto, sans-serif',
	},
	wrapper: {
		backgroundImage: `url(${image1})`,
		// background:
		// 	"linear-gradient(90deg, rgba(27,255,255,1) 0%, rgba(46,49,146,1) 100%)",
		padding: '50px',
		height: '250px',
		marginTop: '130px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'space-between',
	},
	[theme.breakpoints.down('sm')]: {
		Typography: {
			fontSize: '40px',
		},
	},
	typography2: {
		fontWeight: '800',
		fontSize: '15px',
		color: '#000',
		[theme.breakpoints.down('sm')]: {
			fontWeight: '400',
		},
	},
}));
export default function Them(props) {
	const classes = useStyles();
	AOS.init();
	return (
		<div className={classes.wrapper}>
			<div>
				<Typography className={classes.Typography}>
					{' '}
					<span style={{ color: '#1E1926' }}> {props.title} </span>
					{props.title1}
				</Typography>
			</div>
			<div>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<Typography className={classes.typography2}>Home/</Typography>
				</Link>{' '}
				<Link to='/' style={{ textDecoration: 'none' }}>
					<Typography className={classes.typography2}>Our team</Typography>
				</Link>
			</div>
		</div>
	);
}
