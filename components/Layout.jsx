import { List } from "phosphor-react";

export default function Layout({ children }) {
	return (
		<>
			<header>
				<nav className='mobile-navigation'>
					<div className='logo'>Logo</div>
					<div className='mobile-menu'>
						<List className='nav-icon' />
						<div className='mobile-nav-items'></div>
					</div>
				</nav>
			</header>
			<main className='main'>{children}</main>
			<footer>Footer</footer>
		</>
	);
}
