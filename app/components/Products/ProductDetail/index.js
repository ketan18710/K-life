import React, { useState, useEffect } from 'react';
import './style.scss';
import { redirectToUrl } from '../../../utils/common'
import {DEFAULT_IMAGE_1,DEFAULT_IMAGE_2} from 'utils/constants'
import {Grid, Hidden} from '@material-ui/core'
import { useSwipeable } from "react-swipeable";
import {KeyboardArrowLeft as ArrowLeft, KeyboardArrowRight as ArrowRight} from '@material-ui/icons'
import { NO_IMAGE } from '../../../utils/constants'
import Badges from './badges.png';
function ProductDetail(props) {
  const { product, category } = props;
  console.log(props);
  // const {title, images, description, features, video, manuals,categoryProducts ,model_id ,accessories} = props
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [images, setImages] = useState([
    DEFAULT_IMAGE_1,
    DEFAULT_IMAGE_2,
    DEFAULT_IMAGE_1,
    DEFAULT_IMAGE_2,
  ]);

  useEffect(() => {
    if (product) {
      product && product.images && setImages(product.images);
    }
  }, [product]);

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
  return (
    <Grid className="productDetail" item xs={12} container>
      <Grid
        className="CategoryTitle"
        container
        alignItems="center"
        justify="flex-start"
        item
        xs={12}
      >
        <h2>{category && category.title && category.title}</h2>
      </Grid>
      <Grid className="productDetailImages" container item xs={12}>
        <Grid
          {...handlers}
          container
          item
          md={7}
          sm={12}
          alignItems="center"
          justify="center"
        >
          <Grid container item xs={1} alignItems="center" justify="flex-start">
            <ArrowLeft
              onClick={() => changeImage(0)}
              className="arrow"
              fontSize="large"
            />
          </Grid>
          <Grid container item xs={10} alignItems="center" justify="flex-end">
            <Grid container item lg={12} alignItems="center" justify="flex-end">
              <img
                src={images[activeImageIndex]}
                alt=""
                className="heroImage"
              />
            </Grid>
          </Grid>
          <Grid container item xs={1} alignItems="center" justify="flex-end">
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
            md={5}
            alignItems="center"
            justify="center"
          >
            {images.map((image, index) => (
              <Grid container item md={6} alignItems="center" justify="center">
                <img src={image} onClick={() => setActiveImageIndex(index)} />
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </Grid>
      <Grid className="productBadge" container item xs={12}>
        {product && product.manuals && product.manuals.length > 0 && (
          <Grid
            container
            className="allImages"
            item
            md={6}
            alignItems="center"
            justify="center"
          >
            <a href="/images/myw3schoolsimage.jpg" download>
              Download Product Data-Sheet
            </a>
          </Grid>
        )}
      </Grid>
      <Grid
        className="product"
        container
        alignItems="center"
        justify="flex-start"
        item
        xs={12}
      >
        <h3>{product && product.title && product.title}</h3>
        <h5 className="subHeading">About the product</h5>
        {product &&
          product.description &&
          product.description.map(desc => (
            <p className="description">{desc}</p>
          ))}
        {product && product.video && product.video.length >= 0 && (
          <iframe
            width="100%"
            height="620"
            src={`https://www.youtube.com/embed/${product.video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          />
        )}
        <h5 className="subHeading">Features</h5>
        <ul className="list star">
          {product &&
            product.features &&
            product.features.map(feature => <li>{feature}</li>)}
        </ul>
        <h5 className="subHeading">Technical Specifications</h5>
        <table>
          {product &&
            product.specs &&
            product.specs.map(spec => (
              <tr>
                <td colSpan="5">{spec.title}</td>
                <td colSpan="10">{spec.desc}</td>
              </tr>
            ))}
        </table>
      </Grid>
    </Grid>
  );
}

export default ProductDetail;
