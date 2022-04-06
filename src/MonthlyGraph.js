import React, { useEffect } from "react";
import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle,
} from "chart.js";
Chart.register(
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle
);

const MonthlyGraph = ({ graphStyling, balance, years }) => {
	const data = {
		labels: years,
		datasets: [
			{
				label: "monthly mortgage regression",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: balance,
			},
		],
	};

	const config = {
		type: "line",
		data: data,
		options: {},
	};
	useEffect(() => {
		new Chart(document.getElementById("myChart"), config);
		return () => console.log("cleaned");
	}, []);

	return (
		<div className={graphStyling}>
			<canvas id="myChart" width="600" height="230"></canvas>
		</div>
	);
};

export default MonthlyGraph;
