import React from 'react';
import { Icon } from '../../Icons';

const Search = () => {
  return (
    <div className='mr-auto ml-4 relative w-full max-w-[30rem]'> {/* Genişliği artırdık */}
      <label htmlFor="search-input" className='text-black h-10 w-10 flex items-center justify-center absolute top-0 left-0'>
        <Icon size={24} name="search" />
      </label>
      <input 
        type="text" 
        className='h-10 bg-white rounded-3xl text-black outline-none text-sm placeholder-black-50 pl-10 w-full' // 'w-full' ekledik
        placeholder='Sanatçılar, şarkılar veya podcastler' 
      />
    </div>
  );
}

export default Search;
