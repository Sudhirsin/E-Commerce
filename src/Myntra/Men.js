import React from 'react'
import { Route,Link, } from 'react-router-dom'
// import MenClothes from './MenClothes'

const Men = (props) => {
    let clothObj = props.clothes
    return (
        <React.Fragment>
            <h1>Clothing</h1>
            <ol>
                
                        <div className="container">
                    <div className="row">
                        <div className="col-4">
                            {props.clothes.map(ele => {
                                return (
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={ele.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.name}</h5>
                                            <p className="card-text">Price : {ele.price}</p>
                                            <Link to={`${props.match.url}/${ele.id}`}>
                                                <button value = {ele.name} onClick={(e) => props.addCart(e.target.value)} className="btn btn-outline-primary">BUY</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ol>
        </React.Fragment>
    )
}

export default Men;