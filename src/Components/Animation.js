import React, { Component } from 'react';

import Canvas from './Canvas';

class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          ballX:148.5,
          ballY:148.5,
          canWidth:700,
          canHeight:1000,
          speedX:2.75,
          speedY:2.75,
          ballCol:0,
          ballRow:0,
          board: [
            ["X", "X", "X", "X", "X", "X", "X"],
            ["X", "1", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "0", "0", "0", "0", "0", "X"],
            ["X", "X", "X", "X", "X", "X", "X"]
          ],
          counter:0};
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    updateAnimationState() {
      let tempBallCol = Math.floor(this.state.ballX/99);
      let tempBallRow = Math.floor(this.state.ballY/99)
          //ball position to grid
          this.setState({
            ballCol:tempBallCol,
            ballRow:tempBallRow
          })
          
          
        

        if(this.state.ballX > this.state.canWidth-100 || this.state.ballX <100){
          this.setState({
            speedX:this.state.speedX*-1,
            counter:this.state.counter+1
          })
        }
        if(this.state.ballY > this.state.canHeight-100 || this.state.ballY <100){
          this.setState({
            speedY:this.state.speedY*-1,
            counter:this.state.counter+1
          })
        }
        


      this.setState(prevState => ({ 
        ballX:prevState.ballX+prevState.speedX,
        ballY:prevState.ballY+prevState.speedY 
      }));
      this.rAF = requestAnimationFrame(this.updateAnimationState);


      if(this.state.ballCol===1 && this.state.ballRow===1){
        cancelAnimationFrame(this.rAF);
      }
    }
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }

    plusSpeedX=()=>{
      this.setState({
        speedX:this.state.speedX+5,
        speedY:this.state.speedY+5
      })
    }
    minusSpeedY=()=>{
      this.setState({
        speedX:this.state.speedX-5,
        speedY:this.state.speedY-5
      })
    }

    render() {
      let speed={
        speedX:this.state.speedX,
        speedY:this.state.sppedY
      }
      return (
        <div >
          <Canvas {...this.state} />
          <div>Ball Cords:{this.state.ballCol}-{this.state.ballRow}</div>
          <div>Counter: {this.state.counter}</div>
          <div>SpeedX-SpeedY: {speed.speedX}</div>
          <button onClick={this.plusSpeedX}>PLUS</button>
          <button onClick={this.minusSpeedY}>MINUS</button>
          <button onClick={()=>{requestAnimationFrame(this.updateAnimationState)}}>Start</button>
          <button onClick={()=>{cancelAnimationFrame(this.rAF)}}>Stop</button>
        </div>
      );
    }
  }

export default Animation;