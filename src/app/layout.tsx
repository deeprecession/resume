import { Metadata } from "next";

import "../index.css";
import InfoHeader from "./InfoHeader";
import Footer from "./Footer";

export const metadata: Metadata = {
	title: "Blog",
	description: "A homework for innopolis frontend course",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="app-container">
					<InfoHeader />
					<main className="content">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
