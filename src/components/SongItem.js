import React from 'react';
import { Icon } from '../Icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../components/stores/player';

const SongItem = ({ item }) => {
	const dispatch = useDispatch();
	const { current } = useSelector(state => state.player);

	const updateCurrent = () => {
    dispatch(setCurrent(item));  // Mevcut şarkıyı güncelle
};

	

	return (
		<NavLink
			className="bg-footer p-4 rounded gap-x-6 hover:bg-active group"
			key={item.id}
			to="/"
		>
			<div className="pt-[100%] relative mb-4">
				<img
					src={item.img}
					alt={item.title} // Provide better accessibility with alt text
					className="absolute object-cover inset-0 w-full h-full"
				/>
				<button
					onClick={updateCurrent}
					className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 group-hover:flex group-focus:flex items-center justify-center hidden">
					<Icon name={current?.id === item.id ? 'pause' : 'play'} size={16} />
				</button>
			</div>
			<h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
				{item.title}
			</h6>
			<p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
		</NavLink>
	);
};

export default SongItem;
