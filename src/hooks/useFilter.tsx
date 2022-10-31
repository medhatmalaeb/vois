import React, { useState, useEffect, useContext } from "react";
import { useFetch } from "./";
import { AppContext } from "../store";
import { removeDuplicates, filterChartData } from "./../helpers";

const useFilter = () => {
	// Get data from the api
	const { data, error } = useFetch();
	const { camps } = data;

	// Get current country, camp and school
	const { selectedSchool, selectedCamp, selectedCountry } = useContext(
		AppContext
	);
	// Store filtered schools
	const [schoolData, setSchoolData] = useState<any>({});

	// Store error message
	const [filterError, setFilterError] = useState<any>();

	// Filter data, return current school data
	const filterData = () => {
		return filterChartData(data, selectedCountry , '' , '');
	};

	useEffect(() => {
		filterData();
	}, []);

	return {
		schoolData,
		filterError,
		error,
	};
};

export default useFilter;
