import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AppliedJobs from './AppliedJobs';
import Contactingpeople from './Contactingpeople';
import BlogPostForm from './Blogpostform';
// import JobForm from './JobForm';
const AdminDashboard = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand href='#home'>Admin Dashboard</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#dashboard'>Dashboard</Nav.Link>
							<NavDropdown title='Settings' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#profile'>Profile</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#logout'>Logout</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container fluid>
				<Row>
					<Col md={2} className='bg-light'>
						<Nav className='flex-column pt-2'>
							<Nav.Link href='#users'>Users</Nav.Link>
							<Nav.Link href='#products'>Products</Nav.Link>
							<Nav.Link href='#orders'>Orders</Nav.Link>
						</Nav>
					</Col>
					<Col md={10} className='p-4'>
						<h2>Welcome to the Admin Dashboard</h2>
						{/* <JobForm></JobForm> */}
						{/* <Contactingpeople></Contactingpeople> */}
						{/* <AppliedJobs></AppliedJobs> */}
						<BlogPostForm></BlogPostForm>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AdminDashboard;
