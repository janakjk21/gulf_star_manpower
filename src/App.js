import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import otheroutes from './Components/Admin section/Adminroutes';
import Loading from './Components/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import Applyprocess from './Components/applyprocess/Applyprocess';
import Services from './Components/Services/Services';
//components
const Nav = React.lazy(() => import('./Components/Herosection/Nav'));
const Footer = React.lazy(() => import('./Components/Footer'));

//related to documents of the componey
// const Document = React.lazy(() =>
// 	import('./Components/lisence Certificate/Document')
// );
const Demand = React.lazy(() =>
	import('./Components/lisence Certificate/Demand')
);

// this is for the login of the user
const AdminLogin = React.lazy(() =>
	import('./Components/loginlogic/AdminLogin')
);

//this is related to the admin related stuff
const Adminpannel = React.lazy(() =>
	import('./Components/Admin section/dash/Adminpannel')
);
// const Dashboard = React.lazy(() =>
// 	import('./Components/Admin section/dash/index')P
// );
const AdminDashboard = React.lazy(() =>
	import('./Components/Admin section/AdminDashboard')
);
const Jobseekerlogin = React.lazy(() =>
	import('./Components/joobseekerlogin/Jobseekerlogin')
);
// this are the forms to apply for the job

const Applyjob = React.lazy(() => import('./Components/Recrument/Applyjob'));

// blogs and content related
// const Blogs = React.lazy(() => import('./Components/News'));
const BlogsGrid = React.lazy(() => import('./Components/Blog/BlogGrid'));
const BlogSingle = React.lazy(() => import('./Components/Blog/Blogsingle'));

//contact us page
const Contactus = React.lazy(() => import('./Components/contactus/Contactus'));

// Home page

const Hero3 = React.lazy(() => import('./Components/Herosection/Hero3'));

// this is about us page
const AboutPage = React.lazy(() => import('./Components/Aboutus/AboutPage'));

// this is the page to show the news article of the newspaper

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
					{/* about us page  */}
					<Route path='/aboutus'>
						<Nav></Nav>
						<AboutPage></AboutPage>
						<Footer></Footer>
					</Route>
					{/* Contact us page  */}
					<Route path='/contactus'>
						<Nav></Nav>
						<Contactus />
						<Footer></Footer>
					</Route>
					{otheroutes}
					<Route path='/recrumentprocess'>
						<Nav></Nav>
						<Applyprocess />
						<Footer></Footer>
					</Route>
					{/* all the related blog pages  */}
					<Route path='/news'>
						<Nav></Nav>
						<BlogsGrid /> <Footer></Footer>
					</Route>
					{/* // this is for the servieces  */}
					<Route path='/services'>
						<Nav></Nav>
						<Services /> <Footer></Footer>
					</Route>

					{/* All the documents related page and need some work to do  */}
					<Route path='/Documents'>
						<Nav></Nav>
						<Demand />
						<Footer></Footer>
					</Route>

					{/* login page for admin  */}
					<Route path='/login'>
						<Nav></Nav>
						{isAuth ? (
							<AdminLogin changeauth={changeauth}></AdminLogin>
						) : (
							<Adminpannel changeauth={changeauth}></Adminpannel>
						)}
						<Footer></Footer>
					</Route>
					{/* All admin related thing here */}
					<Route path='/dashboard'>
						<Nav></Nav>
						{/* <Dashboard></Dashboard> */}
						<AdminDashboard></AdminDashboard>
						{/* < Dashboard1></> */}
						{/* <Footer></Footer> */}
					</Route>
					{/* This is for logging the user to fill the form  */}
					<Route path='/jobseekerlogin'>
						<Nav></Nav>
						<Jobseekerlogin></Jobseekerlogin>
					</Route>
					{/* this is for the demands  */}
					<Route path='/demand'>
						<Nav></Nav>
						<Demand></Demand>
						<Footer></Footer>
					</Route>
					<Route path='/applyjob'>
						<Nav></Nav>
						<Applyjob />
						<Footer></Footer>
					</Route>

					{/* this is blog grind  */}
					<Route path='/bloggrid'>
						<Nav></Nav>
						<BlogSingle></BlogSingle>
						<Footer></Footer>
					</Route>
					{/* This is home page  */}
					<Route path='/'>
						<div>
							<Nav></Nav>
							<Hero3 />
						</div>
					</Route>
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;
