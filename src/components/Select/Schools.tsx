import React, { useContext, useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useFetch, useLocalStorage } from "./../../hooks";
import { AppContext } from "../../store";

const SchoolsList: React.FC = () => {
	// Get local storage data
	const [storage, updateStorage ] = useLocalStorage();

	// Get list of schools
	const { data, error } = useFetch();
	const { schools } = data;

	// Get current camp, school
	const { selectedSchool, updateSchool } = useContext(AppContext);
	const handleChange = (event: SelectChangeEvent) => {
		updateStorage({ ...storage, school: event.target.value as string });
		updateSchool(event.target.value, true);
	};

	return (
		<>
			{!schools || error ? (
				<div>Loading</div>
			) : (
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Select School
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						data-testid="schools"
						value={selectedSchool}
						label="School"
						onChange={handleChange}
					>
						<MenuItem value={"all"}>Show All</MenuItem>
						{schools.length ? (
							schools.map((item: any) => (
								<MenuItem key={item.id} value={item.school}>
									{item.school}
								</MenuItem>
							))
						) : (
							<MenuItem></MenuItem>
						)}
					</Select>
				</FormControl>
			)}
		</>
	);
};

export default SchoolsList;
