import reactDom from "react-dom";
import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	useHistory,
	useLocation,
} from "react-router-dom";
export default function PrivateRoute({ isAuth, component, ...rest }) {
	// let auth = useAuth();
	return (
		<Route
			{...rest}
			render={({ props }) =>
				isAuth ? (
					<component></component>
				) : (
					<Redirect
						to={{
							pathname: "/login ",
							state: { from: props },
						}}
					/>
				)
			}
		/>
	);
}
