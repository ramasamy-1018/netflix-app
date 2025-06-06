import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constants';

const TvShowEpisodeCards = ({episode}) => {

  const {name,overview,episode_number,runtime,still_path} = episode;

  if (!(name && overview && episode_number && runtime && still_path)) return null


  return (
    <div className='flex w-[65%] mx-10 my-5 px-4 py-4 xl:h-44 lg:h-44 h-32 justify-center items-center rounded-lg bg-slate-200 text-black'>
      <img className='xl:w-[25%] lg:w-[40%] md:w-[45%] sm:w-[45%] w-[50%] xl:h-32 lg:h-32 h-20 px-2' src={IMAGE_CDN_URL + still_path} />
      <div className='p-2 w-[70%]'>
        <p className='text-md font-bold' >Episode {episode_number}</p>
        <p className='text-md font-semibold'>{name.replace('...','')}</p>
        <p className='text-md font-light hidden xl:block lg:block'>{overview.split(".")[0]}.{overview.split(".")[1]}.</p>
      </div>
      <p className='w-[5%] flex justify-center items-center px-2'>{runtime}m</p>
    </div>
  )
}

export default TvShowEpisodeCards