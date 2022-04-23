import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    const [Img, setImg] = useState([])
    useEffect(()=>{
        getGifs(category).then(img=>{
            setImg(img)
        })
    }, [category])
    
   

    

  return (
    <div className=''>
        <h1>{category}</h1>
        
            {
                Img.map(img=>(
                    <GifGridItem 
                    img={img}
                    key={img.id}

                    />
                ))
            }
    
    </div>
  )
}
