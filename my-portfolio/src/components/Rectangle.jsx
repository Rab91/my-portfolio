import React from 'react'
import { useEffect } from 'react';

function Rectangle() {
  const canvasRef =useRef();
  const drawRec=()=>{
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle=" white";
    context.lineWidth = 2;
    context. strokeRect(50,30,110,90);
    context.strokeRect(170,65,100,80);
  }

  useEffect(()=>{
    drawRec();
  },[]);
  return (
    <div>
 <canvas
    ref={canvasRef}
    style={{
      width: "600px",
      height: "400px",
      background: "url('./bg-img.jpg')",
    }}
  />
    </div>
  )
}

export default Rectangle