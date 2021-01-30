import React, { Component } from "react";

import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";
import aws from "./aws.jpg";

class App extends Component {
  state={
    coursename:"",
    coursedetails:"",
    isSubmit:false,
    selectapp:"T",
    
  }
  handleSubmit = async() => {
    await this.setState({isSubmit:true})
  }
  handleChange = async(e) => {
    let name = e.target.name;
    let value = e.target ? e.target.value :e.value;
  
    await this.setState({[name]: value})
   
  }
  
  render() {
    return (
      <div className="App" style={{  
        backgroundImage: `url(${aws})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className="App-title">{this.state.isSubmit ? this.state.coursename : null}</div>
        {!this.state.isSubmit ? 
        (<form>
          <label> Course Name </label>
          <input name="coursename" type="text" value={this.state.coursename} onChange={this.handleChange}>
        
          </input>
          <br/>
          <br/>
          <label style={{paddingRight:"34px"}}> Message </label>
          <input name="coursedetails" type="text" value={this.state.coursedetails} onChange={this.handleChange} >
          
          </input>
          <br/>
          <br/>
          
          <input type="radio" value="S" onChange={this.handleChange} checked={this.state.selectapp === "S"} name="selectapp" />
          <label> StopWatch </label>

 <input type="radio" value="T" onChange={this.handleChange} checked={this.state.selectapp === "T"} name="selectapp" />
          <label> Timer </label>
          <br/>
          <br/>
          <button type="submit" onClick={this.handleSubmit}> Submit </button>
        </form>) :
        
        this.state.selectapp === "S" ? (<div className="Timers">
          <Stopwatch />
          {/* <Countdown /> */}
        </div>) : (<div className="Timers">
     
          <Countdown />
        </div>)
        }
        <br/>
        <br/>
        <br/>
        <div className="App-titlefooter">{this.state.isSubmit ? this.state.coursedetails : null}</div>
       
      </div>
    );
  }
}

export default App;
