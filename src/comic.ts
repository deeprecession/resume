"use strict";

import moment from "moment";

interface Comic {
	img: string;
	alt: string;
	safe_title: string;
	year: number;
	month: number;
	day: number;
}

export async function loadComicImage() {
	let id: string | null = await fetchID();
	if (id === null) {
		return;
	}

	let comicJson: Comic = await fetchComicInfo(id);
	if (comicJson === null) {
		return;
	}

	let comicElement = createComicElement(comicJson);
	placeComicElement(comicElement);
}

function createComicElement(comicJson: Comic) {
	let comicImage = document.createElement("img");
	comicImage.src = comicJson.img;
	comicImage.alt = comicJson.alt;
	comicImage.className = "comic-image";

	let comicTitle = document.createElement("div");
	comicTitle.textContent = comicJson.safe_title;
	comicTitle.className = "comic-title";

	let comicUploadDateElement = document.createElement("div");
	let fromNow = moment([
		comicJson.year,
		comicJson.month,
		comicJson.day,
	]).fromNow();
	comicUploadDateElement.textContent = fromNow;
	comicUploadDateElement.className = "comic-upload-date";

	let comicElement = document.createElement("div");
	comicElement.appendChild(comicTitle);
	comicElement.appendChild(comicImage);
	comicElement.appendChild(comicUploadDateElement);
	comicElement.className = "comic";

	return comicElement;
}

function placeComicElement(comicElement: HTMLElement) {
	document.body.appendChild(comicElement);
}

async function fetchComicInfo(id: string) {
	let url = new URL("https://fwd.innopolis.university/api/comic");
	url.searchParams.append("id", id);

	let comicJson;
	try {
		let response = await fetch(url);
		comicJson = await response.json();
	} catch (error) {
		console.error("failed to make a request:", error);

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
		console.error("failed to make a request:", error);

		return null;
	}

	return await response.text();
}
