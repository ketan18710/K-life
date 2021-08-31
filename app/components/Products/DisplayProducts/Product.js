import React,{useState,useEffect} from 'react'
import {DEFAULT_IMAGE_1,DEFAULT_IMAGE_2} from 'utils/constants'
import {Grid, Hidden} from '@material-ui/core'
import { useSwipeable } from "react-swipeable";
import {APP_ROUTES} from 'utils/constants'
import {redirectToUrl} from 'utils/common'
import {KeyboardArrowLeft as ArrowLeft, KeyboardArrowRight as ArrowRight} from '@material-ui/icons'
function Product(props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [images, setImages] = useState([DEFAULT_IMAGE_1,DEFAULT_IMAGE_2,DEFAULT_IMAGE_1,DEFAULT_IMAGE_2,DEFAULT_IMAGE_1,DEFAULT_IMAGE_2])
  const changeImage = (side) => {
    let imagesLen = images.length
    if(side=0){
      let newIndex = activeImageIndex - 1
      if(newIndex < 0){
        setActiveImageIndex(imagesLen + newIndex)
      }else{
        setActiveImageIndex( newIndex)
      }
    }else{
      let newIndex = activeImageIndex + 1
      if(newIndex >= imagesLen){
        setActiveImageIndex(newIndex - imagesLen )
      }else{
        setActiveImageIndex( newIndex)
      }
    }
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => changeImage(0),
    onSwipedRight: () => changeImage(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <Grid className="product" item xs={12} container>
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
      <Grid className="content" item lg={7}>
        <h3>Clover 1 AC</h3>
        <h4>About The Product</h4>
        <p>
            Clover A1c, is also POC system which is used to test HbA1c in
            blood using boronate affinity. Being a completely automated system,
            all it requires from the user is to enter the blood in the capillary tube
            of the test cartridge and the result is shown on the screen in 5 minutes.
            The analyser can use both capillary blood as well as venous whole blood
            as it requires only 4µL blood. Clover A1c has been proved to be a very
            accurate product and is being used to clinical laboratories, leading
            diabetologists as well as pharmaceutical companies. Certified by IFCC
            and NGSP and provides excellent replicability and specifity
            <span onClick={()=>redirectToUrl(`${APP_ROUTES.PRODUCT_CATEGORY_ALIAS}/kk/kk`)}>...Read more</span>
        </p>
      </Grid>
    </Grid>
  )
}

export default Product
