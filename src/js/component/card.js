import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "./icons.js";
import Proptypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="card m-0 py-2">
			<h2 className="card-title text-center text-white">
				{props.iconReloj ? props.iconReloj : props.number}
			</h2>
		</div>
	);
}

Card.propTypes = {
	iconReloj: Proptypes.element,
	number: Proptypes.number
};
