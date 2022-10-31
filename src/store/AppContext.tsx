import React, { createContext, useReducer } from "react";
import { default as appReducer, initialState, ChartType } from "./appReducer";
export const AppContext = createContext(initialState);
const AppProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	const updateCountry = (country: string): void => {
		dispatch({
			type: "UPDATE_COUNTRY",
			payload: {
				...state,
				country: country,
			},
		});
	};
	const updateCamp = (camp: string): void => {
		dispatch({
			type: "UPDATE_CAMP",
			payload: {
				...state,
				camp: camp,
			},
		});
	};
	const updateSchool = (school: string): void => {
		dispatch({
			type: "UPDATE_SCHOOL",
			payload: {
				...state,
				school: school,
			},
		});
	};

	const updateTheme = (themeMode: string): void => {
		dispatch({
			type: "UPDATE_THEME",
			payload: {
				...state,
				themeMode: themeMode,
			},
		});
	};

	const updateLoading = (status: boolean): void => {
		dispatch({
			type: "UPDATE_LOADING",
			payload: {
				...state,
				loading: status,
			},
		});
	};

	return (
		<AppContext.Provider
			value={
				{
					selectedCountry: state.selectedCountry,
					selectedSchool: state.selectedSchool,
					selectedCamp: state.selectedCamp,
					updateSchool: updateSchool,
					updateCamp: updateCamp,
					updateCountry: updateCountry,
					themeMode: state.themeMode,
					updateTheme: updateTheme,
					loading: state.loading,
					updateLoading: updateLoading,
				} as any
			}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
