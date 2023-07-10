import React, { useState } from 'react';
// import './createjob.css';
import { makeStyles } from '@material-ui/core';
import '../../Herosection/theme.min.css';
import { db } from '../../fire';
import { collection, addDoc } from 'firebase/firestore';
const useStyles = makeStyles((theme) => ({
	Typography: {
		textAlign: 'center',
		fontSize: '55px',
		fontWeight: '900',
		fontFamily: 'Roboto, sans-serif',
		color: '#219ebc',
	},
	root: {
		marginTop: 'px',
	},
	parallaxContainer: {
		position: 'relative',
		overflow: 'hidden',

		marginTop: '90px',
	},
	parallax: {
		position: 'absolute',
		top: '50',
		height: '120%',
		width: '100%',

		// backgroundImage: `url(${img})`,
		backgroundSize: 'cover',
	},
	container1: {
		width: '90%',

		position: 'relative',
		top: '-112px',

		backgroundColor: '#fbfbfd',
		margin: '0 auto',
		borderRadius: '25px',
		padding: '50px',
	},

	typography1: {
		fontSize: '1.5em',
	},
	[theme.breakpoints.down('sm')]: {
		container1: {
			width: '90%',

			position: 'relative',
			top: '-220px',

			backgroundColor: '#F8FBFE',
			margin: '0 auto',

			padding: '0px',
		},
		typography1: {
			fontSize: '0.8em',
			padding: '5px',
			textAlign: 'center',
		},
	},
	label: { fontSize: '20px', fontWeight: '600' },
	divstyle: { padding: '15px', marginTop: '15px' },

	[theme.breakpoints.down('sm')]: {
		Typography: {
			fontSize: '40px',
			margin: '0 0 0 0',
			marginTop: '800px',
		},
		root: {
			marginBottom: '900px',
			marginTop: '50px',
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
	const [details, setdetails] = useState();

	const [ClosingDate, setClosingDate] = useState();

	const createData = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, 'createjobs'), {
				JobTitle: JobTitle,
				Location: Location,
				Company: Company,
				Category: Category,
				Salary: Salary,
				ClosingDate: ClosingDate,
				details: details,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
	return (
		<div>
			<div className={classes.parallaxContainer}>
				<div className={classes.parallax}></div>
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
										Details
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
										Closing Date (optional){' '}
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
							style={{ marginTop: '30px' }}
							onClick={(e) => createData(e)}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
