
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { socialLinks } from "../../core/portfolio";
import {
	Navbar,
	NavItem,
	NavLink,
	Nav
} from "reactstrap";


import IconButton from "@mui/material/IconButton";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
import styles from "./navigation.module.css";



export default function Navigation(){

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
                   position={'sticky'}
				>
                        <div className="grid-rows-4 gap-4">

                            <div className="">
                            <Nav
								className={`align-items-lg-center ml-lg-auto ${styles.navbarContainer}`}
								navbar
							>
								{socialLinks.github && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Github"
											className="nav-link-icon"
											href={socialLinks.github}
											target="_blank"
										>
                                            <IconButton
                                                size="large"
                                                aria-label="Github"
                                                aria-controls="primary-search-account-menu"
                                                aria-haspopup="true"
                                                color="inherit"
                                                >
                                                <GitHub />
                                            </IconButton>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.linkedin && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Linkedin"
											className="nav-link-icon"
											href={socialLinks.linkedin}
											target="_blank"
										>
											<IconButton
                                                size="large"
                                                aria-label="Github"
                                                aria-controls="primary-search-account-menu"
                                                aria-haspopup="true"
                                                color="inherit"
                                                >
                                                <LinkedIn />
                                            </IconButton>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.twitter && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Twitter"
											className="nav-link-icon"
											href={socialLinks.twitter}
											target="_blank"
										>
											<IconButton
                                                size="large"
                                                aria-label="Github"
                                                aria-controls="primary-search-account-menu"
                                                aria-haspopup="true"
                                                color="inherit"
                                                >
                                                <Twitter />
                                            </IconButton>
										</NavLink>
									</NavItem>
								)}
							</Nav>
				
                            </div>
                        </div>
				</Navbar>
			</header>
		</>
	);
}