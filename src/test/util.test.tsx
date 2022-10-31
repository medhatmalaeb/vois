import { default as testData } from "./../data/testData";
import { filterChartData } from "./../helpers";

describe("Helper Functions", () => {
	// Test country filter
	test("Test Country Filter", () => {
		const getData = Object.keys(testData).length
			? (filterChartData(testData as [], "Egypt", "", "") as [])
			: [];

		// Check if data is not empty
		expect(getData.length).toBeGreaterThan(0);
		expect(getData[0]).toEqual(
			expect.objectContaining({
				data: expect.any(Array),
				label: expect.any(String),
			})
		);
	});

	// Test camp filter
	test("Test Camp Filter", () => {
		const getData = Object.keys(testData).length
			? (filterChartData(testData as [], "Egypt", "Omaka", "") as [])
			: [];
		// Check if data is not empty
		expect(getData.length).toBeGreaterThan(0);
		expect(getData[0]).toEqual(
			expect.objectContaining({
				data: expect.any(Array),
				label: expect.any(String),
			})
		);
	});

	// Test school filter
	test("Test School Filter", () => {
		const getData = Object.keys(testData).length
			? (filterChartData(
					testData as [],
					"Egypt",
					"Omaka",
					"Greenlight"
			  ) as [])
			: [];
		// Check if data is not empty
		expect(getData.length).toBeGreaterThan(0);
		expect(getData[0]).toEqual(
			expect.objectContaining({
				data: expect.any(Array),
				label: expect.any(String),
			})
		);
	});
});
