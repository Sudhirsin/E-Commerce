import React from 'react'
import { Link } from 'react-router-dom'


const AllProducts = (props) =>{
    return (
        <React.Fragment>
            <h2> Products </h2>
            <div style = {{border : "1px solid black"}}>
                {props.productArr.map(element =>{
                    return (
                        <div key = {element.id} style = {{border : "1px solid black"}}>
                            <p> Name : {element.name} </p>
                            <Link to = {`${props.match.url}/${element.id}`}> Click to see the product </Link>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}


export default AllProducts;