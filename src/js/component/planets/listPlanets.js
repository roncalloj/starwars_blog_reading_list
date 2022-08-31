import React, {useContext} from "react";
import {Context} from '../../store/appContext'
import { Link } from "react-router-dom";

import PreviewAll from "../../views/previewAll.js";

export default function ListPlanets(){
	const {store, actions}=useContext(Context)
	
	return (
		<div className="container-fluid py-4">
			<Link to="/planets" className="text-decoration-none text-reset">
				<h3 className="text-start">Planets</h3>
			</Link>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<PreviewAll items={store.planets}/>
			</div>
		</div>
	)
}