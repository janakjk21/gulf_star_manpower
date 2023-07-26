import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import AppliedJobs from './AppliedJobs';
import Contactingpeople from './Contactingpeople';
import BlogPostForm from './Blogpostform';
import JobAdvertisement from './Jobadvertisement';
// import Jobform from './JobForm';

import {
	FaAccusoft,
	FaAddressBook,
	FaBriefcase,
	FaNewspaper,
} from 'react-icons/fa';
import JobForm from './JobForm';
import { getAuth, signOut } from 'firebase/auth';
import { BiLogOut } from 'react-icons/bi';

// import JobForm from './JobForm';
const AdminDashboard = (props) => {
	const { data } = props;
	console.log(props, 'this is props ');
	let content;
	switch (data) {
		case '/dashboard/blogform':
			content = <BlogPostForm />;
			break;
		case '/dashboard/appliedjobs':
			content = <AppliedJobs />;
			break;
		case '/dashboard/contactingpeople':
			content = <Contactingpeople />;
			break;
		case '/dashboard/jobform':
			content = <JobForm />;
			break;
		case '/dashboard/Jobadvertisement':
			content = <JobAdvertisement />;
			break;
		default:
			content = <Contactingpeople />;
			break;
	}

	// sign out function
	const signOutfunction = (e) => {
		e.preventDefault();
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				props.changeauth();
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<>
			<Container fluid style={{ marginTop: '100px' }}>
				<Row style={{ height: '100vh', color: 'Background' }}>
					<Col md={2} className='bg-light'>
						<Nav className='flex-column pt-2'>
							<Nav.Link href='/dashboard/blogform'>
								{' '}
								<FaNewspaper></FaNewspaper> Advertisement long term
							</Nav.Link>
							<Nav.Link href='/dashboard/appliedjobs'>
								<FaBriefcase></FaBriefcase>
								people that applied{' '}
							</Nav.Link>
							<Nav.Link href='/dashboard/jobform'>
								{' '}
								<FaAccusoft></FaAccusoft> Create Jobs
							</Nav.Link>
							<Nav.Link href='/dashboard/Jobadvertisement'>
								{' '}
								<FaAddressBook></FaAddressBook>Job advertisement
							</Nav.Link>

							{/* <Nav.Link href=''>Create Jobs</Nav.Link> */}
						</Nav>
						<Button
							style={{ backgroundColor: '#ff0000' }}
							onClick={(e) => {
								signOutfunction(e);
							}}
							variant='contained'
							size='large'>
							<BiLogOut></BiLogOut>
							logout
						</Button>
					</Col>
					<Col md={10} className='p-4'>
						<h2>Welcome to the Admin Dashboard</h2>
						{content}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AdminDashboard;
