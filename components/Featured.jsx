/* eslint-disable @next/next/no-img-element */
import { GithubLogo, Link } from "phosphor-react";
import home from "../styles/Home.module.css";
import ToolChain from "./ToolChain";

export default function Featured({ flip }) {
	return (
		<div className={home.featured}>
			<div className={`${home.featuredContent} ${flip && home.flipContent}`}>
				<div className={home.featuredHeader}>
					<p>Featured Project</p>
					<h2>Nulo Hotels</h2>
				</div>

				<p>
					A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
					more. Available on Visual Studio Marketplace, Package Control, Atom
					Package Manager, and npm.
				</p>
				<ToolChain>
					<p>VS Code</p>
					<p>Sublime Text</p>
					<p>Atom</p>
					<p>iTerm2</p>
					<p>Hyper</p>
				</ToolChain>
				<div className={home.featuredIcon}>
					<GithubLogo size={25} color='white' />
					<Link size={25} color='white' />
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
}
