import React, { useState, useEffect } from 'react';
import './style.scss';
import { Grid, Select, MenuItem } from '@material-ui/core';
import MaterialsIcon from './Materials.png';
import ManualIcon from './UserManual.png';
function Downloads(props) {
  const { categories, catalogues } = props;
  const [selectedManual, setSelectedManual] = useState({
    category: -1,
    product: -1,
  });
  const [selectedCatalogue, setSelectedCatalogue] = useState(-1);
  const [applicableProducts, setApplicableProducts] = useState([]);
  const [downLoadLinks, setDownLoadLinks] = useState({
    catalogue: null,
    manual: null,
  });
  useEffect(() => {
    if (selectedManual.product !== -1) {
      const cat =
        categories &&
        categories.find(cat => cat.category_slug === selectedManual.category);
      const prod =
        cat &&
        cat.products.find(prod => prod.model_id === selectedManual.product);
      if (prod) {
        setDownLoadLinks({
          ...downLoadLinks,
          manual: prod.manuals ? prod.manuals.link : null,
        });
      }
    } else {
      setDownLoadLinks({ ...downLoadLinks, manual: null });
    }
  }, [selectedManual.product]);
  useEffect(() => {
    if (selectedCatalogue !== -1) {
      const {link} = catalogues[selectedCatalogue]
      if (link) {
        setDownLoadLinks({ ...downLoadLinks, catalogue: link });
      }
    } else {
      setDownLoadLinks({ ...downLoadLinks, catalogue: null });
    }
  }, [selectedCatalogue]);
  useEffect(() => {
    if (selectedManual.category !== -1) {
      const cat =
        categories &&
        categories.find(cat => cat.category_slug === selectedManual.category);
      const prods = cat && cat.products.filter(prod => prod.manuals !== null);
      setApplicableProducts(prods && prods);
    }
  }, [selectedManual.category]);
  console.log(categories);
  return (
    <div className="downloads">
      <div className="banner">
        <div className="content">
          <h2>Download</h2>
          <h2>Center</h2>
          <h4>Stay up-to-date with the latest software upgrades and marketing materials.</h4>
        </div>
      </div>
      <div className="header">
        <h2>Welcome to K-Life Download Center</h2>
        <p>Click the item below if you want to know more</p>
      </div>
      <Grid className="downloadContent" spacing={2} container align="center" justify="center">
        <Grid className="materials" container justify="space-between" item md={4}  sm={10}>
          <div className="image">
            <img src={MaterialsIcon} alt="icon" />
          </div>
          <h3>CATALOGUE</h3>
          <Select
            value={selectedCatalogue}
            className="select"
            onChange={(e)=>setSelectedCatalogue(e.target.value)}
          >
          >
            <MenuItem key={-1} value={-1} selected>Select material to download...</MenuItem>
            {
              catalogues &&
              catalogues.map((catalogue, index) => (
                <MenuItem key={index} value={index} selected>
                  {catalogue.title}
                </MenuItem>
              ))}
            }
          </Select>
          <div className="actions">
            {
              downLoadLinks.catalogue &&
              <h4>
                <a href={downLoadLinks.catalogue} download>
                  {' '}
                  Download PDF
                </a>
              </h4>
            }
          </div>
        </Grid>
        <Grid className="manuals" justify="space-between"  item md={4} sm={10} container>
          <div className="image">
            <img src={ManualIcon} alt="icon" />
          </div>
          <h3>USER MANUALS</h3>
          <Select
            value={selectedManual.category}
            className="select"
            onChange={(e)=>setSelectedManual({...selectedManual,category : e.target.value,product : -1})}
          >
            <MenuItem key={-1} value={-1} selected>Select product Category</MenuItem>
            {
              categories && categories.map((cat,index)=>(
                <MenuItem key={index} value={cat.category_slug} selected>{cat.title}</MenuItem>
              ))
            }
          </Select>
          {
            selectedManual.category && 
          selectedManual.category !== -1 && 
            <Select
              value={selectedManual.product}
              className="select"
              onChange={e =>
                setSelectedManual({
                  ...selectedManual,
                  product: e.target.value,
                })
              }
            >
              <MenuItem value={-1} selected>
                Select Model Number
              </MenuItem>
              {applicableProducts &&
                applicableProducts.map((prod, index) => (
                  <MenuItem key={index} value={prod.model_id} selected>
                    {prod.title}
                  </MenuItem>
                ))}
            </Select>
          )}
          <div className="actions">
            {
              downLoadLinks.manual &&
              <h4>
                <a href={downLoadLinks.manual} download>
                  {' '}
                  Download PDF
                </a>
              </h4>
            )}
          </div>
        </Grid>
      </Grid>
      <div className="header headerGrey">
        <h2>Image Gallery</h2>
        <p>Our products in use</p>
      </div>
    </div>
  )
}
export default Downloads;
