import React, { useState, useEffect } from 'react';
import { DEFAULT_IMAGE_1, DEFAULT_IMAGE_2 } from 'utils/constants';
import { Grid, Hidden } from '@material-ui/core';
import { useSwipeable } from 'react-swipeable';
import { APP_ROUTES } from 'utils/constants';
import { redirectToUrl } from 'utils/common';
import {
  KeyboardArrowLeft as ArrowLeft,
  KeyboardArrowRight as ArrowRight,
} from '@material-ui/icons';
function Product(props) {
  const { product, category_slug } = props;
  console.log(product, 'product');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [images, setImages] = useState([
    DEFAULT_IMAGE_1,
    DEFAULT_IMAGE_2,
    DEFAULT_IMAGE_1,
    DEFAULT_IMAGE_2,
    DEFAULT_IMAGE_1,
    DEFAULT_IMAGE_2,
  ]);
  const changeImage = side => {
    const imagesLen = images.length;
    if ((side = 0)) {
      const newIndex = activeImageIndex - 1;
      if (newIndex < 0) {
        setActiveImageIndex(imagesLen + newIndex);
      } else {
        setActiveImageIndex(newIndex);
      }
    } else {
      const newIndex = activeImageIndex + 1;
      if (newIndex >= imagesLen) {
        setActiveImageIndex(newIndex - imagesLen);
      } else {
        setActiveImageIndex(newIndex);
      }
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => changeImage(0),
    onSwipedRight: () => changeImage(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => {
    if (product) {
      product.images && setImages(product.images);
    }
  }, [product]);
  return (
    <Grid className="product" item xs={12} container>
      <Grid container item lg={5} md={12}>
        <Grid
          {...handlers}
          container
          item
          lg={12}
          alignItems="center"
          justify="center"
        >
          <Grid container item xs={1} alignItems="center" justify="flex-end">
            <ArrowLeft
              onClick={() => changeImage(0)}
              className="arrow"
              fontSize="large"
            />
          </Grid>
          <Grid container item xs={10} alignItems="center" justify="flex-end">
            <Grid container item lg={12} alignItems="center" justify="flex-end">
              {images.length > 0 && (
                <img
                  src={images[activeImageIndex]}
                  alt=""
                  className="heroImage"
                />
              )}
            </Grid>
          </Grid>
          <Grid container item xs={1} alignItems="center" justify="flex-start">
            <ArrowRight
              onClick={() => changeImage(1)}
              className="arrow"
              fontSize="large"
            />
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid
            container
            className="allImages"
            item
            md={12}
            alignItems="center"
            justify="center"
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
        <h3>{product.title}</h3>
        <h4>About The Product</h4>
        <p>
          {
            product.description && product.description.join(' ')
          }
          <span onClick={()=>redirectToUrl(`${APP_ROUTES.PRODUCT_CATEGORY_ALIAS}/${category_slug}/${product.model_id}`)}>...Read more</span>
        </p>
      </Grid>
    </Grid>
  );
}

export default Product;
