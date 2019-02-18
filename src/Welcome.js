import React, {Component} from 'react';

// class Welcome extends Component{
//   constructor(props){
//     super(props);
//       this.name1=this.props.name1;
//       this.name2=this.props.name2;
//       this.name3=this.props.name3;
//       this.age=this.props.age;
//       this.isLoadData=this.props.isLoadData;
//     }
//   render(){
//     return(
//     <h1>Hello, {this.name1}</h1>
    
//     )
//   }  
  
//   }

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
  }


export default Welcome;
// export default Welcome;
