import React from 'react';
import Navigation from './Navbar/Navigation';
import Auth from './Navbar/Auth';
import { Routes, Route } from 'react-router-dom';
import Search from './Navbar/Search'; // Make sure this path is correct

const Navbar = () => {
	return (
		<div className="h-[3.75rem] flex items-center justify-between px-8">
			<Navigation />
			<Routes>
				<Route path="/" element={<div></div>} />
				<Route path="/search" element={<Search />} /> {/* Search route */}
				<Route path="/collection" element={<div>Collection</div>} />
			</Routes>
			{/*<Search />*/}
			<Auth />
		</div>
	);
}

export default Navbar;
 