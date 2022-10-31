export const initialState = {
	selectedCountry: "Egypt",
	updateCountry: (updateCountry: string) => {},
	selectedCamp: "",
	updateCamp: (camp: string, basedOnCountry: boolean) => {},
	selectedSchool: "",
	updateSchool: (school: string, basedOnCamp: boolean) => {},
	themeMode: "light",
	updateTheme: (theme: string) => {},
	loading: false,
	updateLoading: (status: boolean) => {}
};

export type ChartType = typeof initialState;

const appReducer = (state: ChartType, action: any): any => {
	const { type, payload } = action;
	switch (type) {
		case "UPDATE_COUNTRY":
			return {
				...state,
				selectedCountry: payload.country,
			};
			break;
		case "UPDATE_CAMP":
			return {
				...state,
				selectedCamp: payload.camp,
			};
			break;
		case "UPDATE_SCHOOL":
			return {
				...state,
				selectedSchool: payload.school,
			};
			break;
		case "UPDATE_THEME":
			return {
				...state,
				themeMode: payload.themeMode,
			};
			break;
		case "UPDATE_LOADING":
			return {
				...state,
				loading: payload.loading,
			};
			break;
		default:
			throw new Error(`${type} is not a valid reducer type`);
	}
};

export default appReducer;
