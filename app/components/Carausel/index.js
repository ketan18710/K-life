import React,{useState,useEffect} from 'react'
import Icon from '../Icon/index'
import LeftIcon from '../../images/icons/left.svg'
import LeftIconHover from '../../images/icons/left_hover_blue.svg'
import RightIcon from '../../images/icons/right.svg'
import RightIconHover from '../../images/icons/right_hover_blue.svg'
import './style.scss'
function Carrausel(props) {
  const {carrousel : imageList} = props
  const [activeIndex, setActiveIndex] = useState(0)
  // const imageList = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8]
  const goToNext = () => {
    const length  = imageList && imageList.length 
    if(activeIndex +1 < length){
      setActiveIndex(activeIndex +1)
    }else{
      const x = (activeIndex+1) % length
      setActiveIndex(x)
    }
  }
  const goToPrevious = () => {
    const length  = imageList && imageList.length 
    if(activeIndex -1 >=0){
      setActiveIndex(activeIndex - 1)
    }else{
      const x = activeIndex -1 + length
      setActiveIndex(x)
    }
  }
  setTimeout(() => {
    goToNext()
  }, 3000);
  useEffect(() => { 
    const AboutUS = document.getElementsByClassName('carrausel');
    if(AboutUS){
      [].forEach.call(AboutUS, a => {
        a.style.opacity = 0.3;
      });
      setTimeout(() => {
        [].forEach.call(AboutUS, a => {
          a.style.opacity = 1;
        });
      }, 50);
    }
   }, [activeIndex])
  return (
    <div className="carrausel">
      <img src={imageList[activeIndex]} alt="carrausel image"/>
      <div className="actions">
        <Icon
            mainIcon={LeftIcon}
            hoverIcon={LeftIconHover}
            alt="Show previous image"
            action={goToPrevious}
        />
        <Icon
            mainIcon={RightIcon}
            hoverIcon={RightIconHover}
            alt="Show previous image"
            action={goToNext}
        />
      </div>
    </div>
  )
}
 
export default Carrausel
