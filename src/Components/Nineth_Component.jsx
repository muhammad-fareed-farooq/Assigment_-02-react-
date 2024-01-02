import Card_5 from "../assets/pro-hm1-5.webp"
import Card_6 from "../assets/pro-hm1-6.webp"
import Card_7 from "../assets/pro-hm1-7.webp"
import Card_8 from "../assets/pro-hm1-8.webp"


const Nine_Component = ()=>{
    return (
        <div className=" Nineth_Component_Main">
        <div>
              <img className="Nineth_Component_1_img" src={Card_5}/>
               <p>Chair <br /> Golden Easy Spot Chair.
               <br />$210.00</p>
              
        </div>
       <div>
        <img className="Nineth_Component_1_img" src={Card_6}/>
        <p>Chair <br /> Golden Easy Spot Chair.
               <br />$210.00</p>
       </div>
       <div>
        <img className="Nineth_Component_1_img" src={Card_7}/>
        <p>Chair <br /> Golden Easy Spot Chair.
               <br />$210.00</p>
       </div>
       <div>
        <img className="Nineth_Component_1_img" src={Card_8}/>
        <p>Chair <br /> Golden Easy Spot Chair.
               <br />$210.00</p>
       </div>

    </div>
    )
}
export {Nine_Component}