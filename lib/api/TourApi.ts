export async function fetchTouristStates() {
	const url = 'https://world-tourist-attractions-api.p.rapidapi.com/state';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '0ab9940caemsh44cfd8edda63bcap16a66ejsnd474e8179036',
			'x-rapidapi-host': 'world-tourist-attractions-api.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`API Error: ${response.status} - ${response.statusText}`);
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function loadStates() {
	const data = await fetchTouristStates();
	console.log(data);
}

const url = 'https://world-tourist-attractions-api.p.rapidapi.com/api/famous_locations';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0ab9940caemsh44cfd8edda63bcap16a66ejsnd474e8179036',
		'x-rapidapi-host': 'world-tourist-attractions-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}