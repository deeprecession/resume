import moment from "moment";
import Image from "next/image";

interface Comic {
	img: string;
	alt: string;
	safe_title: string;
	year: number;
	month: number;
	day: number;
}

export default async function Comic() {
	async function fetchComicInfo(id: string) {
		const url = new URL("https://fwd.innopolis.university/api/comic");
		url.searchParams.append("id", id);

		let comicJson: Promise<Comic>;
		try {
			const response = await fetch(url);
			comicJson = await response.json();
		} catch (error) {
			console.error("failed to make a request:", error);

			return null;
		}

		return comicJson;
	}

	async function fetchID() {
		const url = new URL("https://fwd.innopolis.university/api/hw2");
		url.searchParams.append("email", "v.kishkovksiy@innopolis.university");

		let response: Response;
		try {
			response = await fetch(url);
		} catch (error) {
			console.error("failed to make a request:", error);

			return null;
		}

		return await response.text();
	}

	const id = await fetchID();
	if (!id) {
		return <div>Failed to load comic ID.</div>;
	}

	const comic = await fetchComicInfo(id);
	if (!comic) {
		return <div>Failed to load comic data.</div>;
	}

	return (
		<div className="comic">
			<div className="comic-title">{comic.safe_title}</div>
			<Image
				width={50}
				height={50}
				src={comic.img}
				alt={comic.alt}
				className="comic-image"
			></Image>
			<div className="comic-upload-date">
				{moment([comic.year, comic.month, comic.day]).fromNow()}
			</div>
		</div>
	);
}
