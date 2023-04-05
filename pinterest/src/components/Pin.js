import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs';
const Pin = ({pinSize, imgSrc, name, link}) => {
  return (
    <div className={`pin ${pinSize}`}>
        <img 
          src={imgSrc} 
          alt="" 
          className="w-full h-full object-cover" 
        />
        <div className='content w-full h-12 absolute left-0 flex justify-between items-center'>
            <h3>{name}</h3>
            <div className="imageContent">
            <a href={link} className='searchicon'>
            <BsArrowRightCircleFill />
            </a>
        </div>
        </div>
    </div>
  )
}

export default Pin