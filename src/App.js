import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import  Welcome from './Welcome.js'
// import ShowItems from './ShowItems.js'
// import Button from './Button.js'
import axios from 'axios';
import ArticleList from './ArticleList';

class App extends Component{
  constructor(props){
    super(props);
      this.name1='plus';
      this.name2='minus';
      this.name3='Semen';
      this.age=25;
      this.isLoadData=false;
      this.state ={
        date: new Date(),
        counter: 0,
        data:[]

      }
    }
    // 
    componentDidMount(){
      // this.temerId= setInterval(() => {
      //   this.setState({date:new Date()})
      // }, 1000);
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        // console.log(response.data);
        this.setState({data:response.data})
      })
    }
    
    buttonHandlerPlus=()=>{
      this.state.counter++;

    }
    buttonHandlerMinus=()=>{
      this.state.counter--;

    }

    onButtonClick=()=>{
      console.log('button clicked');
    }
    
    
//   show(props){
//     return(
//   <ShowItems arr={this.arr}/>
//     )
// }

  render(){
    return(
    <div>
      {/* <Welcome name1={this.name1}/> */}
    {/* <h2>It is {this.state.date.toLocaleTimeString()}</h2>

    <Button onClick={this.buttonHandlerPlus} name={this.name1}/>
    <Button onClick={this.buttonHandlerMinus} name={this.name2}/>

    <h2>{this.state.counter}</h2> */}
    {/* <button onClick={this.show}>BustArray</button> */}
    {/* <Welcome onClick={this.onButtonClick}/>; */}

    <ArticleList items={this.state.data}/>

    </div>
    )
  }

}
// function TestComponent (props) {
//     return(
//       <ul>
//     {props.items.map(el=>
//     <li>
//     {el.title}
//     <button onClick={this.handleClick}>close</button>
//     </li>)}
//       </ul>
//     )
    
// }
{/* <Comment props? >
  <UserInfo props?>
    <Avatar props?>img</Avatar>
    <Username props?>name</Username>
  </UserInfo>
  
  <ShowDate props?>date</ShowDate>
</Comment> */}



// function App(props) {
//   return (
//     <div>
//      <Welcome name="Ilya"/>
//      <Welcome name="Vasya"/>
//      <Welcome name="Petya"/>
//      <Template movieTiltle="Ender's Game"/>
     
//     </div>
//   )
// }



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


export default App;
