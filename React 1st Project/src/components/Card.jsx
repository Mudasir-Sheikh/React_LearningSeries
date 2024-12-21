import React from 'react'

function Card({cardName="Name",cardDiscription="Description",BtnText="click!"}){

 //in parameters , we can pass props i.e Card(props) but for this we have to use props.name etc
// as props is an object so we used destructuring and now we have directly get values with their defeault values if props 
// were not passed

    return(
        <>
<div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{cardName}</h2>
    <p>{cardDiscription}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{BtnText}</button>
    </div>
  </div>
</div>
        </>
    )
}

export default Card