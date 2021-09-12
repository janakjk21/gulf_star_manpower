import React, { useEffect } from "react";
import { Button, Input, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./fire";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "400px",
	},
}));

export default function Login() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [saySomething, setSaySomething] = useState("");
	const [rollNo, set_roll_No] = useState();
	const [user, setUser] = useState(false);
	const [message, setMessage] = useState([]);

	const auth = getAuth();
	//sign up function
	const Signup = (event) => {
		event.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
	// useEffect(() => {
	// 	console.log("use effect run bho ");
	// }, [user]);
	//sign in function
	const signIn = (event) => {
		event.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				setUser(true);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	const logout = (event) => {
		event.preventDefault();
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("loged out successful");
				setUser(!user);
			})
			.catch((error) => {
				// An error happened.
			});
	};

	const createData = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "users325"), {
				first: "Ada",
				last: "Lovelace",
				born: 1815,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};
	const GetData = async (event) => {
		event.preventDefault();
		const querySnapshot = await getDocs(collection(db, "message"));
		let newarry = [];
		querySnapshot.forEach((doc) => {
			let currentID = doc.id;
			let appObj = { ...doc.data(), ["id"]: currentID };
			newarry.push(appObj);
		});
		setMessage(newarry);
		console.log(message, "This is message");
	};

	return (
		<div>
			<form className={classes.root} noValidate autoComplete='off'>
				{user ? <h1> loged in </h1> : <h1> loged out</h1>}
				<Input
					placeholder='email'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}>
					{" "}
					email{" "}
				</Input>

				<Input
					placeholder='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}>
					password
				</Input>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					onClick={(event) => Signup(event)}>
					Signup
				</Button>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					onClick={(event) => signIn(event)}>
					{" "}
					signin
				</Button>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					onClick={(event) => logout(event)}>
					{" "}
					logout
				</Button>
			</form>
			<form className={classes.root} noValidate autoComplete='on'>
				<TextField
					id='outlined-basic'
					label='Name'
					variant='outlined'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Say something '
					variant='outlined'
					value={saySomething}
					onChange={(event) => {
						setSaySomething(event.target.value);
					}}
				/>
				<p>{message.name}</p>
				<TextField
					id='outlined-basic'
					label='rollno '
					variant='outlined'
					value={rollNo}
					onChange={(event) => set_roll_No(event.target.value)}
				/>
				<Button
					variant='contained'
					color='secondary'
					type='submit'
					onClick={(event) => createData(event)}>
					create data
				</Button>
				<Button
					variant='contained'
					color='secondary'
					type='submit'
					onClick={(event) => GetData(event)}>
					Get data
				</Button>
			</form>
		</div>
	);
}
