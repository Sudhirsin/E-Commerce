import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from './Myntra/Home'
import About from './Myntra/About'
import Cart from './Myntra/Cart'
import Kids from './Myntra/Kids'
import Login from './Myntra/Login'
import Men from './Myntra/Men'
import Women from './Myntra/Women'
import AllProducts from './Myntra/AllProducts'
import Product from './Myntra/Product'
// import MenClothes from './Myntra/MenClothes'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      productArr : [
        {
            name : "SmartPhone",
            price: 30,
            id : 0
        },
        {
            name : "Watch",
            price : 20,
            id : 1
        },
        {
            name : "Shirt",
            price : 50,
            id : 2
        },
        {
            name : "Pants",
            price : 100,
            id : 3
        }
      ],
      // menTShirtArr : [
      //   {
      //     name : 'Roadster',
      //     id : 1,
      //     img : "/images/tshirt1.webp",
      //     price : 559
      //   },
      //   {
      //     name : 'People',
      //     id : 2,
      //     img : "/images/tshirt2.webp",
      //     price : 459
      //   },
      //   {
      //     name : 'Hypernation',
      //     id : 3,
      //     img : "/images/tshirt3.webp",
      //     price : 1000
      //   },
      //   {
      //     name : 'Superdry',
      //     id : 4,
      //     img : "/images/tshirt4.webp",
      //     price : 1559
      //   }
      // ],
      // menCasualShirtArr : [
      //   {
      //     name : 'Roadster',
      //     id : 1,
      //     img : "/images/shirt1.webp",
      //     price : 559
      //   },
      //   {
      //     name : 'People',
      //     id : 2,
      //     img : "/images/shirt2.webp",
      //     price : 459
      //   },
      //   {
      //     name : 'Hypernation',
      //     id : 3,
      //     img : "/images/shirt3.webp",
      //     price : 1000
      //   },
      //   {
      //     name : 'Superdry',
      //     id : 4,
      //     img : "/images/shirt4.webp",
      //     price : 1559
      //   }
      // ],
      // menFormalShirtArr : [
      //   {
      //     name : 'Roadster',
      //     id : 1,
      //     img : "/images/fshirt1.webp",
      //     price : 559
      //   },
      //   {
      //     name : 'People',
      //     id : 2,
      //     img : "/images/fshirt2.webp",
      //     price : 459
      //   },
      //   {
      //     name : 'Hypernation',
      //     id : 3,
      //     img : "/images/fshirt3.webp",
      //     price : 1000
      //   },
      //   {
      //     name : 'Superdry',
      //     id : 4,
      //     img : "/images/fshirt4.webp",
      //     price : 1559
      //   }
      // ],
      // menShirtArr : [
      //   {
      //     name : 'Roadster',
      //     id : 1,
      //     img : "/images/dshirt1.webp",
      //     price : 559
      //   },
      //   {
      //     name : 'People',
      //     id : 2,
      //     img : "/images/dshirt2.webp",
      //     price : 459
      //   },
      //   {
      //     name : 'Hypernation',
      //     id : 3,
      //     img : "/images/dshirt3.webp",
      //     price : 1000
      //   },
      //   {
      //     name : 'Superdry',
      //     id : 4,
      //     img : "/images/fshirt4.webp",
      //     price : 1559
      //   }
      // ],
      clothes : [
            {
              name : 'Roadster',
              id : 1,
              img : "/images/tshirt1.webp",
              price : 559
            },
            {
              name : 'People',
              id : 2,
              img : "/images/tshirt2.webp",
              price : 459
            },
            {
              name : 'Hypernation',
              id : 3,
              img : "/images/tshirt3.webp",
              price : 1000
            },
            {
              name : 'Superdry',
              id : 4,
              img : "/images/tshirt4.webp",
              price : 1559
            }
      ],
      cartList : [],
      isLogin : false
      
    }
  }

  addCart = (val) => {
    let list = [...this.state.cartList, val]
    this.setState({
      cartList : list
    })
  }

  onLogin = () => {
    let login = this.state.isLogin
    this.setState({
      isLogin : !login
    })
  }

  render() {
    // console.log(this.state.menShirtArr)
    return (
      <BrowserRouter>
        <React.Fragment>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/shop/kids">Kids</Link>
          <Link to="/login">Login</Link>
          <Link to="/shop/men">Men</Link>
          <Link to="/shop/women">Women</Link>
          <Link to="/products">Products</Link>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={() => <Cart isLogin = {this.state.isLogin} cartList={this.state.cartList} />} />
          <Route path="/shop/kids" component = {Kids} />
          <Route path="/login" component={() => <Login onLogin={this.onLogin} />} />
          <Route path="/shop/men" exact component={(props) => <Men addCart = {this.addCart} clothes = {this.state.clothes} {...props}  />} />
          <Route path="/shop/women" component={Women} />
          <Route path="/products" exact render = {props => <AllProducts productArr = {this.state.productArr} {...props} />} />
          <Route path="/products/:id" exact render = {props => <Product productArr = {this.state.productArr} {...props}/>} />
          {/* <Route path="/shop/men/t-shirt" render = {(props) => <MenClothes name="t-shirt" menTShirtArr = {this.state.menTShirtArr} {...props} />} />
          <Route path="/shop/men/casual-shirt" render = {(props) => <MenClothes name="casual-shirt" menCasualShirtArr = {this.state.menCasualShirtArr} {...props} />} />
          <Route path="/shop/men/formal-shirt" render = {(props) => <MenClothes name="formal-shirt" menFormalShirtArr = {this.state.menFormalShirtArr}  {...props} />} />
          <Route path="/shop/men/shirt" render = {(props) => <MenClothes name="shirt" menShirtArr = {this.state.menShirtArr} {...props} /> } /> */}
          <Route path="/shop/men/:id" component = {() => <Cart isLogin = {this.state.isLogin} cartList={this.state.cartList} />} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
