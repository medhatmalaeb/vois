import React from "react";
import { render, act, screen, cleanup, waitFor } from "@testing-library/react";
import { LineChart } from "./../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "../store";
import { default as mockFetch } from "./../mocks/mockFetch";
import testData from "./../data/testData";
import "mutationobserver-shim";

describe("Testing Line Chart", () => {
	afterEach(() => {
		cleanup();
	});

	// Failed to load data
	test("Failed to load data", async () => {
		await mockFetch(testData as []);
		await act(async () => {
			render(
				<Router>
					<Routes>
						<Route
							path="/"
							element={
								<AppProvider value={{ loading: false }}>
									<LineChart />
								</AppProvider>
							}
						/>
					</Routes>
				</Router>
			);
		});
		const getChartContainer = screen.getByTestId("line-chart-container");
		expect(getChartContainer).toBeInTheDocument();
	});
});
