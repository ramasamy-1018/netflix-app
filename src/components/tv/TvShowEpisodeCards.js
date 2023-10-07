import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constants';

const TvShowEpisodeCards = ({episode,setShowOverlay}) => {

  const {name,overview,episode_number,runtime,still_path} = episode;

  if (!(name && overview && episode_number && runtime && still_path)) return null


  return (
    <div className='flex w-[60%] mx-14 my-5 px-4 py-4 h-auto justify-center items-center rounded-lg bg-slate-200 text-black' onClick={()=>setShowOverlay(false)}>
      <img className='w-[25%] h-24 px-2' src={IMAGE_CDN_URL + still_path} />
      <div className='p-2 w-[70%]'>
        <p className='text-md font-bold' >Episode {episode_number}</p>
        <p className='text-md font-semibold'>{name.replace('...','')}</p>
        <p className='text-md font-light'>{overview.split(".")[0]}.{overview.split(".")[1]}.{overview.split(".")[2]}.</p>
      </div>
      <p className='w-[5%] flex justify-center items-center px-2'>{runtime}m</p>
    </div>
  )
}

export default TvShowEpisodeCards