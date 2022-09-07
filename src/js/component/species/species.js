import React, {useContext} from 'react'
import {Context} from '../../store/appContext'

import PreviewAll from "../../views/previewAll.js";

export default function Species() {
    const {store, actions} = useContext(Context)
		
		for (var i = 1; i<=(Math.round(store.specieTotal/12)); i++){
			var Pages = [...Pages,i]
		}

	return (
		<div style={{margin: "5rem 0 0"}}>
			<h1 className="text-start" style={{margin: "1rem"}}>Species</h1>
			<div className="row row-cols-1 row-cols-md-4 g-4 p-0 m-0">
				<PreviewAll items={store.species}/>
			</div>
			<div className="m-4">
				<nav aria-label="Page navigation example">
					<ul className="pagination d-flex justify-content-center">
						{Pages? Pages.map((page, index) => {
							if (page != null) {
								return (
									<li key={index} className="page-item">
										<button className="page-link" onClick={() => actions.goToPageSpecies(page)}>{page}</button>
									</li>
								)
							}
						}
						):""}
					</ul>
				</nav>
			</div>
		</div>
	)
};