import React, {useContext} from "react";
import {Context} from '../store/appContext'
//import "../../styles/home.css";
import ListPeoples from '../component/peoples/listPeoples'
import ListVehicles from '../component/vehicles/listVehicles'
import ListPlanets from '../component/planets/listPlanets'
import ListSpecies from '../component/species/listSpecies'

export const Home = () => {
	const {store, actions}=useContext(Context)
	
	return (
		<div className="text-center mt-5">
			<h1>Star Wars APP</h1>
			<ListPeoples  />
			<ListVehicles  />
			<ListPlanets  />
			<ListSpecies  />
		</div>
	)
};
