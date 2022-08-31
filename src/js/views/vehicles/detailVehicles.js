import React, { Fragment, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import {Context} from '../../store/appContext'

export default function DetailsVehicles(){
	const {store, actions}=useContext(Context)
	const params = useParams();
	const {vehicle} = store;

	useEffect(async()=>{
		console.log("Component did mount")
		await actions.loadVehicle(params.vehiclesId)

	},[])
		return (
			<Fragment>
				{vehicle? (
					<div className="card container border-0">
						<div className="row g-0" style={{margin: "2rem 0"}}>
							<div className="col-md-9 text-center m-auto">
								<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} 
								onError={(e)=>{e.target.onerror = null; e.target.src=`https://picsum.photos/id/1071/600/400`}}/>
							</div>
							<div className="col-md-3">
									<div className="card-body">
										<h2 className="card-title text-danger">{vehicle.properties.name}</h2>
										<p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
									</div>
							</div>
						</div>
							<hr className="bg-success border-3 border-top border-success" />
							<div className="row align-items-center text-success" style={{margin: "1rem 0"}}>
								<div className="col text-center">
									<h5> Model </h5>
									<p> {vehicle.properties.model} </p>
								</div>
								<div className="col text-center">
									<h5> Vehicle Class </h5>
									<p> {vehicle.properties.vehicle_class} </p>
								</div>
								<div className="col text-center">
									<h5> Manufacturer </h5>
									<p> {vehicle.properties.manufacturer} </p>
								</div>
								<div className="col text-center">
									<h5> Cost (in credits) </h5>
									<p> {vehicle.properties.cost_in_credits} </p>
								</div>
								<div className="col text-center">
									<h5> Max speed (atmosphering) </h5>
									<p> {vehicle.properties.max_atmosphering_speed} </p>
								</div>
							</div>
					</div>
				) : ""}
			</Fragment>
		)
}
