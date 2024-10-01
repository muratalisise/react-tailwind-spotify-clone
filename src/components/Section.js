import React from 'react';
import { NavLink } from 'react-router-dom';
import SongItem from './SongItem';

const Section = ({ title, more = false, items }) => {
	return (
		<section>
			<header className='flex items-center justify-between'>
				<h3 className='text-2xl text-white font-semibold tracking-tight '>
					{title}
				</h3>
				{more && (
					<NavLink className={"text-xs font-semibold hover:underline uppercase text-link "} to={more}>
						SEE ALL
					</NavLink>
				)}
			</header>
			<div className='grid grid-cols-5'>
				{items.map(item => (
					<SongItem item={item} key={item.id} />
				))}
			</div>
		</section>
	);
}

export default Section;
