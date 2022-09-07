import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Favoritos from "./favoritos";



export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-2 d-flex justify-content-around fixed-top">
			<NavLink to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</NavLink>
			<NavLink to="/people">
				<span className="navbar-brand mb-0 h1">People</span>
			</NavLink>
			<NavLink to="/vehicles">
				<span className="navbar-brand mb-0 h1">Vehicles</span>
			</NavLink>			
			<NavLink to="/planets">
				<span className="navbar-brand mb-0 h1">Planets</span>
			</NavLink>
			<NavLink to="/species">
				<span className="navbar-brand mb-0 h1">Species</span>
			</NavLink>
			<Favoritos />
		</nav>
	);
};
