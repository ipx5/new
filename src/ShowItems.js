import React, {Component} from 'react';

// class ShowItems extends Component{
//   constructor(props){
//     super(props);
// }
//   render(){
//     return(
//     <h1>Hello, {this.name1}</h1>
//     )
//   }  
//   }

function ShowItems(props) {
    return(
    props.map((item,i) => <li mykey={i}>Test{props.item}</li>)
    )
  }




export default ShowItems;
// export default Welcome;
