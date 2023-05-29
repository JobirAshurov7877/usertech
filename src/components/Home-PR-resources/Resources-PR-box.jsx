import React from 'react'

const ResourcesPRbox = ({title,images}) => {
     return (
          <div className="resources-PR-box">
               <div className="box-head">{title}</div>
               <div className="box-body">
                    {
                         images.map((item,i)=>(
                              <img src={item} alt='img'  key={i}/>
                         ))
                    }
               </div>
          </div>
     )
}

export default ResourcesPRbox