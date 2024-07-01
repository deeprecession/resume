export default function App() {
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
					<a href="index.html">About</a>
					<span className="separator">|</span>
					<a href="blog.html">Blog</a>
					<span className="separator">|</span>
					<a href="comic.html">Comic</a>
				</div>
			</div>

			<div id="about-container">
				<div id="skills">
					<h1>Tech Stack</h1>
					<ul>
						<li>Golang</li>
						<li>PostgreSQL</li>
						<li>Docker</li>
						<li>Linux</li>
						<li>gRPC</li>
						<li>REST</li>
						<li>Redis</li>
						<li>Git</li>
					</ul>
				</div>

				<div id="bio">
					<h1>Bio</h1>
					<p>
						Hi! I'm a student at Innopolis University. Currently learning
						backend development in Golang. I found this language quite
						convenient and it is popular.
					</p>

					<p>
						I have no projects worth to show here. I still cover the basics of
						programming jumping from one technology to another without
						completing any project
					</p>

					<p>In free time I play guitar, bake, scateboarding.</p>
				</div>
			</div>

			<div id="projects-container">
				<h1>Projects</h1>

				<div className="project">
					<h2>todolist-htmx-golang</h2>

					<a
						className="link-img"
						href="https://github.com/deeprecession/todolist-htmx-golang"
					>
						<img src="github-mark.svg" alt="GitHub svg" />
						<span>GitHub</span>
					</a>

					<p>
						A simplest tasklist web application as a show case for HTMX in
						Golang
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
							Make: contain many commands that are I'm too lazy to write again
						</li>
					</ul>
				</div>

				<div className="project">
					<h2>moodle-notifications</h2>

					<a
						className="link-img"
						href="https://github.com/deeprecession/moodle-notifications"
					>
						<img src="github-mark.svg" alt="GitHub svg" />
						<span>GitHub</span>
					</a>

					<p>
						a simple grades notifyer for Innopolis Moodle that periodically
						fetches all grade information from Moodle and reports about
						important changes
					</p>

					<h3>stack</h3>
					<ul>
						<li>Golang</li>
						<li>gjson: tool for JSON parsing</li>
						<li>diff: tool for comparison between structs</li>
						<li>
							telegram-bot-api: used as an interface to send messages in
							Telegram
						</li>
						<li>Docker</li>
					</ul>
				</div>
			</div>
		</>
	);
}
