/**
 *
 * Home
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import DEFAULT_IMAGE_1 from '../../utils/constants';
import { compose } from 'redux';
import Carrausel from '../../components/Carausel/index'
import {Card3 as Card} from '../../components/Cards/index'
import {DEFAULT_IMAGE_1,APP_ROUTES} from 'utils/constants'
import {redirectToUrl} from 'utils/common'
import {Icon} from 'semantic-ui-react'
import './style.scss'


const Home=(props)=>{
  console.log(props,'propssssss')
  const {KLifeInfo : kLife,margueeProducts,latest :products } = props
  const [firstProdIndex, setFirstProdIndex] = useState(0)
  const index1 = firstProdIndex
  const index2 = products && products.length && ((firstProdIndex + 1 )% products.length)
  const index3 = products && products.length && ((firstProdIndex + 2 )% products.length)
  const changeFirstProdIndex = (index) => {
    setFirstProdIndex(index)
  }
  const goToNext = () => {
    setFirstProdIndex((firstProdIndex + 1 )% products.length)
  }
  const goToPrevious = () => {
    const newIndex = firstProdIndex -1
    setFirstProdIndex(newIndex <0 ? (newIndex + products.length -1): newIndex)
  }

  
  return (
    <div className="homePage">
      <Carrausel/>
      <div className="KLife__info">
        <h3 className="title">WHY <span>K-LIFE</span></h3>
        <div className="points">
          {
            kLife  && kLife.map((item=>
              <div className="point">
                <img src={item.image}/>
                <h4 className="label">{item.label}</h4>
              </div>
            ))
          }
        </div>
      </div>
      <div className="marqeeProducts">
        <h3 className="title">MARQUEE PRODUCTS</h3>
        <h4 className="description">Our Best Selling Categories</h4>
        <div className="products">
          {
            margueeProducts && margueeProducts.length && margueeProducts.map((product=>
              <div className="product">
                <div className="image">
                  <img src={product.image} alt={product.title + '  image'}/>
                </div>
                <h3 className="title">{product.title}</h3>
              </div>  
            ))
          }
        </div>
      </div>
      <div className="latestProducts">
          <h3 className="title">LATEST PRODUCTS</h3>
          <h4 className="description">Our Newest Launches</h4>
          <div className="products">
            <Icon onClick={()=>goToPrevious()} size='big' name="chevron left"/>
            <div className="product">
              <Card 
                title={products[index1].title}
                image={products[index1].image}
                description={products[index1].description}
                action={()=>redirectToUrl(APP_ROUTES.PRODUCT_ALIAS(products[index1].category_slug,products[index1].sub_category_slug,products[index1].model_id))}
              />
            </div>
            <div className="product">
              <Card 
                title={products[index2].title}
                image={products[index2].image}
                description={products[index2].description}
                action={()=>redirectToUrl(APP_ROUTES.PRODUCT_ALIAS(products[index1].category_slug,products[index1].sub_category_slug,products[index1].model_id))}
              />
            </div>
            <div className="product">
              <Card 
                title={products[index3].title}
                image={products[index3].image}
                description={products[index3].description}
                action={()=>redirectToUrl(APP_ROUTES.PRODUCT_ALIAS(products[index1].category_slug,products[index1].sub_category_slug,products[index1].model_id))}
              />
            </div>
            <Icon onClick={()=>goToNext()} size='big' name="chevron right"/>
          </div>
          <div className="actionDots">
            {
              products && products.length && products.map(((product,index)=>
                <div className={index === firstProdIndex ? 'active dot' : 'dot'} onClick={()=>changeFirstProdIndex(index)}></div>  
              ))
            }
          </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
