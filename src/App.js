import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Components/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import Fasterwayto from './Components/Fasterwayto';
const Nav = React.lazy(() => import('./Components/Nav'));
const Hero = React.lazy(() => import('./Components/Hero'));
const Message = React.lazy(() => import('./Components/Message '));
const Aboutus = React.lazy(() => import('./Components/Aboutus'));
const Client = React.lazy(() => import('./Components/Clients'));
const Job = React.lazy(() => import('./Components/Job'));
const Ourvalues = React.lazy(() => import('./Components/Ourvalues'));
const Apply = React.lazy(() => import('./Components/Apply'));
const Footer = React.lazy(() => import('./Components/Footer'));
const AboutPage = React.lazy(() => import('./Components/AboutPage'));
const WhyUs = React.lazy(() => import('./Components/WhyUs'));
const Team = React.lazy(() => import('./Components/TEAM'));
const Document = React.lazy(() => import('./Components/Document'));
// const Login from "./Components/Login";
const AdminLogin = React.lazy(() => import('./Components/AdminLogin'));
const Adminpannel = React.lazy(() => import('./Components/Adminpannel'));
const Createjob = React.lazy(() => import('./Components/Createjob'));
const Jobseekerlogin = React.lazy(() => import('./Components/Jobseekerlogin'));
const CreateNews = React.lazy(() => import('./Components/CreateNews'));
const News = React.lazy(() => import('./Components/News'));
const Applied = React.lazy(() => import('./Components/Applied'));
const Applyjob = React.lazy(() => import('./Components/Applyjob'));
const Demand = React.lazy(() => import('./Components/Demand'));
const Coutry = React.lazy(() => import('./Components/Coutry'));
const Fasterway = React.lazy(() => import('./Components/Fasterwayto'));
const Testimonial = React.lazy(() => import('./Components/Testimonial'));
const Contactus = React.lazy(() => import('./Components/Contactus'));

function App() {
	const [isAuth, setAuth] = useState(true);
	const changeauth = () => {
		setAuth(!isAuth);
	};

	return (
		<Router>
			<React.Suspense fallback={<Loading></Loading>}>
				{' '}
				<Switch>
					<Route path='/aboutus'>
						<Nav></Nav>
						<AboutPage></AboutPage>

						<Footer></Footer>
					</Route>

					<Route path='/login'>
						<Nav></Nav>

						{isAuth ? (
							<AdminLogin changeauth={changeauth}></AdminLogin>
						) : (
							<Adminpannel changeauth={changeauth}></Adminpannel>
						)}

						<Footer></Footer>
					</Route>
					<Route path='/createjob'>
						<Nav></Nav>
						<Createjob></Createjob>
					</Route>
					<Route path='/applied'>
						<Nav></Nav>
						<Applied></Applied>{' '}
					</Route>

					<Route path='/createjob'>
						<Nav></Nav>
						<Createjob></Createjob>
					</Route>
					<Route path='/createnews'>
						<Nav></Nav>
						<CreateNews></CreateNews>{' '}
					</Route>
					<Route path='/jobseekerlogin'>
						<Nav></Nav>
						<Jobseekerlogin></Jobseekerlogin>
					</Route>
					<Route path='/contactus'>
						<Nav></Nav>
						<Apply />
						<Footer></Footer>
					</Route>
					<Route path='/applyjob'>
						<Nav></Nav>
						<Applyjob />
						<Footer></Footer>
					</Route>
					<Route path='/news'>
						<Nav></Nav>
						<News /> <Footer></Footer>
					</Route>
					<Route path='/demand'>
						<Nav></Nav>
						<Demand /> <Footer></Footer>
					</Route>
					<Route path='/whyus'>
						<Nav></Nav>
						<WhyUs />
						<Footer></Footer>
					</Route>

					<Route path='/Documents'>
						<Nav></Nav>
						<Document />
						<Footer></Footer>
					</Route>
					<Route path='/Team'>
						<Nav></Nav>
						<Contactus />
						{/* <Team></Team> */}
						<Footer></Footer>
					</Route>

					<Route path='/'>
						<div>
							<Nav></Nav>
							<Hero></Hero>
							<Coutry></Coutry>
							<Message></Message>
							<Aboutus></Aboutus>
							<Fasterwayto></Fasterwayto>
							<Testimonial></Testimonial>
							<Job />
							<Client></Client>
							<Ourvalues />
							<Apply />
							<Footer />
						</div>
					</Route>
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;
