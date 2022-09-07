import React, { Fragment, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {Context} from '../../store/appContext'

export default function DetailsPlanets(){
	const {store, actions}=useContext(Context)
	const params = useParams();
	const {planet} = store;

	useEffect(async()=>{
		console.log("Component did mount")
		await actions.loadPlanet(params.planetsId)
	},[])
		return (
			<Fragment>
							{planet? (
				<div className="card container border-0" style={{margin: "5rem 0 0"}}>
					<div className="row g-0" style={{margin: "2rem 0"}}>
						<div className="col-md-9 text-center m-auto">
							<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
							onError={(e)=>{e.target.onerror = null; e.target.src=`https://picsum.photos/id/1032/400/400`}}/>
						</div>
						<div className="col-md-3">
								<div className="card-body">
									<h2 className="card-title text-danger">{planet.properties.name}</h2>
									<p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
								</div>
						</div>
					</div>
						<hr className="bg-success border-3 border-top border-success" />
						<div className="row align-items-center text-success" style={{margin: "1rem 0"}}>
							<div className="col text-center">
								<h5> Description </h5>
								<p> {planet.description} </p>
							</div>
							<div className="col text-center">
								<h5> Climate </h5>
								<p> {planet.properties.climate} </p>
							</div>
							<div className="col text-center">
								<h5> Terrain </h5>
								<p> {planet.properties.terrain} </p>
							</div>
							<div className="col text-center">
								<h5> Gravity </h5>
								<p> {planet.properties.gravity} </p>
							</div>
							<div className="col text-center">
								<h5> Population </h5>
								<p> {planet.properties.population} </p>
							</div>
						</div>
				</div>
								)							
							:""}
			</Fragment>
		)
		

}