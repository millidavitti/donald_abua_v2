import { motion } from "framer-motion";
import { FolderSimple, Link } from "phosphor-react";
import home from "../styles/Home.module.css";
import Frame from "./Frame";
import ToolChain from "./ToolChain";

export default function Others({ data }) {
	return (
		<Frame>
			<motion.div
				viewport={{ amount: 0.2 }}
				className={home.otherProject}
				onViewportEnter={(e) => (e.target.dataset.inview = "true")}
				onViewportLeave={(e) => (e.target.dataset.inview = "false")}
			>
				<div className={home.otherProjectHeader}>
					<FolderSimple size={50} color='#64ffda' stroke='1px' />
					<Link size={25} color='white' className='pointer' />
				</div>
				<article>
     {/* Name */}
					<h2>{data.name}</h2>
     {/* Description */}
					<p>{data.description}</p>

     {/* Toolchain */}
					<ToolChain>
						{data.tools.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</ToolChain>
				</article>
			</motion.div>
		</Frame>
	);
}

[
	{
		_id: { $oid: "63ee8621600f69a14cc4d200" },
		name: "Space Tourism",
		description:
			"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore",
		tools: ["HTML", "CSS", "JavaScript"],
		__v: { $numberInt: "0" },
	},
];
