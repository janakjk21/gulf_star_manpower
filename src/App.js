import "./App.css";

import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./Components/Message ";
import Aboutus from "./Components/Aboutus";
import Client from "./Components/Clients";
import Job from "./Components/Job";
import Ourvalues from "./Components/Ourvalues";
import Apply from "./Components/Apply";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import WhyUs from "./Components/WhyUs";
import Team from "./Components/TEAM";
import Document from "./Components/Document";
import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import Adminpannel from "./Components/Adminpannel";
import { useEffect, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import { change } from "dom7";
import Button from "@restart/ui/esm/Button";
import Createjob from "./Components/Createjob";
import Jobseekerlogin from "./Components/Jobseekerlogin";
import CreateNews from "./Components/CreateNews";
function App() {
	const [isAuth, setAuth] = useState(true);
	const changeauth = () => {
		setAuth(!isAuth);
		console.log("i am being called");
	};

	return (
		<Router>
			<Switch>
				<Route path='/aboutus'>
					<Nav></Nav>
					<AboutPage></AboutPage>

					<Footer></Footer>
				</Route>
				<Route path='/1'>
					<Nav></Nav>
					<Login></Login>
					<Footer></Footer>
				</Route>
				<Route path='/login'>
					<Nav></Nav>

					{isAuth ? (
						<AdminLogin changeauth={changeauth}></AdminLogin>
					) : (
						<Adminpannel changeauth={changeauth}></Adminpannel>
					)}
					<Button
						onClick={(e) => {
							changeauth(e);
						}}>
						{" "}
						click em{" "}
					</Button>
					<Footer></Footer>
				</Route>
				<Route path='/createjob'>
					<Nav></Nav>
					<Createjob></Createjob>
				</Route>
				<Route path='/createnews'>
					<Nav></Nav>
					<CreateNews></CreateNews>{" "}
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
					<Team></Team> <Footer></Footer>
				</Route>
				<Route path='/'>
					<div className='App'>
						<Nav></Nav>

						<Hero></Hero>
						<Message></Message>
						<Aboutus></Aboutus>
						<Job />
						<Client></Client>
						<Ourvalues />
						<Apply />
						<Footer />
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
