// import React from 'react'
// import {Route, Link} from 'react-router-dom'

// const MenClothes = (props) => {
//     console.log(props)
//     if(props.name == 't-shirt'){
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             {props.menTShirtArr.map(ele => {
//                                 return (
//                                     <div className="card" style={{width: '18rem'}}>
//                                         <img src={ele.img} className="card-img-top" alt="..."/>
//                                         <div className="card-body">
//                                             <h5 className="card-title">{ele.name}</h5>
//                                             <p className="card-text">Price : {ele.price}</p>
//                                             <Link to={`${props.match.url}/${ele.id}`}>
//                                                 <button className="btn btn-outline-primary">BUY</button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
//     if(props.name == 'shirt'){
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             {props.menShirtArr.map(ele => {
//                                 return (
//                                     <div className="card" style={{width: '18rem'}}>
//                                         <img src={ele.img} className="card-img-top" alt="..."/>
//                                         <div className="card-body">
//                                             <h5 className="card-title">{ele.name}</h5>
//                                             <p className="card-text">Price : {ele.price}</p>
//                                             <Link to={`${props.match.url}/${ele.id}`}>
//                                                 <button className="btn btn-outline-primary">BUY</button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
//     if(props.name == 'formal-shirt'){
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             {props.menFormalShirtArr.map(ele => {
//                                 return (
//                                     <div className="card" style={{width: '18rem'}}>
//                                         <img src={ele.img} className="card-img-top" alt="..."/>
//                                         <div className="card-body">
//                                             <h5 className="card-title">{ele.name}</h5>
//                                             <p className="card-text">Price : {ele.price}</p>
//                                             <Link to={`${props.match.url}/${ele.id}`}>
//                                                 <button className="btn btn-outline-primary">BUY</button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
//     if(props.name == 'casual-shirt'){
//         console.log(props.menCasualShirtArr)
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             {props.menCasualShirtArr.map(ele => {
//                                 return (
//                                     <div className="card" style={{width: '18rem'}}>
//                                         <img src={ele.img} className="card-img-top" alt="..."/>
//                                         <div className="card-body">
//                                             <h5 className="card-title">{ele.name}</h5>
//                                             <p className="card-text">Price : {ele.price}</p>
//                                             <Link to={`${props.match.url}/${ele.id}`}>
//                                                 <button className="btn btn-outline-primary">BUY</button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default MenClothes;