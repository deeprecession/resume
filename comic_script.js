async function loadComicImage() {
	let id = await fetchID();
	if (id === null) {
		return;
	}

	let comicJson = await fetchComicInfo(id);
	if (comicJson === null) {
		return;
	}

	let comicElement = createComicElement(comicJson);
	placeComicElement(comicElement);
}

function createComicElement(comicJson) {
	let comicImage = document.createElement("img");
	comicImage.src = comicJson.img;
	comicImage.alt = comicJson.alt;
	comicImage.className = "comic-image";

	let comicTitle = document.createElement("div");
	comicTitle.textContent = comicJson.safe_title;
	comicTitle.className = "comic-title";

	let comicUploadDateElement = document.createElement("div");
	let comicUploadDate = new Date(
		comicJson.year,
		comicJson.month,
		comicJson.day,
	);
	comicUploadDateElement.textContent =
		comicUploadDate.toLocaleDateString("en-GB");
	comicUploadDateElement.className = "comic-upload-date";

	let comicElement = document.createElement("div");
	comicElement.appendChild(comicTitle);
	comicElement.appendChild(comicImage);
	comicElement.appendChild(comicUploadDateElement);
	comicElement.className = "comic";

	return comicElement;
}

function placeComicElement(comicElement) {
	document.body.appendChild(comicElement);
}

async function fetchComicInfo(id) {
	let url = new URL("https://fwd.innopolis.university/api/comic");
	url.searchParams.append("id", id);

	let comicJson, response;
	try {
		let response = await fetch(url);
		comicJson = await response.json();
	} catch (error) {
		console.error(
			"failed to make a request to:",
			response.url,
			"response:",
			response.status,
		);

		return null;
	}

	return comicJson;
}

async function fetchID() {
	let url = new URL("https://fwd.innopolis.university/api/hw2");
	url.searchParams.append("email", "v.kishkovksiy@innopolis.university");

	let response;
	try {
		response = await fetch(url);
	} catch (error) {
		console.error(
			"failed to make a request to:",
			response.url,
			"response:",
			response.status,
		);

		return null;
	}

	return await response.text();
}

document.addEventListener("DOMContentLoaded", loadComicImage);
