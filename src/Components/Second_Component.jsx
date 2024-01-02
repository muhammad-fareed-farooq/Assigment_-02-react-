import carousl from "../assets/carousl.jpg"
const Second_Component = ()=>{
    return(
      <div className="Second_Component_bg">
         <div className="Second_Component_Main">
        <img style={{width:"430px", marginTop:"150px"}} src={carousl} />
      

       <div className="Second_Component_text">
         <h1 className="Second_Component_h1">30 % Off</h1>
         <h1 className="Second_Component_h1_2" >Comfort Chair</h1>
         <p style={{fontFamily:"arial", fontSize:"24px"}}>Collect from Daxone & get 30% Discount.</p><br />
         <button className="Second_Compnent_Button">SHOP NOW</button>
       </div>
       </div>
      </div>
    )
}

export {Second_Component}