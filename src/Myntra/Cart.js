import React from 'react'
import {Redirect} from 'react-router-dom'

const Cart = (props) => {
    console.log(props.isLogin)
    if(props.isLogin == false){
       return ( 
           <Redirect to="/login" />
        ) 
    }else{
        return (
            <div>
                {props.cartList.map(ele => <h1 key={ele}>{ele}</h1>)}
            </div>
        )
    }
}

export default Cart;