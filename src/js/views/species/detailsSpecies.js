import React, { Fragment, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import {Context} from '../../store/appContext'

export default function DetailsSpecies(){
	const {store, actions}=useContext(Context)
	const params = useParams();
	const {specie} = store;

	useEffect(async()=>{
		console.log("Component did mount")
		await actions.loadSpecie(params.speciesId)
	},[])
		return (
			<Fragment>
				{specie? (
					<div className="card container border-0" style={{margin: "5rem 0 0"}}>
						<div className="row g-0" style={{margin: "2rem 0"}}>
							<div className="col-md-9 text-center m-auto">
								<img src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`} 
								onError={(e)=>{e.target.onerror = null; e.target.src=`https://starwars-visualguide.com/assets/img/placeholder.jpg`}}/>
							</div>
							<div className="col-md-3">
									<div className="card-body">
										<h2 className="card-title text-danger">{specie.properties.name}</h2>
										<p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
									</div>
							</div>
						</div>
							<hr className="bg-success border-3 border-top border-success" />
							<div className="row align-species-center text-success" style={{margin: "1rem 0"}}>
								<div className="col text-center">
									<h5> Classification </h5>
									<p> {specie.properties.classification} </p>
								</div>
								<div className="col text-center">
									<h5> Language </h5>
									<p> {specie.properties.language} </p>
								</div>
								<div className="col text-center text-danger">
									<Link to={"/planets/" + specie.uid} className="text-decoration-none text-reset">
										<h5> Homeworld </h5>
									</Link>
								</div>
								<div className="col text-center">
									<h5> Average Lifespan (in years) </h5>
									<p> {specie.properties.average_lifespan} </p>
								</div>
							</div>
					</div>
				) : ""}
			</Fragment>
		)
}
