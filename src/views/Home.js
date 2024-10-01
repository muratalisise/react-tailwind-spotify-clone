import React from 'react'
import Section from '../components/Section'

const Home = () => {

	const items = [
		{
			id:1,
			title:"Semicenk",
			artist:'Ahmet Abi',
			description:"geçiyor zaman",
			img:"https://www.biletix.com/static/images/live/event/eventimages/wide/422945041-semicenk-wide.png",
			src:"https://analytics.freesound.org/api/event"
		},
		{
			id:2,
			title:"Semicenk",
			artist:'Murat Abi',
			description:"geçiyor zaman",
			img:"https://www.biletix.com/static/images/live/event/eventimages/wide/422945041-semicenk-wide.png",
			src:"https://analytics.freesound.org/api/event"
		},
		{
			id:3,
			title:"Semicenk",
			artist:'Mehmet Abi',
			description:"geçiyor zaman",
			img:"https://www.biletix.com/static/images/live/event/eventimages/wide/422945041-semicenk-wide.png",
			src:"https://analytics.freesound.org/api/event"
		},
		{
			id:4,
			title:"Semicenk",
			artist:'Ali Abi',
			description:"geçiyor zaman",
			img:"https://www.biletix.com/static/images/live/event/eventimages/wide/422945041-semicenk-wide.png",
			src:"https://analytics.freesound.org/api/event"
		},
		{
			id:5,
			title:"Semicenk",
			artist:'Ozan Abi',
			description:"geçiyor zaman",
			img:"https://www.biletix.com/static/images/live/event/eventimages/wide/422945041-semicenk-wide.png",
			src:"https://analytics.freesound.org/api/event"
		},
	]
  return (
	<div className='grid gap-y-8'>
		<Section 
			title="Recently Played"
			more="/blabla"
			items={items}
		/>
		<Section 
			title="Show to try"
			more="/blabla"
			items={items}
		/>
		<Section 
			title="Made For"
			more="/blabla"
			items={items}
		/>
	</div>
  )
}

export default Home
