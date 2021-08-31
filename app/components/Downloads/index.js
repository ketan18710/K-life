import React from 'react'
import './style.scss'
import {Grid, Select, MenuItem} from '@material-ui/core'
import MaterialsIcon from './Materials.png'
import ManualIcon from './UserManual.png'
function Downloads(props) {
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
        <Select
          value={-1}
          className="select"
          onChange={(e)=>console.log(1)}
        >
          <MenuItem value={-1} selected>Select material to download...</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div className="actions">
          <h4>Download PDF</h4>
          <h4>Print</h4>
        </div>
      </Grid>
      <Grid className="manuals" justify="space-between"  item md={4} sm={10} container>
        <div className="image">
          <img src={ManualIcon} alt="icon" />
        </div>
        <Select
          value={-1}
          className="select"
          onChange={(e)=>console.log(1)}
        >
          <MenuItem value={-1} selected>Select product Category</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select
          value={-1}
          className="select"
          onChange={(e)=>console.log(1)}
        >
          <MenuItem value={-1} selected>Select Model Number</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div className="actions">
          <h4>Download PDF</h4>
          <h4>Print</h4>
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
export default Downloads