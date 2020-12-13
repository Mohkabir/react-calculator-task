import React,{Component} from 'react';
import './calc.css'

class Calc extends  Component{
  constructor(){
    super()

    this.state = {
      screen : "",
      result : "",
      errors:""
    }
  }

  add1 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 1
      }
    );
  }
  add2 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 2
      }
    );
  }
  add3 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 3
      }
    );
  }
  add4 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen +=4
      }
    );
  }
  add5 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 5
      }
    );
  }
  add6 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 6
      }
    );
  }
  add7 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 7
      }
    );
  }
  add8 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 8
      }
    );
  }
  add9 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 9
      }
    );
  }
  add0 = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += 0
      }
    );
  }
  add = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += '+'
      }
    );
  }
  min = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += '-'
      }
    );
  }
  mult = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += '*'
      }
    );
  }
  div = () => {
    this.setState(
      {
        errors:'',
        screen: this.state.screen += '/'
      }
    );
  }
  equal = () => {
   try{
    let eva = eval(this.state.screen) ;
    this.setState(
      {result: eva }
    );
   }
   catch(error){
    this.setState(
      {errors: 'syntax error',
      screen: '',
      result: ''

      }
    );
   }
  }
  clear = () => {
    this.setState(
      {screen: "",
      result: "",
      errors:''
     }
    );
  }


  render(){
    return(
      <div className='wrapper'>
      <div className='calc_screen'>
        <p>{this.state.screen}</p>
        <p>{this.state.result}</p>
        <p>{this.state.errors}</p>
      </div>
      <div className='calc_body'>
      
         <span onClick={this.add7}>7</span>
         <span onClick={this.add8}>8</span>
         <span onClick={this.add9}>9</span>
         <span onClick={this.div}>/</span>
 
         <span onClick={this.add4}>4</span>
         <span onClick={this.add5}>5</span>
         <span onClick={this.add6}>6</span>
         <span onClick={this.mult}>*</span>
 
         <span onClick={this.add1}>1</span>
         <span onClick={this.add2}>2</span>
         <span onClick={this.add3}>3</span>
         <span onClick={this.min}>-</span>
 
         <span onClick={this.add0}>0</span>
         <span onClick={this.clear}>clear</span>
         <span onClick={this.add}>+</span>
         <span onClick={this.equal} className="equal">=</span>
      </div>
    </div>
    );
  
  }
}

export default Calc ;