import { React, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import Iconbar from './Iconbar';

import { makeStyles } from '@material-ui/core/styles';
import logo_png from '../Assets/logo3 FINAL.jpg';
import MenuItems from './MenuItems';
import { FiMenu, FiPhoneCall } from 'react-icons/fi';

import { Button, Grid, MenuItem, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	logo: {
		maxWidth: '290px',
		height: '80px',
	},

	Typography: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: '500',
		[theme.breakpoints.down('sm')]: {
			paddingTop: '10px',
			fontWeight: '400',
		},
	},
	typography3: {
		fontWeight: '800',
		fontSize: '15px',
		color: '#000000',

		[theme.breakpoints.down('sm')]: {
			paddingTop: '10px',
			fontWeight: '600',
		},
	},

	mblmargin: {
		[theme.breakpoints.down('sm')]: {
			marginLeft: '30%',
		},
	},
	mblmargin1: {
		[theme.breakpoints.down('sm')]: {
			marginLeft: '20%',
			fontFamily: 'Roboto, sans-serif',
		},
	},
}));

export default function Nav() {
	const [state, setState] = useState({
		mobileView: false,
	});
	const { mobileView } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};
		setResponsiveness();
		window.addEventListener('resize', () => setResponsiveness());
	}, []);

	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const displayMobile = () => {
		return (
			<AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
				<Grid container style={{ paddingLeft: '10px' }}>
					<Grid item xs={12} md={4}>
						<img src={logo_png} alt='logo' className={classes.logo} />
					</Grid>
					<Grid item xs={12} md={8}></Grid>
				</Grid>
				<Toolbar>
					<Grid item sm={8} xs={6}>
						<Button
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleClick}>
							<FiMenu size={30} />
						</Button>
						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<MenuItem onClick={handleClose}>
								<Link to='/' style={{ textDecoration: 'none' }}>
									{' '}
									<Typography className={classes.typography3}>Home</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/aboutus' style={{ textDecoration: 'none' }}>
									{' '}
									<Typography className={classes.typography3}>
										ABOUT US
									</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/Team' style={{ textDecoration: 'none' }}>
									{' '}
									<Typography className={classes.typography3}>
										{' '}
										OUR TEAM{' '}
									</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/whyus' style={{ textDecoration: 'none' }}>
									{' '}
									<Typography className={classes.typography3}>
										WHY US{' '}
									</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/Documents' style={{ textDecoration: 'none' }}>
									<Typography className={classes.typography3}>
										Company Document
									</Typography>{' '}
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/demand' style={{ textDecoration: 'none' }}>
									{' '}
									<Typography className={classes.typography3}>
										Demand Documents{' '}
									</Typography>{' '}
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/whyus' style={{ textDecoration: 'none' }}>
									{' '}
									<Typography className={classes.typography3}>
										{' '}
										Company Leaflet{' '}
									</Typography>{' '}
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link style={{ textDecoration: 'none' }} to='/contactus'>
									<Typography className={classes.typography3}>
										contact Us
									</Typography>
								</Link>
							</MenuItem>

							<MenuItem onClick={handleClose}>
								<Link style={{ textDecoration: 'none' }} to='/news'>
									<Typography className={classes.typography3}> News</Typography>
								</Link>
							</MenuItem>
						</Menu>
					</Grid>

					<Grid item sm={4} xs={6}>
						<Iconbar />
					</Grid>
				</Toolbar>{' '}
			</AppBar>
		);
	};
	const displayDesktop = () => {
		return (
			<AppBar
				position='static'
				style={{ background: 'transparent', boxShadow: 'none' }}>
				<Toolbar color='none'>
					<Grid container>
						<Grid item lg={3}>
							<Link to='/'>
								<img src={logo_png} alt='logo' className={classes.logo} />
							</Link>
						</Grid>
						<Grid item lg={6}>
							{' '}
							<MenuItems />
						</Grid>
						<Grid item lg={3}>
							<Iconbar />
						</Grid>
					</Grid>
				</Toolbar>

				<Grid
					style={{
						background: 'transparent',
						boxShadow: 'none',
						position: 'relative',
						left: '70%',
					}}>
					{' '}
					<Grid container direction='row'>
						<Typography>WhatsApp/Viber/WeChat :</Typography>

						<Grid item xs={12} lg={4}>
							<Button
								color='secondary'
								variant='contained'
								style={{
									padding: '3px',
									// background: 'linear-gradient(to bottom, #000000, #000000)',
								}}>
								<FiPhoneCall fontSize='small' />
								<a
									href='tel:+977-01-4970001'
									style={{
										color: 'black',
										textDecorationStyle: 'non',
									}}>
									977-01-4970001{' '}
								</a>
							</Button>

							<Button
								color='secondary'
								variant='contained'
								style={{
									padding: '3px',
									// background: 'linear-gradient(to bottom, #000000, #000000)',
								}}>
								<FiPhoneCall fontSize='small' />
								<a
									href='tel:+977-01-4970002'
									style={{
										color: 'black',
										textDecorationStyle: 'non',
									}}>
									+977-01-4970002
								</a>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</AppBar>
		);
	};

	return <div>{mobileView ? displayMobile() : displayDesktop()}</div>;
}
