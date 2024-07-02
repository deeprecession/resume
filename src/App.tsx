import { Link, Outlet } from "react-router-dom";

export default function App() {
	return (
		<>
			<Info />
			<Outlet />
		</>
	);
}

function Info() {
	return (
		<>
			<div id="blog-author">Vladislav Kishkovskiy</div>

			<div id="info">
				<div id="contacts">
					<a
						id="gh-link"
						className="link-img"
						href="https://github.com/deeprecession/"
					>
						<img src="github-mark.svg" alt="GitHub svg" />
						<div>GitHub</div>
					</a>

					<span className="separator">|</span>

					<a
						id="tg-link"
						className="link-img"
						href="https://t.me/deeprecession"
					>
						<img src="telegram-mark.svg" alt="telegram svg" />
						<span>Telegram</span>
					</a>

					<span className="separator">|</span>

					<a
						id="email"
						className="link-img"
						href="mailto:v.kishkovskiy@innopolis.university"
					>
						<img src="email-mark.svg" alt="email svg" />
						<span>Email</span>
					</a>
				</div>

				<div id="navigation">
					<Link to={""}>About</Link>
					<span className="separator">|</span>
					<Link to={"blog"}>Blog</Link>
					<span className="separator">|</span>
					<Link to={"comic"}>Comic</Link>
				</div>
			</div>
		</>
	);
}
