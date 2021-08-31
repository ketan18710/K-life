import React,{useState,useEffect} from 'react'
import './style.scss'
import { NO_IMAGE } from '../../../utils/constants'
import { redirectToUrl } from '../../../utils/common'
import {DEFAULT_IMAGE_1,DEFAULT_IMAGE_2} from 'utils/constants'
import {Grid, Hidden} from '@material-ui/core'
import { useSwipeable } from "react-swipeable";
import {KeyboardArrowLeft as ArrowLeft, KeyboardArrowRight as ArrowRight} from '@material-ui/icons'
import Badges from './badges.png'
function ProductDetail(props) {
  // const {title, images, description, features, video, manuals,categoryProducts ,model_id ,accessories} = props
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [images, setImages] = useState([DEFAULT_IMAGE_1,DEFAULT_IMAGE_2,DEFAULT_IMAGE_1,DEFAULT_IMAGE_2])
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
  // useEffect(() => {
  //   // debugger
  //   if(!model_id){
  //     redirectToUrl('/error404')
  //   }
  //   if(images && images.length>0 ){
  //     setActiveImage(images[0])
  //   }
  // }, [])
  const goToNext = () => {
    const length  = images.length 
    if(firstProdIndex +1 < length){
      setFirstProdIndex(firstProdIndex +1)
    }else{
      const x = (firstProdIndex+1) % length
      setFirstProdIndex(x)
    }
  }
  const goToPrevious = () => {
    const length  = images.length 
    if(firstProdIndex -1 >=0){
      setFirstProdIndex(firstProdIndex - 1)
    }else{
      const x = firstProdIndex -1 + length
      setFirstProdIndex(x)
    }
  }
  return (
    <Grid className="productDetail" item xs={12} container>
      <Grid className="CategoryTitle" container alignItems="center" justify="flex-start" item xs={12}>
        <h2>Hb1Ac Analyser</h2>
      </Grid>
      <Grid className="productDetailImages" container item xs={12}>
        <Grid {...handlers} container item md={7} sm={12} alignItems="center" justify="center">
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
          <Grid container  className="allImages" item md={5} alignItems="center" justify="center">
                {
                  images.map((image,index)=>(
                    <Grid container item md={6} alignItems="center" justify="center">
                      <img src={image} onClick={()=>setActiveImageIndex(index)}/>
                    </Grid>
                  ))
                }
          </Grid>
        </Hidden>
      </Grid>
      <Grid className="productBadge" container item xs={12}>
        <Grid container item md={6} sm={12} alignItems="center" justify="center">
          <img src={Badges} alt="" />
        </Grid>
        <Grid container  className="allImages" item md={6} alignItems="center" justify="center">
          <a href="/images/myw3schoolsimage.jpg" download>Download Data Sheet</a>
        </Grid>
      </Grid>
      <Grid className="product" container alignItems="center" justify="flex-start" item xs={12}>
        <h3>Clover A1c</h3>
        <h5 className="subHeading">About the product</h5>
        <p className="description">
          Clover A1c, is also POC system which is used to test HbA1c blood using coronate affinity. Being a completely automated system,
          all it requires from the user is to enter th blood in the capillary tube of the test cartridge and the result is shown on the 
          screen in 5 minutes. The analyses can use both capillary blood as well as venous whole blood as it requires only 4uL blood. 
          Clover A1c has been proved to be very accurate product and is being used to clinical laboratories, leading diabetologists as 
          well as pharmaceutical companies. Certified by IFCC and NGSP and provides excellent replicability and specify of results. 
        </p>
        <p className="description">
          Clover A1c, HbA1c is a device for use in professional settings. Clover A1c system conveniently measured the HbA1C in just 5 
          minutes with use of only 4
        </p>
        <h5 className="subHeading">Plus Points</h5>
        <ul className="list plus">
          <li>Point somenthing Point</li>
          <li>Point somenthing Point</li>
          <li>Point somenthing Point</li>
          <li>Point somenthing Point</li>
        </ul>
        <h5 className="subHeading">Plus Points</h5>
        <ul className="list star">
          <li>Point somenthing Point</li>
          <li>Point somenthing Point</li>
          <li>Point somenthing Point</li>
          <li>Point somenthing Point</li>
        </ul>
        <h5 className="subHeading">Technical Specifications</h5>
        <table>
          <tr>
            <td colSpan="5">Column Title</td>
            <td colSpan="10">Dolor eiusmod eiusmod nulla cillum est.</td>
          </tr>
          <tr>
            <td colSpan="5">Column Title</td>
            <td colSpan="10">Dolor eiusmod eiusmod nulla cillum est.</td>
          </tr>
          <tr>
            <td colSpan="5">Column Title</td>
            <td colSpan="10">Dolor eiusmod eiusmod nulla cillum est.</td>
          </tr>
          <tr>
            <td colSpan="5">Column Title</td>
            <td colSpan="10">Dolor eiusmod eiusmod nulla cillum est.</td>
          </tr>
        </table>
      </Grid>
    </Grid>
  )
}

export default ProductDetail
