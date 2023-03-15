import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AppliedJobs from './AppliedJobs';
import Contactingpeople from './Contactingpeople';
import BlogPostForm from './Blogpostform';
import JobAdvertisement from './Jobadvertisement';
import Jobform from './JobForm';
import { useLocation } from 'react-router-dom';
import {
	FaAccusoft,
	FaAddressBook,
	FaBriefcase,
	FaNewspaper,
} from 'react-icons/fa';
import JobForm from './JobForm';

// import JobForm from './JobForm';
const AdminDashboard = () => {
	const location = useLocation();
	console.log(location.pathname);
	let topic = location.pathname;
	let content;

	switch (topic) {
		case '/dashboard/blogform':
			content = <BlogPostForm />;
			break;
		case '/dashboard/appliedjobs':
			content = <AppliedJobs />;
			break;
		case '/dashboard/contactingpeople':
			content = <AppliedJobs />;
			break;
		case '/dashboard/jobform':
			content = <JobForm />;
			break;
		case '/dashboard/Jobadvertisement':
			content = <JobAdvertisement />;
			break;
		default:
			content = <Contactingpeople></Contactingpeople>;
	}
	return (
		<>
			<Container fluid style={{ marginTop: '100px' }}>
				<Row style={{ height: '100vh', color: 'Background' }}>
					<Col md={2} className='bg-light'>
						<Nav className='flex-column pt-2'>
							<Nav.Link href='/dashboard/blogform'>
								{' '}
								<FaNewspaper></FaNewspaper> Create News
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
