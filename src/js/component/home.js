import React, { useState, useEffect } from "react";
import "./icons.js";
import { Card } from "./card.js";

//include images into your bundle

//create your first component
export function Home() {
	const [myInterval, setMyInterval] = useState(null);
	const [digito1, setDigito1] = useState(0);
	const [digito2, setDigito2] = useState(0);
	const [digito3, setDigito3] = useState(0);
	const [digito4, setDigito4] = useState(0);

	useEffect(() => {
		let interval = setInterval(function() {
			setDigito1(digito1 => digito1 + 1);
		}, 1000);

		setMyInterval(interval);
	}, []);

	if (digito1 > 9) {
		setDigito2(digito2 => digito2 + 1);
		setDigito1(digito1 => (digito1 = 0));
	} else if (digito2 > 9) {
		setDigito3(digito3 => digito3 + 1);
		setDigito2(digito2 => (digito2 = 0));
		setDigito1(digito1 => (digito1 = 0));
	} else if (digito3 > 9) {
		setDigito4(digito4 => (digito4 + 1) % 10);
		setDigito3(digito3 => (digito3 = 0));
		setDigito2(digito2 => (digito2 = 0));
		setDigito1(digito1 => (digito1 = 0));
	}

	const numbers = [
		{ digito: digito4 },
		{ digito: digito3 },
		{ digito: digito2 },
		{ digito: digito1 }
	];

	function stopCounter() {
		clearInterval(myInterval);
		setMyInterval(null);
	}

	function startCounter() {
		let interval = setInterval(function() {
			setDigito1(digito1 => digito1 + 1);
		}, 1000);
		setMyInterval(interval);

		clearInterval(myInterval);
	}

	function resetCounter() {
		clearInterval(myInterval);
		setMyInterval(null);

		setDigito1(digito1 => (digito1 = 0));
		setDigito2(digito2 => (digito2 = 0));
		setDigito3(digito3 => (digito3 = 0));
		setDigito4(digito4 => (digito4 = 0));

		startCounter();
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-8 mx-auto">
					<div className="jumbotron p-3">
						<div className="card-deck">
							<Card
								iconReloj={<i className="far fa-clock"></i>}
							/>
							{numbers.map((number, index) => (
								<Card
									key={"digito" + [index]}
									number={number.digito}
								/>
							))}
						</div>
					</div>
					<div
						className="btn btn-dark btn-lg text-white"
						onClick={stopCounter}>
						<i className="fas fa-pause"></i>
					</div>
					<div
						className="btn btn-dark btn-lg text-white mx-1"
						onClick={startCounter}>
						<i className="fas fa-play"></i>
					</div>
					<div
						className="btn btn-dark btn-lg text-white"
						onClick={resetCounter}>
						<i className="fas fa-sync"></i>
					</div>
				</div>
			</div>
		</div>
	);
}
