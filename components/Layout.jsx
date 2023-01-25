import {
	GithubLogo,
	InstagramLogo,
	LinkedinLogo,
	List,
	TwitterLogo,
	X,
} from "phosphor-react";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
	const [isToggled, setIsToggled] = useState(false);
	useEffect(() => {}, [isToggled]);
	function toggle() {
		setIsToggled((pre) => !pre);
	}

	return (
		<>
			<div
				className='overlay'
				style={{
					opacity: isToggled ? 1 : 0,
					pointerEvents: isToggled ? "unset" : "none",
				}}
			></div>
			<header>
				<nav className='mobile-navigation'>
					<div className='logo'>Logo</div>
					{/* Mobile */}
					<div
						className='mobile-menu'
						style={{
							translate: isToggled ? 0 : 200,
							opacity: isToggled ? 1 : 0,
							pointerEvents: isToggled ? "unset" : "none",
						}}
					>
						<div className='mobile-nav-items'>
							<a href='#about'>
								<span>01.</span>About
							</a>
							<a href='#experience'>
								<span>02.</span>Experience
							</a>
							<a href='#work'>
								<span>03.</span>Work
							</a>
							<a href='#contact'>
								<span>04.</span>Contact
							</a>
							<button className='button' type='button'>
								Resume
							</button>
						</div>
					</div>
					<div className='desk-menu'>
						<div className='desk-nav-items'>
							<a href='#about'>
								<span>01.</span>About
							</a>
							<a href='#experience'>
								<span>02.</span>Experience
							</a>
							<a href='#work'>
								<span>03.</span>Work
							</a>
							<a href='#contact'>
								<span>04.</span>Contact
							</a>
							<button className='button' type='button'>
								Resume
							</button>
						</div>
					</div>
					{!isToggled ? (
						<List
							className='open-icon nav-icon pointer '
							size={30}
							onClick={toggle}
						/>
					) : (
						<X
							className='close-icon nav-icon pointer'
							size={30}
							onClick={toggle}
						/>
					)}
				</nav>
			</header>
			<main className='main'>{children}</main>
			<footer>
				<div className='socials pointer'>
					<GithubLogo size={25} />
					<InstagramLogo size={25} />
					<TwitterLogo size={25} />
					<LinkedinLogo size={25} />
					<hr />
				</div>
				<div className='email'>
					<p>abuadonald@gmail.com</p>
					<hr />
				</div>
				<p className='attribution'>
					Designed by Brittany Chiang & Built Donald Abua
				</p>
			</footer>
		</>
	);
}
