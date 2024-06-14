async function fetch_id() {
	let url = new URL("https://fwd.innopolis.university/api/hw2");

	url.searchParams.append("email", "v.kishkovksiy@innopolis.university");

	let response = await fetch(url);

	try {
		if (response.ok) {
			console.log(response);
		} else {
			console.error(
				"failed to make a request to:",
				response.url,
				"response:",
				response.status,
			);
		}
	} catch (error) {
		console.error(
			"failed to make a request to:",
			response.url,
			"response:",
			response.status,
		);
	}
}

fetch_id();
