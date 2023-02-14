import { FolderSimple, Link } from "phosphor-react";
import home from "../styles/Home.module.css";
import ToolChain from "./ToolChain";

export default function OtherProjects({ data }) {
	return (
		<div className={home.otherProject}>
			<div className={home.otherProjectHeader}>
				<FolderSimple size={50} color='#64ffda' stroke='1px' />
				<Link size={25} color='white' className='pointer' />
			</div>
			<article>
				<h2>{data.name}</h2>
				<p>{data.description}</p>
				<ToolChain>
					{data.tools.map((tool) => (
						<p key={tool}>{tool}</p>
					))}
				</ToolChain>
			</article>
		</div>
	);
}
