import React, {useContext} from "react";
import {Context} from '../../store/appContext'
import { Link } from "react-router-dom";

import PreviewAll from "../../views/previewAll.js";

export default function ListSpecies(){
	const {store, actions}=useContext(Context)

	return(
		<div className="container-fluid py-4">
			<Link to="/species" className="text-decoration-none text-reset">
				<h3 className="text-start">Species</h3>
			</Link>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<PreviewAll items={store.species}/>
			</div>
		</div>
	)
}