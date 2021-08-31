import React,{useState,useEffect} from 'react'
import {Grid, Hidden} from '@material-ui/core'
import { useSwipeable } from "react-swipeable";
import {KeyboardArrowLeft as ArrowLeft, KeyboardArrowRight as ArrowRight} from '@material-ui/icons'
function ProductImagesCarausel(props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [images, setImages] = useState([DEFAULT_IMAGE_1,DEFAULT_IMAGE_2,DEFAULT_IMAGE_1,DEFAULT_IMAGE_2,DEFAULT_IMAGE_1,DEFAULT_IMAGE_2])
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <Grid container item lg={5} md={12}>
        <Grid {...handlers} container item lg={12} alignItems="center" justify="center">
          <Grid container item xs={1}  alignItems="center" justify="flex-end">
            <ArrowLeft onClick={()=>changeImage(0)} className="arrow" fontSize="large"/>
          </Grid>
          <Grid container item xs={10} alignItems="center" justify="flex-end">
            <Grid container item lg={12} alignItems="center" justify="flex-end">
              <img src={images[activeImageIndex]} alt="" className="heroImage" />
            </Grid>
          </Grid>
          <Grid container item xs={1} alignItems="center" justify="flex-start">
            <ArrowRight  onClick={()=>changeImage(1)}  className="arrow" fontSize="large"/>
          </Grid>
        </Grid>
        <Hidden smDown> 
          <Grid container  className="allImages" item md={12} alignItems="center" justify="center">
                {
                  images.map((image,index)=>(
                    <Grid container item md={3} alignItems="center" justify="center">
                      <img src={image} onClick={()=>setActiveImageIndex(index)}/>
                    </Grid>
                  ))
                }
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default ProductImagesCarausel
