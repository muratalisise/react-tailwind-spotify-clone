import React from 'react'
import Categories from 'data/Categories'
import { secondsToTime } from 'Utils'
import favoriteCategories from 'data/favorite-categories'
import ScrollContainer from 'react-indiana-drag-scroll'

function Category({ category }) {
	return (
		<div
			style={{ 'background': category.color }}
			className='rounded-md before:pt-[100%] before:block relative'
		>
			<div className='absolute inset-0 overflow-hidden'>
				<h3 className='p-4 text-2xl tracking-lighter font-semibold'>
					{category.title}
				</h3>
				<img src={category.cover} className='w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0' alt="" />
			</div>

		</div>
	)
}


function WideCategory({ category }) {
	return (
		<div
			style={{ 'background': category.color }}
			className='rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]'
		>
			<div className='absolute inset-0 overflow-hidden'>
				<h3 className='p-4 text-[2.5rem] tracking-lighter font-semibold'>
					{category.title}
				</h3>
				<img src={category.cover} className='w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0' alt="" />
			</div>

		</div>
	)
}





const Search = () => {
	return (
		<>
			<section className='mb-4'>
				<h3>En Çok Dinlediğin Türler</h3>
				<ScrollContainer className="flex overflow-x gap-x-6">
					{favoriteCategories.map(category => <WideCategory category={category} />)}
				</ScrollContainer>

				{/*<div className='grid grid-cols-5 gap-6'>
					{favoriteCategories.map(category => <WideCategory category={category} />)}
				</div>*/}
			</section>




			<section>
				<h3>Hepsine Göz At</h3>
				<div className='grid grid-cols-5 gap-6'>
					{Categories.map(category => <Category category={category} />)}
				</div>
			</section>
		</>
	)
}

export default Search
