import React, { useState } from 'react'
import headerLogo from '../assets/images/godaddy-logo.svg'
import domainSubImg from '../assets/images/domain-img.jpeg'
import webHostingSubImg from '../assets/images/web-hosting.jpeg'
import securitySubImg from '../assets/images/security.webp'
import marketingSubImg from '../assets/images/marketing.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faBeer, faBullhorn, faCartShopping, faCertificate, faCube, faDollarSign, faGavel, faGlobe, faGreaterThan, faHandHoldingDollar, faHouseDamage, faImage, faLaptopCode, faLock, faPencilRuler, faSearch, faServer, faStore, faTimes, faTools, faUser } from '@fortawesome/free-solid-svg-icons'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'
import FadeComponent from './FadeAnimation'

const Header = () => {
	const [domainSubmenu, setDomainSubmenu] = useState(false)
	const [websiteHostingSubmenu, setWebsiteHostingSubmenu] = useState(false)
	const [securitySubmenu, setSecuritySubmenu] = useState(false)
	const [marketingSubmenu, setMarketingSubmenu] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const domaimSubmenuData = [
		{
			maintitle: "FIND A DOMAIN",
			listData: [
				{
					listIcon: faSearch,
					listTitle: "Search for Domain Names",
				},
				{
					listIcon: faBeer,
					listTitle: "Transfer Domain Names",
				},
				{
					listIcon: faHouseDamage,
					listTitle: "Domain Extensions",
				},

			]
		},
		{
			maintitle: "Auctions for Domains",
			listData: [
				{
					listIcon: faGavel,
					listTitle: "Auctions for Domain Names",
				},
				{
					listIcon: faDollarSign,
					listTitle: "Appraise Domain Name Value",
				},
				{
					listIcon: faHandHoldingDollar,
					listTitle: "Investing in Domain Names",
				},

			]
		},
		{
			maintitle: "Domain Tools and Services",
			listData: [
				{
					listIcon: faTools,
					listTitle: "Generate Domain Names",
				},
				{
					listIcon: faUser,
					listTitle: "Find a Domain Owner (WHOIS)",
				},
				{
					listIcon: faCube,
					listTitle: "Domain Broker Service",
				},

			]
		},
	]
	const websiteHostingSubmenuData = [
		{
			maintitle: "WEBSITES",
			listData: [
				{
					listIcon: faLaptopCode,
					listTitle: "Website Builder Free Trial",
				},
				{
					listIcon: faStore,
					listTitle: "Online Store",
				},
				{
					listIcon: faArrowRight,
					listTitle: "All Website Options",
				},

			]
		},
		{
			maintitle: "HOSTING",
			listData: [
				{
					listIcon: faServer,
					listTitle: "Web Hosting",
				},
				{
					listIcon: faServer,
					listTitle: "WordPress Hosting",
				},
				{
					listIcon: faServer,
					listTitle: "VPS Hosting",
				},
				{
					listIcon: faArrowRight,
					listTitle: "All Hosting Options",
				},
			]
		},
		{
			maintitle: "GODADDY PRO",
			listData: [
				{
					listIcon: faGlobe,
					listTitle: "Tools for Web Professionals",
				},
			]
		},
	]
	const securitySubmenuData = [
		{
			maintitle: "SSL Certificates",
			listData: [
				{
					listIcon: faCertificate,
					listTitle: "SSL Certificates",
				},
				{
					listIcon: faCertificate,
					listTitle: "Managed SSL Certificate",
				},
			]
		},
		{
			maintitle: "Web Security",
			listData: [
				{
					listIcon: faLock,
					listTitle: "Website Security",
				},
				{
					listIcon: faArrowRight,
					listTitle: "All Web Security Options",
				},
			]
		},
	]
	const marketingSubmenuData = [
		{
			maintitle: "Marketing Tools",
			listData: [
				{
					listIcon: faBullhorn,
					listTitle: "Digital Marketing FREE TRIAL",
				},
				{
					listIcon: faPencilRuler,
					listTitle: "Logo Maker",
				},
				{
					listIcon: faImage,
					listTitle: "Content & Photo Creator",
				},
			]
		},
	]
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}
	return (
		<>
			<div className='header-section-container'>
				<div className='header-section-left-content'>
					<div className='header-section-logo'>
						<Link to='/'>
							<img src={headerLogo} className='img-fluid' alt='header-godaddy-logo' />
						</Link>
					</div>

					{/* Mobile Menu Toggle Button */}
					<button className='mobile-menu-toggle' onClick={toggleMobileMenu}>
						<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
					</button>

					{/* Menu Links - hidden on mobile when the menu is closed */}
					<div className={`menu-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
						<a href='#'
							onClick={() => { setDomainSubmenu(!domainSubmenu); setWebsiteHostingSubmenu(false); setSecuritySubmenu(false); setMarketingSubmenu(false) }}
						>
							Domains <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' />
						</a>
						{domainSubmenu && <div className='header-domain-submenu-container'>
							{domaimSubmenuData?.map((data, index) => (
								<div className='header-domain-submenu-content-part' key={index}>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<h5>{data?.maintitle}</h5>
										{data?.listData?.map((list, index) => (
											<div key={index}>
												<p><FontAwesomeIcon icon={list?.listIcon} className='header-domain-submenu-icon' /> {list?.listTitle}</p>
											</div>
										))}
									</FadeComponent>
								</div>
							))}
							<div className='header-domain-submenu-img-part'>
								<FadeComponent duration={1000} delay={0} direction={"up"}>
									<img src={domainSubImg} className='img-fluid' alt='domain-submenu-img' />
									<p>Register Your Domain Now</p>
								</FadeComponent>
							</div>
						</div>}

						<a href='#'
							onClick={() => { setWebsiteHostingSubmenu(!websiteHostingSubmenu); setDomainSubmenu(false); setSecuritySubmenu(false); setMarketingSubmenu(false) }}
						>
							Websites and Hosting <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' />
						</a>
						{websiteHostingSubmenu && <div className='header-domain-submenu-container'>
							{websiteHostingSubmenuData?.map((data, index) => (
								<div className='header-domain-submenu-content-part' key={index}>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<h5>{data?.maintitle}</h5>
										{data?.listData?.map((list, index) => (
											<div key={index}>
												<p><FontAwesomeIcon icon={list?.listIcon} className='header-domain-submenu-icon' /> {list?.listTitle}</p>
											</div>
										))}
									</FadeComponent>
								</div>
							))}
							<div className='header-domain-submenu-img-part'>
								<FadeComponent duration={1000} delay={0} direction={"up"}>
									<img src={webHostingSubImg} className='img-fluid' alt='domain-submenu-img' />
									<p>Sell Online With WordPress Ecommerce Hosting</p>
								</FadeComponent>
							</div>
						</div>}

						<Link to='email'
							onClick={() => { setDomainSubmenu(false); setMarketingSubmenu(false); setSecuritySubmenu(false); setWebsiteHostingSubmenu(false) }}
						>
							Email
						</Link>
						<a href='#'
							onClick={() => { setSecuritySubmenu(!securitySubmenu); setWebsiteHostingSubmenu(false); setDomainSubmenu(false); setMarketingSubmenu(false) }}
						>
							Security <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' />
						</a>
						{securitySubmenu && <div className='header-domain-submenu-container'>
							{securitySubmenuData?.map((data, index) => (
								<div className='header-domain-submenu-content-part' key={index}>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<h5>{data?.maintitle}</h5>
										{data?.listData?.map((list, index) => (
											<div key={index}>
												<p><FontAwesomeIcon icon={list?.listIcon} className='header-domain-submenu-icon' /> {list?.listTitle}</p>
											</div>
										))}
									</FadeComponent>
								</div>
							))}
							<div className='header-domain-submenu-img-part'>
								<FadeComponent duration={1000} delay={0} direction={"up"}>
									<img src={securitySubImg} className='img-fluid' alt='domain-submenu-img' />
									<p>Back Up Your Website for Peace of Mind</p>
								</FadeComponent>
							</div>
						</div>}

						<a href='#'
							onClick={() => { setMarketingSubmenu(!marketingSubmenu); setSecuritySubmenu(false); setWebsiteHostingSubmenu(false); setDomainSubmenu(false) }}
						>
							Marketing <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' />
						</a>
						{marketingSubmenu && <div className='header-domain-submenu-container'>
							{marketingSubmenuData?.map((data, index) => (
								<div className='header-domain-submenu-content-part' key={index}>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<h5>{data?.maintitle}</h5>
										{data?.listData?.map((list, index) => (
											<div key={index}>
												<p><FontAwesomeIcon icon={list?.listIcon} className='header-domain-submenu-icon' /> {list?.listTitle}</p>
											</div>
										))}
									</FadeComponent>
								</div>
							))}
							<div className='header-domain-submenu-img-part'>
								<FadeComponent duration={1000} delay={0} direction={"up"}>
									<img src={marketingSubImg} className='img-fluid' alt='domain-submenu-img' />
									<p>Learn to Grow Your Business</p>
								</FadeComponent>
							</div>
						</div>}
						<Link to='/pricing'
							onClick={() => { setDomainSubmenu(false); setMarketingSubmenu(false); setSecuritySubmenu(false); setWebsiteHostingSubmenu(false) }}
						>
							Pricing
						</Link>
					</div>
				</div>

				<div className='header-section-right-content'>
					<Link to='/contact' onClick={()=>{setDomainSubmenu(false);setMarketingSubmenu(false);setSecuritySubmenu(false);setWebsiteHostingSubmenu(false)}} >Contact Us</Link>
					<Link to='/help'onClick={()=>{setDomainSubmenu(false);setMarketingSubmenu(false);setSecuritySubmenu(false);setWebsiteHostingSubmenu(false)}}>Help</Link>
					<Link to='/signin'onClick={()=>{setDomainSubmenu(false);setMarketingSubmenu(false);setSecuritySubmenu(false);setWebsiteHostingSubmenu(false)}}>Sign In</Link>
					<a href='#'onClick={()=>{setDomainSubmenu(false);setMarketingSubmenu(false);setSecuritySubmenu(false);setWebsiteHostingSubmenu(false)}}><FontAwesomeIcon icon={faCartShopping} /></a>
				</div>
			</div>
		</>
	)
}

export default Header
