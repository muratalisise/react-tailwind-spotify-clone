import React from 'react'

const Playlists = () => {
  return (
	<nav className='mx-6 mt-2 flex-auto border-white border-opacity-20 overflow-auto'>
		<ul>
			{
				new Array(40).fill(null).map((_, index) => (
					<li key={index}>
						<a href="#" className='text-sm text-link hover:text-white flex h-8 items-center'>
							{index + 1}. Çalma Listem
						</a>
					</li>
				))
			}
		</ul>
	</nav>
  )
}

export default Playlists
