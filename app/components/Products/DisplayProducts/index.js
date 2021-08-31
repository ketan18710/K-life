import React,{useEffect} from 'react'
import './style.scss'
import {DEFAULT_IMAGE_1,APP_ROUTES} from 'utils/constants'
import {redirectToUrl} from 'utils/common'
import {Card4 as Card} from 'components/Cards/index'
import Error404 from 'components/Error404';
import { NO_IMAGE } from '../../../utils/constants'
import Banner from './banner.png'
import Category from './Category'
function DisplayProducts(props) {
  // const {description,title,products,category_slug,sub_category_slug} = props
  // console.table(products)
  // console.log(products)
  // useEffect(() => {
  //   if(!category_slug || !sub_category_slug){
  //     redirectToUrl('/error404')
  //   }
  // }, [])
  return (
    <div className="displayProducts">
        <img className="banner" src={Banner} alt="banner" />   
        <div className="products">
          <Category />
          <Category />
          <Category />
        </div>
    </div>
  )
}

export default DisplayProducts
