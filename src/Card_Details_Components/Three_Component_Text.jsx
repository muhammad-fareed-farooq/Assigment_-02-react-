import React,{useState} from 'react'
import { Three_Component } from './Three_Component'

const Three_Component_Text = () => {
     
  const [count,plusValue]= useState(0)
const Plus = ()=>{
    plusValue(count + 1) 
}

const sub = ()=>{
  plusValue(count - 1)

  if(count == 0){
    plusValue (count - 0)
  }
}


  return (
    <div className='Three_Component_text_Main'>
      <div>
        <Three_Component/>
      </div>
      <div>
      <p>Life Style</p>
      <h1>LaaVista Depro, FX 829 v1</h1>
      <span>***** 40+Reviews </span>
      <br />
      <h2>Color :</h2>
     <div style={{display: "flex"}}>
     <div style={{backgroundColor:"Green" , width:"30px", height: "30px" , borderRadius:"50%"}}></div>&nbsp;&nbsp;
      <div style={{backgroundColor:"Yellow" , width:"30px", height: "30px" , borderRadius:"50%"}}></div>&nbsp;&nbsp;
      <div style={{backgroundColor:"Red" , width:"30px", height: "30px" , borderRadius:"50%"}}></div>&nbsp;&nbsp;
      <div style={{backgroundColor:"Purple" , width:"30px", height: "30px" , borderRadius:"50%"}}></div>

     </div>

     <h2>Size :</h2>
     
     <div style={{display:"flex"}}>
     <p>S</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <p>M</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <p>XL</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <p>XXL</p>
     </div>

     <div>
     <h1 style={{display:"inline-block"}}>$210.00 </h1>&nbsp;&nbsp;&nbsp;<p style={{display:"inline-block"}}>
     <del>$230.00</del>
     </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <p style={{backgroundColor:"black", padding:"5px",color:"white", display:"inline-block" }}>-30%</p>
     </div>
    
    <p style={{border:"1px solid red",display:"inline-block" , padding: "10px" ,borderRadius :"30px" }}>
    &nbsp;&nbsp;&nbsp;<button onClick={sub} style={{all:"unset"}}>-</button>&nbsp;&nbsp;&nbsp;<span>{count}</span>&nbsp;&nbsp;<button onClick={Plus} style={{all:"unset"}}>+</button>
    &nbsp;&nbsp;&nbsp;</p>

  
    <p><a className='Three_Component_last' href="#">Compare</a> <a className='Three_Component_last' href="#">Add to wish list</a></p><br />

    <button className='Three_Component_Last_btn'>Add To Cart </button>

      </div>


    </div>
  )   
}

export  {Three_Component_Text}
