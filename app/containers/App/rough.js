import React,{useState , useEffect} from 'react'
import {Card1} from '../../components/Cards/index'
import Video from '../../components/Video/index'
import {DEFAULT_IMAGE_1} from 'utils/constants'
import { Icon } from 'semantic-ui-react'
import { isNull } from 'lodash'
import de from 'react-intl/locale-data/de'
function rough() {
  const [triggers, setTriggers] = useState({
    video: false
  })
  const [activeVideoLink, setActiveVideoLink] = useState(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const videosObj = [
    {
      title : 'Cardiovascular System',
      link  : "https://www.w3schools.com/html/mov_bbb.mp4",
      poster : 'https://images.immediate.co.uk/production/volatile/sites/34/2020/11/what-is-the-cardiovascular-system-and-how-does-exercise-affect-it-844197a.jpg?quality=90&resize=768%2C574'
    },
    {
      title : 'Respiratory System',
      link  : "https://www.w3schools.com/html/mov_bbb.mp4",
      poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40xJEkpg-3nM1LDsdK7VQBOp3LIzKwMoCeA&usqp=CAU'
    },
    {
      title : 'Digestive System',
      link  : "https://www.w3schools.com/html/mov_bbb.mp4",
      poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40xJEkpg-3nM1LDsdK7VQBOp3LIzKwMoCeA&usqp=CAU'
    },
  ]
  const goToNextVideo = () => {
    const length  = videosObj.length 
    if(activeIndex +1 < length){
      setActiveIndex(activeIndex +1)
    }else{
      const x = (activeIndex+1) % length
      setActiveIndex(x)
    }
  }
  const goToPrevious = () => {
    const length  = videosObj.length 
    if(activeIndex -1 >=0){
      setActiveIndex(activeIndex - 1)
    }else{
      const x = activeIndex -1 + length
      setActiveIndex(x)
    }
  }
  
  // console.log(!isNull(activeIndex) && videosObj[activeIndex].link)
  // console.log(activeIndex ,( !isNull(activeIndex) || activeIndex === 0))
  const defineVideoURl = (activeIndex) => {
    if(activeIndex >=0){
      const obj = videosObj[activeIndex]
      return obj.link
    }else{
      return null
    }
  }
  
  return (
    <div className="rough">
      {/* <div className="demoCard1">
        <Card1 
          image={DEFAULT_IMAGE_1}
          description="This is sample description"
        />
      </div> */}
      <div className="video">
        <Video 
          videoURl={defineVideoURl(activeIndex)}
          open={triggers.video}
          title={activeIndex > 0 && videosObj[activeIndex].title}
          next={()=>goToNextVideo()}
          previous={()=>goToPrevious()}
          close={()=>setTriggers({...triggers,video : false})}
        />
      </div>
      <div className="videoPostersArray">
        {
          videosObj.map((item , index)=>(
            <div className="poster" style={{backgroundImage : `url(${item.poster})`}} onClick={()=>{setActiveIndex(index) ;setTriggers({...triggers,video : true})}}>
              <Icon name="play circle outline"/>
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default rough
