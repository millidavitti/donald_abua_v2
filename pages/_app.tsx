import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import axios from "axios";
const options = {
	async fetcher(endpoint: string) {
		const res = await axios.get(endpoint);
		return res.data;
	},
};
export default function App({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig value={options}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}
