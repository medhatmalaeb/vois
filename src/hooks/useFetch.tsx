import { useEffect, useState } from "react";
import Config from "./../config";

/* Filter data fetched from the api */
const filterData = (data: [], type: string) => {
	return data.filter((item: any, index: number) => {
		return (
			index === data.findIndex((second) => item[type] === second[type])
		);
	});
};
/* Fetch charts data */
const useFetch = () => {
	// Store data and updated countries, schools and camps list
	const [data, setData] = useState<any>({});

	// Store error message
	const [error, setError] = useState<any>();

	// Fetch data
	const getAPIData = async () => {
		try {
			const response = await fetch(Config.dataURL);
			const resData = await response.json();

			// Update schools, camps and countries
			setData({
				...data,
				allData: resData,
				countries: filterData(resData, "country"),
				camps: filterData(resData, "camp"),
				schools: filterData(resData, "school"),
			});
		} catch (err) {
			return setError(err);
		}
	};

	useEffect(() => {
		getAPIData();
	}, []);
	return { data, error };
};
export default useFetch;
