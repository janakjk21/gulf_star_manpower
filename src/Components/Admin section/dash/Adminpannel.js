import React from "react";
import "./adminpannel.css";
import { getAuth, signOut } from "firebase/auth";
import { withRouter } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import { FiUsers } from "react-icons/fi";
import { MdContactPhone } from "react-icons/md";
import { Gi3DStairs } from "react-icons/gi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { FaUserAltSlash } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "50px",
		paddingLeft: "10%",
	},
	button: {
		marginTop: "150px",
		width: "70px",
		marginLeft: "80%",
	},

	[theme.breakpoints.down("sm")]: {
		root: {
			marginBottom: "900px",
			marginTop: "500px",
			paddingLeft: "10%",
		},
		button: {
			marginTop: "200px",
			marginLeft: "0px",
		},
	},
}));
function Adminpannel(props) {
	AOS.init();

	const classes = useStyles();
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
		<div>
			<Button
				onClick={(e) => {
					signOutfunction(e);
				}}
				variant='contained'
				color='secondary'
				className={classes.button}
				size='large'>
				<FaUserAltSlash></FaUserAltSlash>
			</Button>
			<div className={classes.root}>
				<section
					id='hero3'
					className='d-flex align-items-center'
					style={{ marginTop: "0px", height: "60vh", background: "none" }}>
					<div
						className='container position-relative'
						data-aos='fade-up'
						data-aos-delay='100'>
						<div className='row icon-box3es'>
							<div
								className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
								data-aos='zoom-in'
								data-aos-delay='200'>
								<div
									className='icon-box3'
									style={{
										backgroundColor: "#3C153B",
										color: "#000",
									}}>
									<div className='icon3'>
										<FiUsers></FiUsers>
									</div>
									<h4 className='title'>
										<Link to='/createjob'> Create job</Link>
									</h4>
									<p className='description'></p>
								</div>
							</div>
							<div
								className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
								data-aos='zoom-in'
								data-aos-delay='200'>
								<div
									className='icon-box3'
									style={{
										backgroundColor: "#89BD9E",
										color: "#000",
									}}>
									<div className='icon3'>
										<MdContactPhone></MdContactPhone>
									</div>

									<h4 className='title'>
										<Link to='/applied'> contact us</Link>
									</h4>
								</div>
							</div>

							<div
								className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
								data-aos='zoom-in'
								data-aos-delay='200'>
								<div
									className='icon-box3'
									style={{
										backgroundColor: "#F0C987",
										color: "#000",
									}}>
									<div className='icon3'>
										<Gi3DStairs> </Gi3DStairs>
									</div>

									<h4 className='title'>
										<Link to='/applied'> Applied jobs</Link>
									</h4>
								</div>
							</div>

							<div
								className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
								data-aos='zoom-in'
								data-aos-delay='200'>
								<div
									className='icon-box3'
									style={{
										backgroundColor: "#DB4C40",
										color: "#000",
									}}>
									<div className='icon3'>
										{/* <img
										src={icon4}
										style={{ height: "75px" }}
										alt='Image2'></img> */}
										<BiBriefcaseAlt></BiBriefcaseAlt>
									</div>
									<h4 className='title'>
										<Link to='/createnews'> create news</Link>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default withRouter(Adminpannel);
