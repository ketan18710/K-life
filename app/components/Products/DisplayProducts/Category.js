import React, { useState, useEffect } from 'react';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Product from './Product';
import { getUrlParam } from '../../../utils/common';
function Category(props) {
  const { category } = props;
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const category_slug = getUrlParam('category_slug');
    if (category && category_slug === category.category_slug) {
      setExpanded(true);
      const element = document.querySelector('.productCategory');
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, []);
  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      className="productCategory"
    >
      <AccordionSummary
        expandIcon={!expanded ? <AddIcon /> : <RemoveIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
        className="summary"
      >
        <h2>{category.title}</h2>
      </AccordionSummary>
      <AccordionDetails className="details">
        {category &&
          category.products &&
          category.products.map(product => (
            <Product
              category_slug={category.category_slug && category.category_slug}
              product={product}
            />
          ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default Category;
