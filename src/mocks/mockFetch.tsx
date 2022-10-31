const mockFetch = (data: []) => {
	return (global.fetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			json: () => data,
		})
	));
};

export default mockFetch;
