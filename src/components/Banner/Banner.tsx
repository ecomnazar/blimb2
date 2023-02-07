import React from 'react'
import { IData } from '../../Models/DataModel'
import { AppContext } from '../App/App'

interface BannerProps{
  langData: IData[],
  activeIndex: number,  
}

export const Banner = ({ langData, activeIndex }: BannerProps) => {
  
 
  return (
    <div className='banner'>
        <div className="container">
            <h3>{langData[activeIndex].help}</h3>
            <p>{langData[activeIndex].helpTitle}</p>
        </div>
    </div>
  )
}
