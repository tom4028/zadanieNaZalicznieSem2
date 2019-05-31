import React, { Component } from 'react';


class TempCanvas extends Component {

    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
        this.state={
            speed:0
        }
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount(){
     this.updateCanvas();
    }

    

    updateCanvas(){
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        
        ctx.fillRect(0,0,400,400);
        ctx.fillStyle="red";
        ctx.beginPath();
        ctx.arc(50,50,10,0,Math.PI*2,true);
        ctx.fill();
        ctx.closePath(0);
        
    }
    
    render() {
        return (
            <canvas ref={this.canvasRef} width={400} height={400}/>
        );
    }
}

export default TempCanvas;