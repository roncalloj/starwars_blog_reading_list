import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

//create your first component
const Layout = () => {	

	return (
		<div>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
