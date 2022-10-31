import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Link,
	Paper,
} from "@mui/material";
import { useFetch } from "../../hooks";
import { getSchoolDetails } from "../../helpers";
import { AppContext } from "./../../store";

const SchoolDetails: React.FC = () => {
	const { data, error } = useFetch();
	const navigate = useNavigate();

	const { selectedCountry, selectedCamp, selectedSchool } = useContext(
		AppContext
	);
	const [currentSchoolDetails, setCurrentSchoolDetails] = useState<[]>([]);

	useEffect(() => {
		const getData = Object.keys(data).length
			? getSchoolDetails(
					data.allData,
					selectedCountry,
					selectedCamp,
					selectedSchool
			  )
			: [];
		setCurrentSchoolDetails(getData);
	}, [data]);

	// Get current school details based con selectedCountry and selectedCamp
	return (
		<Grid className="section-container" container spacing={2}>
			<Grid item xs={8}>
				<Link
					component="button"
					variant="body2"
					onClick={() => {
						navigate("/");
					}}
				>
					Go back
				</Link>
				{currentSchoolDetails.length ? (
					<>
						<h4 className="section-heading">
							<b>{selectedSchool}</b> Details
						</h4>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 650 }}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										{[
											"Country",
											"Camp",
											"# Of Lessons",
											"Month",
										].map((item) => {
											return (
												<TableCell
													key={item
														.toLowerCase()
														.replace(" ", "")}
													align="left"
												>
													{item}
												</TableCell>
											);
										})}
									</TableRow>
								</TableHead>
								<TableBody>
									{currentSchoolDetails.map((school: any) => {
										return (
											<TableRow
												key={school.id}
												sx={{
													"&:last-child td, &:last-child th": {
														border: 0,
													},
												}}
											>
												<TableCell align="left">
													{school.country}
												</TableCell>
												<TableCell align="left">
													{school.camp}
												</TableCell>
												<TableCell align="left">
													{school.lessons}
												</TableCell>
												<TableCell align="left">
													{school.month}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</TableContainer>
					</>
				) : (
					<p>Please select a school</p>
				)}
			</Grid>
		</Grid>
	);
};
export default SchoolDetails;
