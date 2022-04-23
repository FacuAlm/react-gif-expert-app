import React from 'react'

export const GifGridItem = ({img}) => {
    
  return (
    <div className='card'>
        <img src={img.url} className="card-img-top" alt={img.title}/>
        <div className="card-body">
        <h5 className="card-title">{img.title}</h5>
        </div>
        
    
    </div>
  )
}

