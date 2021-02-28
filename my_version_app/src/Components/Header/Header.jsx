import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faStar }  from '@fortawesome/free-regular-svg-icons';
import './Header.module.css';

const farStar = <FontAwesomeIcon icon={faStar} />

const Header = () => {
	return (
		<header className="navBg">
			<div className="content-wrapper">
				<Navbar collapseOnSelect expand="sm" variant="light">    
				<Navbar.Brand><Link to="/start-it-front" className="navLogo" style={{ textDecoration: 'none' }}>{farStar} Star It</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
							<Nav.Link><Link to="/start-it-front/pricing">Pricing</Link></Nav.Link>
							<Nav.Link><Link to="/start-it-front/team">Team</Link></Nav.Link>
							<Nav.Link><Link to="/start-it-front/feedback">Feedback</Link></Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link><Link to="/start-it-front/login">Sign in</Link></Nav.Link>
						<Nav.Link><Link to="/start-it-front/join" className="navJoin">Sign up</Link></Nav.Link>
					</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>    
		</header>
			
	);
}

export default Header;




