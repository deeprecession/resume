import Image from "next/image";

export default function Projects() {
	return (
		<div id="projects-container">
			<h1>Projects</h1>

			<div className="project">
				<h2>todolist-htmx-golang</h2>

				<a
					className="link-img"
					href="https://github.com/deeprecession/todolist-htmx-golang"
				>
					<Image
						width={50}
						height={50}
						src="github-mark.svg"
						alt="GitHub svg"
					/>
					<span>GitHub</span>
				</a>

				<p>
					A simplest tasklist web application as a show case for HTMX in Golang
				</p>

				<h3>stack</h3>
				<ul>
					<li>Go (Golang): backend</li>
					<li>echo: just wanted to try it</li>
					<li>
						HTMX: Library for making AJAX requests and updating parts of a web
						page
					</li>
					<li>
						Tailwind CSS: I often heard about it so I decided to try it and I
						like how easy it is to use in small projects
					</li>
					<li>
						Docker: Containerization for PostgreSQL, Redis, Prometheus, and
						WebApp
					</li>
					<li>PostgreSQL: stores registered users and their tasks</li>
					<li>Redis: caches sessions</li>
					<li>Prometheus: was added just because</li>
					<li>
						Make: contain many commands that are I&apos;m too lazy to write
						again
					</li>
				</ul>
			</div>

			<div className="project">
				<h2>moodle-notifications</h2>

				<a
					className="link-img"
					href="https://github.com/deeprecession/moodle-notifications"
				>
					<Image
						width={50}
						height={50}
						src="github-mark.svg"
						alt="GitHub svg"
					/>
					<span>GitHub</span>
				</a>

				<p>
					a simple grades notifyer for Innopolis Moodle that periodically
					fetches all grade information from Moodle and reports about important
					changes
				</p>

				<h3>stack</h3>
				<ul>
					<li>Golang</li>
					<li>gjson: tool for JSON parsing</li>
					<li>diff: tool for comparison between structs</li>
					<li>
						telegram-bot-api: used as an interface to send messages in Telegram
					</li>
					<li>Docker</li>
				</ul>
			</div>
		</div>
	);
}
