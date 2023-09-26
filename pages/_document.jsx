import { Html, Head, Main, NextScript } from "next/document";
import FiverrBadge from "./components/FiverrBadge"
export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<div id='portal' />
				<NextScript />
			</body>
			<FiverrBadge/>
		</Html>
	);
}
