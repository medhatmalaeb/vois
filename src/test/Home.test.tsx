import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Home } from "./../pages";
import { default as testData } from "./../data/testData";
import { default as mockFetch } from "./../mocks/mockFetch";
import { AppProvider } from "./../store";
import "mutationobserver-shim";

describe("Loading Main Component", () => {
	// Mock API data and render the main component
	test("Mock fetch API, and render main component", async () => {
		await mockFetch(testData as []);
		act(() => {
			render(
				<AppProvider
					value={{ loading: false, selectedCountry: "Egypt" }}
				>
					<Home />
				</AppProvider>
			);
		});
		const getAppBar = await screen.findByTestId("app-bar-title");
		expect(getAppBar).toBeInTheDocument();
	});
});
