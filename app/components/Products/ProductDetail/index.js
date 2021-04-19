import React,{useState,useEffect} from 'react'
import './style.scss'
import {DEFAULT_IMAGE_1,DEFAULT_IMAGE_2} from 'utils/constants'
import LEFT_ICON from '../../../images/icons/left.svg'
import RIGHT_ICON from '../../../images/icons/right.svg'
import DOWNLOAD_ICON from './download.svg'
import DOWNLOAD_ICON_HOVER from './download_hover.svg'
import {Card4 as Card} from 'components/Cards/index'
import { NO_IMAGE } from '../../../utils/constants'
import { redirectToUrl } from '../../../utils/common'

function ProductDetail(props) {
  const {title, images, description, features, video, manuals,categoryProducts ,model_id ,accessories} = props
  // const images = [
  //   DEFAULT_IMAGE_1,
  //   DEFAULT_IMAGE_2,
  //   DEFAULT_IMAGE_1,
  //   DEFAULT_IMAGE_2,
  //   DEFAULT_IMAGE_1
  // ]
  const [activeImage, setActiveImage] = useState(NO_IMAGE)
  const [firstProdIndex, setFirstProdIndex] = useState(0)
  const index1 = firstProdIndex
  const index2 = images && images.length>=2 && ((firstProdIndex + 1 )% images.length)
  const index3 = images && images.length>=3 && ((firstProdIndex + 2 )% images.length)
  useEffect(() => {
    // debugger
    if(!model_id){
      redirectToUrl('/error404')
    }
    if(images && images.length>0 ){
      setActiveImage(images[0])
    }
  }, [])
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
  console.log(props,'features')
  return (
    <div className="productDetail">
      <h3 className="title">{title}</h3>
      <h5 className="description">{description}</h5>
      <div className="details">
        <div className="images">
          <div className="activeImage">
            <img src={activeImage}/>
          </div>
          <div className="imageCarrausel">
            <img src={LEFT_ICON} alt="" onClick={()=>goToPrevious()}/>
            {images && images.length >=1 && <img onClick={()=>setActiveImage(images[index1])} src={images[index1]} alt=""/>}
            {images && images.length >=2  && <img onClick={()=>setActiveImage(images[index2])}  src={images[index2]} alt=""/>}
            {images && images.length >=3  && <img onClick={()=>setActiveImage(images[index3])}  src={images[index3]} alt=""/>}
            <img src={RIGHT_ICON} alt=""  onClick={()=>goToNext()}/>
          </div>
        </div>
        <div className="features" dangerouslySetInnerHTML={{ __html: features }} >
        </div>
      </div>
      {
        video && video.length >  0 &&
        <div className="mediaPlayer">
          <video   controls>
            <source src="https://youtu.be/UXrr7SYdzmY" />
            Your browser does not support HTML video.
          </video>
        </div>
      }
      <div className="manuals">
        {
          manuals && manuals.length>0 &&manuals.map(manual=>(
            <a href={manual.link && manual.link} download target="_blank" className="btn1__secondary">
              {manual.title && manual.title} 
              <img className="normal" src={DOWNLOAD_ICON}/>
              <img className="hover" src={DOWNLOAD_ICON_HOVER}/>
            </a>
          ))
        }
      </div>
      <div className="accessories">
        <h3 className="title">ACCESSORIES</h3>
        <div className="content">
          <img src={accessories && accessories.image ? accessories.image : NO_IMAGE} alt=""/>
          <div className="data" dangerouslySetInnerHTML={{ __html: accessories && accessories.data  ? accessories.data : ''}} ></div>
        </div>
      </div>
      {
        categoryProducts && categoryProducts.length >1 &&
        <div className="products">
          <h3 className="title">Similar Products</h3>
          <div className="productList">
            {
              categoryProducts.map((product,index)=>
              <div className="product">
                <Card
                  image={product.images.length>=0 ?  product.images[0] : NO_IMAGE}
                  title={product.title}
                  model={product.model_id}
                  action={()=>redirectToUrl(APP_ROUTES.PRODUCT_ALIAS(category_slug,sub_category_slug,product.model_id))}
                />
              </div>
              )
            }
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetail
