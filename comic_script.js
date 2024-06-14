async function fetch_id() {
	let url = new URLSearchParams("https://fwd.innopolis.university/api/hw2");

	url.append("email", "v.kishkovksiy@innopolis.university");

	console.log(url.toString());

	let response = await fetch(url);
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
}

fetch_id();
