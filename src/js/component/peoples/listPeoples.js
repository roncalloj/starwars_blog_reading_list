import React, {useContext} from "react";
import {Context} from '../../store/appContext'
import { Link } from "react-router-dom";

import PreviewAll from "../../views/previewAll.js";

export default function ListPeoples(){
	const {store, actions}=useContext(Context)

	return(
		<div className="container-fluid py-4">
			<Link to="/people" className="text-decoration-none text-reset">
				<h3 className="text-start">People</h3>
			</Link>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<PreviewAll items={store.peoples}/>
			</div>
		</div>
	)
}