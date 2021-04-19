import React,{useEffect} from 'react'
import './style.scss'
import {DEFAULT_IMAGE_1,APP_ROUTES} from 'utils/constants'
import {redirectToUrl} from 'utils/common'
import {Card4 as Card} from 'components/Cards/index'
import Error404 from 'components/Error404';
import { NO_IMAGE } from '../../../utils/constants'

function DisplayProducts(props) {
  const {description,title,products,category_slug,sub_category_slug} = props
  console.table(products)
  console.log(products)
  useEffect(() => {
    if(!category_slug || !sub_category_slug){
      redirectToUrl('/error404')
    }
  }, [])
  return (
    <div className="displayProducts">
      <h3 className="title">{title ?  title : 'Sub-Category Name'}</h3>
      <h5 className="description">{description && description	}</h5>
      <div className="products">
        {
          products && 
          products.map((product,index)=>
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
  )
}

export default DisplayProducts
