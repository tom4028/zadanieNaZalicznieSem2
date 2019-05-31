import React, { Component } from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class Canvas extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state={
            speed:this.props.speed,
        mouseX:0,
        mouseY:0
        }
      }
      componentDidUpdate() {
        //brickGrid =[];
        //
        const { ballX,ballY} = this.props;
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        canvas.addEventListener('mousemove',this.updateMousePos);
        const width = canvas.width;
        const height = canvas.height;
        const brick_gap =1;
        const brickWidth = 99;
        const brickHeight = 99;
        // console.log(width,height);
        // console.log(this.state.ballX);
        ctx.fillStyle = '#4397AC';
        ctx.fillRect(0,0, width, height);
        let showWords = this.state.mouseX+'|'+this.state.mouseY;
        this.colorText(ctx,showWords,this.state.mouseX,this.state.mouseY,'yellow')
        

        for(let i=0;i<7;i++){
          for(let j=0;j<10;j++){
            
            this.drawRect(ctx,i*100,j*100,brick_gap,"blue");
              // if(this.props.board[j][i]==='X'){
                
              //   this.drawRect(ctx,i*100,j*100,brick_gap,"blue");
                
              // }
              let word = j+' '+i;
              this.colorText(ctx,word,i*105,j*110,'yellow');
              //ball position
              
          }  
        }
        
        this.drawCircle(ctx,ballX,ballY);
        this.colorText(ctx,ballX/98+' '+ballY/98,ballX,ballY,'yellow')
        this.colorText(ctx,showWords,this.state.mouseX,this.state.mouseY,'yellow')
      }

      updateMousePos=(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        this.setState({
          mouseX:mouseX,
          mouseY:mouseY
        })
      }

       colorText=(ctx,showWords,textX,textY,fillColor)=>{
        ctx.fillStyle = fillColor;
        ctx.fillText(showWords,textX,textY);
    }

      
      
      drawRect=(ctx,topLeftX,topLeftY,gap,color)=>{
        ctx.fillStyle=color;
        ctx.fillRect(topLeftX,topLeftY,100-gap,100-gap);
      }

      drawCircle =(ctx,ballX,ballY)=>{
        
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(ballX,ballY,49,0,Math.PI*2,true);
        ctx.fill();
        ctx.closePath();
      }


    render() {
        return (
            <div>
                <canvas   style={{border:'1px solid red'}}ref={this.canvasRef} width={this.props.canWidth} height={this.props.canHeight} />
            </div>
        );
    }
}

export default Canvas;