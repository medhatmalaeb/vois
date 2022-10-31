import React, { useState, useCallback, useEffect } from "react";

const useLocalStorage = () => {
	// Store storage object
	const [storage, updateStorage] = useState<any>(() => {
		let currentStorage = localStorage.getItem("chart-data");
		return currentStorage !== null
			? JSON.parse(currentStorage as any)
			: storage;
	});

	// Fetch current storage when the component is mounted
	useEffect(() => {
		if (typeof window === undefined) return;
		setTimeout(() => {
			localStorage.setItem(
				"chart-data",
				JSON.stringify(storage ? storage : {})
			);
		}, 500);
	}, [storage]);
	return [storage, updateStorage];
};

export default useLocalStorage;
