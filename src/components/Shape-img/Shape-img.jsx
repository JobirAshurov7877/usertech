import './Shape-img.css'
import shape_l from '../../assets/images/Studio-image/studio-bg-left.svg'
import shape_r from '../../assets/images/Studio-image/studio-bg-right.svg'
import dark_shape from '../../assets/images/Studio-image/Frame.png'

const ShapeImg = () => {
     return (
          <div className="bottom-shape">
               <div className="section-container">
                    <div className="element-container">
                         <div className="box_l">
                              <img src={shape_l} alt="img" />
                         </div>
                         <div className="box_r">
                              <img src={shape_r} alt="img" />
                         </div>
                    </div>
               </div>
               <div className="dark-shape">
                    <img src={dark_shape} alt="" />
               </div>
          </div>
     )
}

export default ShapeImg