import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import injectContext from "./store/appContext";

import Layout from "./layout";
import { Home } from "./views/home.js";

import Peoples from "./component/peoples/peoples.js";
import DetailPeoples from "./views/peoples/detailPeoples.js";

import Vehicles from "./component/vehicles/vehicles.js";
import DetailVehicles from "./views/vehicles/detailVehicles.js";

import Planets from "./component/planets/planets.js";
import DetailPlanets from "./views/planets/detailPlanets.js";
import Species from "./component/species/species.js";
import DetailsSpecies from "./views/species/detailsSpecies.js";

const AppRoutes = () => {
	
	return(
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<Layout />}>
					
					<Route index element={<Home />} />

					<Route path="/people" >
						<Route index element = {<Peoples />} />
						<Route path=":peoplesId" element={<DetailPeoples />} />
					</Route>
					<Route path="/vehicles" >
						<Route index element = {<Vehicles />} />
						<Route path=":vehiclesId" element={<DetailVehicles />} />
					</Route>
					<Route path="/planets"  >
						<Route index element={<Planets />} />
						<Route path=":planetsId" element={<DetailPlanets />} />
					</Route>
					<Route path="/species">
						<Route index element={<Species />} />
						<Route path=":speciesId" element={<DetailsSpecies />} />
					</Route>

				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default injectContext(AppRoutes) 