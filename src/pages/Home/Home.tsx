import React, { useState, useContext, useEffect } from "react";
import { Grid, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	Header,
	Navigation,
	Chart,
	Loading,
	SchoolDetails,
} from "./../../components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppContext } from "../../store";
import "./../../assets/css/App.css";

/* Home Page Container */
const Home: React.FC = () => {
	// Get current theme mode: string
	const { themeMode, loading, updateLoading } = useContext(AppContext);
	const [currentTheme, setCurrentTheme] = useState<any>(
		createTheme({
			palette: {
				mode: themeMode as any,
			},
		})
	);

	// Update theme when themeMode value changes
	useEffect(() => {
		return setCurrentTheme(
			createTheme({
				palette: {
					mode: themeMode as any,
				},
			})
		);
	}, [themeMode]);

	// Remove loading screen on mount
	useEffect(() => {
		// timeout is used for testing purposes, could be removed on production
		setTimeout(() => {
			updateLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<ThemeProvider theme={currentTheme}>
				<CssBaseline />
				{loading ? (
					<Loading />
				) : (
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Header />
						</Grid>
						<Grid item xs={12}>
							<Navigation />
						</Grid>
						<Grid item xs={12}>
							<Router>
								<Routes>
									<Route path="/" element={<Chart />} />
									<Route
										path="/details"
										element={<SchoolDetails />}
									/>
								</Routes>
							</Router>
						</Grid>
					</Grid>
				)}
			</ThemeProvider>
		</>
	);
};

export default Home;
