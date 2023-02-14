import {
	GithubLogo,
	InstagramLogo,
	LinkedinLogo,
	List,
	TwitterLogo,
	X,
} from "phosphor-react";
import Logo from "../assets/Logo";
import debounce from "lodash/debounce";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
	const [isToggled, setIsToggled] = useState(false);
	const [vector, setVector] = useState(0);
	const nav = useRef();

	const deBounce = debounce(scroll, 500, { leading: true });

	useEffect(() => {}, [isToggled]);

	useEffect(() => {
		window.addEventListener("scroll", deBounce);
		return () => {
			window.removeEventListener("scroll", deBounce);
		};
	});

	function scroll() {
		if (document.body.getBoundingClientRect().top >= vector) {
			nav.current.style.translate = 0;
		} else nav.current.style.translate = `0 ${-200}px`;
		setVector(document.body.getBoundingClientRect().top);
	}

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
			<Head>
				<link rel='icon' href='favicon.ico' />
			</Head>
			<header ref={nav}>
				<nav className='mobile-navigation'>
					<div className='logo'>
						<Link href='/'>
							<Logo />
						</Link>
					</div>
					{/* Mobile */}
					<div
						className='mobile-menu'
						style={{
							translate: isToggled ? 0 : 200,
							opacity: isToggled ? 1 : 0,
							pointerEvents: isToggled ? "unset" : "none",
						}}
					>
						<div className='mobile-nav-items' onClick={toggle}>
							<a className='nav-link' href='#about'>
								<span>01.</span>About
							</a>
							<a className='nav-link' href='#experience'>
								<span>02.</span>Experience
							</a>
							<a className='nav-link' href='#work'>
								<span>03.</span>Work
							</a>
							<a className='nav-link' href='#contact'>
								<span>04.</span>Contact
							</a>
							<button className='button' type='button'>
								Resume
							</button>
						</div>
					</div>
					{/* Desktop */}
					<div className='desk-menu'>
						<div className='desk-nav-items'>
							<a className='nav-link' href='#about'>
								<span>01.</span>About
							</a>
							<a className='nav-link' href='#experience'>
								<span>02.</span>Experience
							</a>
							<a className='nav-link' href='#work'>
								<span>03.</span>Work
							</a>
							<a className='nav-link' href='#contact'>
								<span>04.</span>Contact
							</a>
							<button className='button resume' type='button'>
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
