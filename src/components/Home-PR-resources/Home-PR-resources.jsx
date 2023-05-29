import './Home-PR-resources.css'
import ResourcesPRbox from './Resources-PR-box'
import img1 from '../../assets/images/Home-image/coinspot.png'
import img2 from '../../assets/images/Home-image/beincrypto.png'
import img3 from '../../assets/images/Home-image/decentr.png'
import img4 from '../../assets/images/Home-image/forklog.png'
import img5 from '../../assets/images/Home-image/vedomosti.png'
import img6 from '../../assets/images/Home-image/rbk.png'

import img7 from '../../assets/images/Home-image/varlamov_youtube.png'
import img8 from '../../assets/images/Home-image/the_ludi_youtube.png'
import img9 from '../../assets/images/Home-image/ludi_pro_youtube.png'
import img10 from '../../assets/images/Home-image/lebedev_youtube.png'
import img11 from '../../assets/images/Home-image/rbk.png'
import img12 from '../../assets/images/Home-image/vedomosti.png'
import StageProject from '../Stages-project/Stages-project'



const images_1 =[img1,img2,img3,img4,img5,img6]
const images_2 =[img7, img8 ,img9,img10, img11,img12   ]

const HomePRresources = () => {
  return (
    <div className='resources-PR'>
      <div className="resources-PR-element">
          <h2 className="title">Получите прямой доступ к лучшим ресурсам для PR </h2>
         <ResourcesPRbox title={"Пресса"} images={images_1} />
         <ResourcesPRbox title={"YouTube ресурсы"} images={images_2} />
      </div>
      <StageProject />
    </div>
  )
}

export default HomePRresources