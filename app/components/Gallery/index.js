import React from 'react'
import { Image } from 'semantic-ui-react'
import './style.scss'
function Gallery(props) {
  console.log('galleryProps',props)
  const {gallery : images} = props
  const createTable = () => {
    let rows =[] ;
    let row = [];
    let columns = 0;
    {
      // row = 0
      images.map((image,index)=>
        { 
          row.push(
            <td className="image">
              <img src={image} alt="gallery image"/>
            </td>
          )
          if(columns === 2 || index === (images.length-1)){
            // debugger
            rows.push(
              <tr>
                {
                  row
                }
              </tr>
            )
            columns =0;
            row = []
          }else{
            columns ++
          }
        } 
      )
      return rows
    }
  }
  return (
    <div className="gallery">
      <h3 className="title">GALLERY</h3>
      <table>
        {
          createTable()
        }
      </table>
    </div>
  )
}

export default Gallery
