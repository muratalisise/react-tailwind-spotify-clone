import React from 'react'
import { Icon } from 'Icons'

const DownloadApp = () => {
  return (
	<a href='#' className='h-10 flex text-sm font-semibold text-link hover:text-white items-center gap-x-4 p-6'>
		<Icon name="download" size={20} />
		Uygulamayı Yükle
	</a>
  )
}

export default DownloadApp
