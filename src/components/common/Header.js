import React, { useState } from 'react';
import { Jumbotron,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import styles from './header.module.scss';

const Header = (props) => {
	const [navState, setNavState] = useState(false);
	const toggle = () => setNavState(!navState);
	let theme = window.localStorage.getItem('theme');
	const whiteText = theme === "dark" ? "text-white" : "";

	return (
		<>
			<Navbar light expand="md">
				<NavbarBrand href="/" className={whiteText}>
					Search App
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={navState} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className={styles.item}>
							<NavLink className={whiteText} href="/"> Home </NavLink>
						</NavItem>
						<NavItem className={styles.item}>
							<NavLink className={whiteText} href="/companies"> Companies </NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<Jumbotron
				className={`${theme === "light" ? styles.light : styles.dark} d-flex`}
			>
				<h1 className={`${styles.head}`}> Search App </h1>
				{props.toggle}
			</Jumbotron>
		</>
	);
};

export default Header;
