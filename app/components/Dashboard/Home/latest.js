import React,{useState,useEffect} from 'react'

function latest(props) {
  return (
    <div className="latestProducts">
      <h3 className="title">LATEST PRODUCTS</h3>
      <div className="add">
        <select name="" id=""></select>
      </div>
      <div className="products">
        {
            configTemp && configTemp.latest  && configTemp.latest.map(product=>(
              <div className="product">
                <Card 
                  title={product.title}
                  image={product.image}
                  description={product.description}
                  action={()=>alert(1)}
                  actionText="Edit"
                />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default latest
