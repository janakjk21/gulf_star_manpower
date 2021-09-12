import React from "react";
import "./adminpannel.css";
import { getAuth, signOut } from "firebase/auth";
import Button from "@restart/ui/esm/Button";
import { withRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Ourvalues.css";
import icon1 from "../Assets/icons/employee.png";
import icon2 from "../Assets/icons/employee (1).png";
import icon3 from "../Assets/icons/lock.png";
import icon4 from "../Assets/icons/suitcase-black-shape.png";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import { FiUsers } from "react-icons/fi";
import { MdContactPhone } from "react-icons/md";
import { Gi3DStairs } from "react-icons/gi";
import { BiBriefcaseAlt } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
	Typography: {
		textAlign: "center",
		fontSize: "55px",
		fontWeight: "900",
		fontFamily: "Roboto, sans-serif",
		color: "#0B0861",
		marginBottom: "30px",
		margin: "0 190px 0 190px",
	},
	[theme.breakpoints.down("sm")]: {
		Typography: {
			fontSize: "40px",
			margin: "0 0 0 0",
			marginTop: "800px",
		},
		root: {
			marginBottom: "900px",
			marginTop: "500px",
			paddingLeft: "10%",
		},
	},
}));
function Adminpannel(props) {
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
		<div className={classes.root}>
			<section
				id='hero3'
				className='d-flex align-items-center'
				style={{ marginTop: "0px", height: "90vh", background: "none" }}>
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
									<a href='facebook'>contact us</a>
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
									<a href='facebook'>Applied jobs</a>
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
	);
}

export default withRouter(Adminpannel);
