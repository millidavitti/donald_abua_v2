import { FolderSimple, Link } from "phosphor-react";
import home from "../styles/Home.module.css";
import ToolChain from "./ToolChain";

export default function OtherProjects() {
	return (
		<div className={home.otherProject}>
			<div className={home.otherProjectHeader}>
				<FolderSimple size={50} color='#64ffda' stroke='1px' />
				<Link size={25} color='white' className='pointer' />
			</div>
			<article>
				<h2>Integrating Algolia Search with WordPress Multisite</h2>
				<p>
					Building a custom multisite compatible with WordPress plugin to build
					globlsearch with Algolia
				</p>
				<ToolChain>
					<p>VS Code</p>
					<p>Sublime Text</p>
					<p>Atom</p>
					<p>iTerm2</p>
					<p>Hyper</p>
				</ToolChain>
			</article>
		</div>
	);
}
