import React, { useState, useEffect } from "react";
import "./icons.js";
import { Digits } from "./digits.js";

//include images into your bundle

//create your first component
export function Home() {
	const [myInterval, setMyInterval] = useState(null);
	const [seconds, setSeconds] = useState("0");

	useEffect(() => {
		let interval = setInterval(function() {
			setSeconds(seconds => (parseInt(seconds) + 1).toString());
		}, 1000);
		setMyInterval(interval);
	}, []);

	function pauseCounter() {
		clearInterval(myInterval);
		setMyInterval(null);
	}

	function startCounter() {
		clearInterval(myInterval);
		let interval = setInterval(function() {
			setSeconds(seconds => (parseInt(seconds) + 1).toString());
		}, 1000);
		setMyInterval(interval);
	}

	function resetCounter() {
		clearInterval(myInterval);
		setMyInterval(null);

		setSeconds(seconds => (seconds = "0"));

		startCounter();
	}

	function secondDigits() {
		let digits = [];
		let secondsReverse = seconds.split("").reverse();

		for (let i = 5; i >= 0; i--) {
			if (seconds[i] === "undefined") {
				digits = [...digits, "0"]; //¿Por qué no funciona?, tuve que usar un condicional ternario para imprimir el cero cuando no existe un valor
			} else {
				digits = [...digits, secondsReverse[i]];
			}
		}
		return digits;
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-8 mx-auto bg-light p-4">
					<h2 className="text-muted text-center">Seconds Counter</h2>
					<div className="jumbotron p-3">
						<div className="card-deck">
							<div className="card m-0 py-2">
								<h2 className="card-title text-center text-white">
									{<i className="far fa-clock"></i>}
								</h2>
							</div>
							{secondDigits().map((digit, index) => (
								<Digits
									key={index}
									digit={digit ? digit : "0"}
								/>
							))}
						</div>
					</div>
					<div
						className="btn btn-dark btn-lg text-white"
						onClick={pauseCounter}>
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
