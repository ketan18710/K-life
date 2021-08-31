import React,{useState,useEffect} from 'react'

import {Accordion,AccordionSummary,AccordionDetails} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import Product from './Product'
function Category(props) {
  return (
    <Accordion className="productCategory">
      <AccordionSummary
        expandIcon={<RemoveIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
        className="summary"
      >
        <h2>Hb1Ac Analyser</h2>
      </AccordionSummary>
      <AccordionDetails className="details">
        <Product />
        <Product />
      </AccordionDetails>
    </Accordion> 
  )
}

export default Category
