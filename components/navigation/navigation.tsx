
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from "../../core/portfolio";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav
} from "reactstrap";


import IconButton from "@mui/material/IconButton";
import { Instagram, GitHub, Twitter, LinkedIn } from "@mui/icons-material";



export default function Navigation(){

	// useEffect(() => {
	// 	let headroom = new Headroom(document.getElementById("navbar-main"));
	// 	// initialise
	// 	headroom.init();
	// });

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
                   position={'sticky'}
				>
                        <div className="grid grid-cols-2 grid-rows-1 gap-4">
                            {/* <NavbarBrand href="/" className="grid grid-cols-1">
                                <h2 className="text-white" id="nav-title">
                                    {greetings.name}
                                </h2>
                            </NavbarBrand> */}
                            <div className="grid grid-cols-2">
                            <Nav
								className="align-items-lg-center ml-lg-auto grid grid-cols-4 gap-4"
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