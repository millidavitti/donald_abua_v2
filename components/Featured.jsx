/* eslint-disable @next/next/no-img-element */
import { GithubLogo, Link } from "phosphor-react";
import { forwardRef } from "react";
import home from "../styles/Home.module.css";
import ToolChain from "./ToolChain";

export default forwardRef(function Featured({ flip, data }, ref) {
	return (
		<div className={home.featured} ref={ref}>
			<div className={`${home.featuredContent} ${flip && home.flipContent}`}>
				<div className={home.featuredHeader}>
					<p>Featured Project</p>
					<h2>{data.name}</h2>
				</div>

				<p>{data.description}</p>
				<ToolChain>
					{data.tools.map((tool) => (
						<p key={tool}>{tool}</p>
					))}
				</ToolChain>
				<div className={home.featuredIcon}>
					<a href={data.github}>
						<GithubLogo size={25} color='white' />
					</a>
					<a href={data.link}>
						<Link size={25} color='white' />
					</a>
				</div>
			</div>

			{/* Background */}
			<figure className={`${home.featuredBg} ${flip && home.flipBg}`}>
				<img
					src='https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg'
					alt='project thumbnail'
				/>
			</figure>
		</div>
	);
});
