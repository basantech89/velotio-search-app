const SERVER_URI = process.env.REACT_APP_API_URL;

const fetchCompanies = async () => {
	try {
		const url = `${SERVER_URI}companies`;
		const response = await fetch(url);
		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export { fetchCompanies };
