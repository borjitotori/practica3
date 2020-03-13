import React, { Component } from 'react';
import './App.css';
import cloneDeep from "clone-deep";
import Films from "./Components/Films"
import Data from "./assets/data";

class App extends Component {
  state = {
    data: { ...Data },
    rate: [["☆","☆","☆","☆","☆"],
          ["☆","☆","☆","☆","☆"],
          ["☆","☆","☆","☆","☆"],
          ["☆","☆","☆","☆","☆"],
          ["☆","☆","☆","☆","☆"],
          ["☆","☆","☆","☆","☆"],
          ["☆","☆","☆","☆","☆"]],
    votes:[[0,0],
          [0,0],
          [0,0],
          [0,0],
          [0,0],
          [0,0],
          [0,0]]
  }


  bigPictureHandler = film =>{
    const data = cloneDeep(this.state.data);
    data.info.bigPicture = film;
    this.setState({data});
    console.log(film)  
  }
  //samll picture portview Handler
  smallPicturehandler= () =>{
    const data = cloneDeep(this.state.data);
    data.info.bigPicture = 0;
    this.setState({data});  
  }

  starHandler = (newrate, id) =>{
    const rate = cloneDeep(this.state.rate);
    const votes = cloneDeep(this.state.votes);
    votes[id-1][0]++;
    votes[id-1][1] = (votes[id-1][1] + newrate)/2
    let stars = votes[id-1][1];
    console.log(votes[id-1][1])
    this.setState({votes});

    switch(Math.round(stars)){
      case 1:
        rate[id-1] = ["★","☆","☆","☆","☆"];
        this.setState({rate});
        break;
      case 2:
        rate[id-1] = ["★","★","☆","☆","☆"];
        this.state.votes[id-1].push(2);
        this.setState({rate});
        break;
      case 3:
        rate[id-1] = ["★","★","★","☆","☆"];
        this.state.votes[id-1].push(3);
        this.setState({rate});
        break;
      case 4:
        rate[id-1] = ["★","★","★","★","☆"];
        this.state.votes[id-1].push(4);
        this.setState({rate});
        break;
      case 5:
        rate[id-1] = ["★","★","★","★","★"];
        this.state.votes[id-1].push(5);
        this.setState({rate});
        break;
    }


  }

  render() {
    return (
      <div className="App">
        <Films 
        starHandler = {this.starHandler} 
        bigPictureHandler = {this.bigPictureHandler} 
        smallPicturehandler ={this.smallPicturehandler}  
        className="Films" 
        data = {this.state.data}
        rate = {this.state.rate}
        votes = {this.state.votes}
        />
      </div>
    );
  }
}

export default App;
