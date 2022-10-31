export const generateColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Remove duplicated based on object key
export const removeDuplicates = (data: any, key: string) => {
	const updatedData = new Map(
		data.map((item: any) => [item[key], item])
	).values();
	return [...(updatedData as any)];
};

// Group schools by month
export const groupSchoolsByMonth = (schools: any): [] => {
	const months = [
		"Jan",
		"Feb",
		"March",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const updatedData: any = [];

	// loop through data, and create an entry with school as a label
	schools.forEach((entry: any) => {
		// Accent color
		let accentColorList = Array(2).fill(generateColor());

		// Filter school data per months
		const schoolMonthsData = Array.from(Array(12).fill(0));
		let monthIndex = months.indexOf(entry.month);
		schoolMonthsData[monthIndex] = entry.lessons;
		updatedData.push({
			label: entry.school,
			data: schoolMonthsData,
			backgroundColor: accentColorList,
			borderWidth: "2",
			borderColor: accentColorList[0],
			tension: 0.2,
			spanGaps: true,
			pointHitRadius: "2",
			pointRadius: "2",
		});
	});

	return updatedData;
};
// Filter data based on country
export const filterChartData = (
	data: [],
	country: string,
	camp: string,
	school: string
): object => {
	const getAllSchools = data.filter((record: any) => {
		let condition = true;
		if (country !== "") {
			condition = record.country === country;
		}
		if (camp !== "") {
			condition = record.camp === camp;
		}
		if (school !== "" && school !== "all") {
			condition = record.school === school;
		}
		return condition;
	});
	const filterSchools = removeDuplicates(getAllSchools, "school");
	return groupSchoolsByMonth(filterSchools);
};

// Get school details
export const getSchoolDetails = (
	data: [],
	country: string | null,
	camp: string | null,
	school: string | null
): any => {
	console.log(school);
	const getAllSchools = data.filter((record: any) => {
		return record.school === school;
	});
	return getAllSchools;
};
