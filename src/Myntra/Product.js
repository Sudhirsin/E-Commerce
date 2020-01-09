import React from 'react'


const Product = (props) =>{
    // console.log(props.productArr)
    const productObj = props.productArr.find((element) => element.id == props.match.params.id)
    if(productObj){
        return(
            <React.Fragment>
                <div style = {{border : "1px solid black"}}>
                    <p> Name : {productObj.name} </p>
                    <p> Price : {productObj.price} </p>
                </div> 
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <h1> Product not found, invalid id </h1>
            </React.Fragment>
        );
    }
}

export default Product;