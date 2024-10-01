import React from 'react'
import logo from "../img/logo.svg"
import Menu from '../components/SideBar/Menu'
import { Icon } from '../Icons';
import Playlists from '../components/SideBar/Playlists'
import DownloadApp from '../components/SideBar/DownloadApp'

const SideBar = () => {
  return (
	<aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
		<a href="#" className="mb-7 px-6">
			<img src={logo} alt="" className='h-10'/>
		</a>
		<Menu />


		<nav>
			<ul>
				<li>
					<a href="#" className='py-2 px-6 flex text-sm group items-center text-link font-semibold'>
						<span className='w-6 h-6 flex items-center justify-center mr-4 bg-opacity-60 group-hover:bg-opacity-100 bg-white rounded-sm '>
							<Icon name={"plus"} size={12}/>
						</span>
						Çalma Listesi Oluştur
					</a>
				</li>
				<li>
					<a href="#" className='py-2 px-6 flex text-sm group items-center text-link font-semibold'>
						<span className='w-6 h-6 flex items-center justify-center mr-4 bg-opacity-60 group-hover:bg-opacity-100 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100'>
							<Icon name={"heart"} size={12}/>
						</span>
						Beğenilen Şarkılar
					</a>
				</li>
			</ul>
		</nav>
		<Playlists />
		<DownloadApp />
	</aside>
  )
}

export default SideBar
 