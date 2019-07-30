import React from 'react';
import './index.less'
export default class Index extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      oldPoint:{
        clientX:0,
        clientY:0,
      },
      newPoint:{
        clientY:0,
        clientX:0,
      },
      static:'',
      timer:true,
  	}
  }
  // touchStart(e){
  //   this.oldPoint.clientX = e.touches[0].clientX;
  //   this.oldPoint.clientY = e.touches[0].clientY;
  // }
  // touchMove(e){
  //   if(timer){
  //     timer = false;
  //     this.newPoint.clientX = e.touches[0].clientX;
  //     this.newPoint.clientY = e.touches[0].clientY;
  //     static = check(oldPoint,newPoint);
  //     Move(static);
  //     setTimeout(()=>{
  //       timer = true
  //     },10)
  //   }
  // }
  // check(oldPoint,newPoint){
  //   if((newPoint.clientX > oldPoint.clientX) && (Math.abs(newPoint.clientY - oldPoint.clientY) <= 100)){
  //     return 'left'
  //   }
  //   else if((newPoint.clientX < oldPoint.clientX) && (Math.abs(newPoint.clientY - oldPoint.clientY) <= 100)){
  //     return 'right'
  //   }
  //   else if ((newPoint.clientY < oldPoint.clientY) && (Math.abs(newPoint.clientX - oldPoint.clientX) <=100)){
  //     return 'top'
  //   }
  //   else if((newPoint.clientY > oldPoint.clientY) && (Math.abs(newPoint.clientX - oldPoint.clientX) <=100)){
  //     return 'bottom'
  //   }
  //   else{
  //     return 'other'
  //   }
  // }
  // Move(static){
  //   if(static == 'top'){
      
  //   }
  // }
  render(){
    return (
      <div className="index" >
  			<div className = 'inner' ></div>
      </div>
    )
  }
}
