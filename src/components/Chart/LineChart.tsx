import React, {
	useContext,
	useEffect,
	useState,
	useCallback,
	useMemo,
} from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { useFetch, useLocalStorage } from "../../hooks";
import { AppContext } from "./../../store";
import { filterChartData } from "./../../helpers";

// Register Chart Types
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

// Line chart component
const LineChart: React.FC | any = () => {
	// Get local storage data
	const [storage] = useLocalStorage();

	const navigate = useNavigate();
	// Get list of data, current country school and camp
	const { data, error } = useFetch();
	const {
		selectedCountry,
		updateCountry,
		selectedCamp,
		updateCamp,
		selectedSchool,
		updateSchool,
	} = useContext(AppContext);
	const [chartData, setChartData] = useState<any>({
		labels: [
			"Jan",
			"Feb",
			"March",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [],
	});
	// Update filtered chart data based on county, camp or school change
	useEffect(() => {
		const getData = Object.keys(data).length
			? filterChartData(
					data.allData,
					selectedCountry,
					selectedCamp,
					selectedSchool
			  )
			: [];
		setChartData({ ...chartData, datasets: getData });
	}, [selectedCountry, selectedCamp, selectedSchool, data]);

	// Fetch localStorage data on first mount
	useMemo(() => {
		if (Object.keys(storage).length) {
			Object(storage as object).hasOwnProperty("country") &&
				storage.country !== "" &&
				updateCountry(storage.country as string);
			Object(storage as object).hasOwnProperty("camp") &&
				storage.camp !== "" &&
				updateCamp(storage.camp as string, false);
			Object(storage).hasOwnProperty("school") &&
				storage.country !== "" &&
				updateSchool(storage.school as string, false);
		}
	}, []);

	// Line chart
	const renderChart = (
		<Line
			data-testid="line-chart-container"
			data={chartData}
			options={{
				onClick: (event, element: any) => {
					if (element.length) {
						// Get clicked school data
						let index = element[0].datasetIndex;
						let school = chartData.datasets[index];

						// Update selected school
						updateSchool(school.label, false);

						// Navigate to details page
						navigate("/details");
					}
				},
				plugins: {
					title: {
						display: true,
						text: "Click to toggle schools",
					},
					legend: {
						display: true,
						position: "right",
						labels: {
							usePointStyle: true,
						},
					},
				},
			}}
		/>
	);

	return error || data.length < 1
		? `<span data-testid="error-container"><Error ${
				error ? error : "Invalid Data, Chart Data Is Empty"
		  }/span>`
		: renderChart;
};
export default LineChart;
