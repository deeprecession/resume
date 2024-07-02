import moment from "moment";
import { useEffect, useState } from "react";

interface Comic {
	img: string;
	alt: string;
	safe_title: string;
	year: number;
	month: number;
	day: number;
}

export default function Comic() {
	const [comic, setComic] = useState<Comic | null>(null);

	useEffect(() => {
		loadComicImage();
	}, []);

	async function loadComicImage() {
		let id: string | null = await fetchID();
		if (id === null) {
			return;
		}

		let comicJson: Comic = await fetchComicInfo(id);
		if (comicJson === null) {
			return;
		}

		setComic(comicJson);
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

	return comic ? (
		<div className="comic">
			<div className="comic-title">{comic.safe_title}</div>
			<img src={comic.img} alt={comic.alt} className="comic-image"></img>
			<div className="comic-upload-date">
				{moment([comic.year, comic.month, comic.day]).fromNow()}
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);
}
