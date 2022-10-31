import React, { useEffect } from "react";
import { render, act, screen, waitFor } from "@testing-library/react";
import { AppProvider } from "./../store";
import { CampsList, CountriesList, SchoolsList } from "./../components";
import { default as mockFetch } from "./../mocks/mockFetch";
import testData from "../data/testData";
import "mutationobserver-shim";

// Testing select menu values
describe("Testing Select Menus", () => {
	// Test countries list
	test("Test Countries Menu", async () => {
		await mockFetch(testData as []);
		render(
			<AppProvider
				value={{
					loading: false,
				}}
			>
				<CountriesList />
			</AppProvider>
		);
		await waitFor(() => {
			expect(screen.queryByTestId("countries")).toHaveTextContent(
				"Egypt"
			);
		});
	});

	// Test camps list
	test("Test Camps Menu", async () => {
		await mockFetch(testData as []);
		render(
			<AppProvider
				value={{
					loading: false,
				}}
			>
				<CampsList />
			</AppProvider>
		);
		await waitFor(() => {
			expect(screen.queryByTestId("camps")).toHaveTextContent("Camp");
		});
	});

	// Test schools list
	test("Test Schools Menu", async () => {
		await mockFetch(testData as []);
		render(
			<AppProvider
				value={{
					loading: false,
				}}
			>
				<SchoolsList />
			</AppProvider>
		);
		await waitFor(() => {
			expect(screen.queryByTestId("schools")).toHaveTextContent("School");
		});
	});
});
