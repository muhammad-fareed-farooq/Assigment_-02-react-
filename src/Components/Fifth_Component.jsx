import Card_01 from "../assets/pro-hm1-1.webp"
import Card_02 from "../assets/pro-hm1-2.webp"
import Card_03 from "../assets/pro-hm1-3.webp"
import Card_04 from "../assets/pro-hm1-4.webp"


const Fifth_Component = ()=>{
    return (
        <div className=" Fifth_Component_Main">
            <div>
                  <img className="Fifth_Component_1_img" src={Card_01}/>
                   <p>Chair <br /> Golden Easy Spot Chair.
                   <br />$210.00</p>
                  
            </div>
           <div>
            <img className="Fifth_Component_1_img" src={Card_02}/>
            <p>Chair <br /> Golden Easy Spot Chair.
                   <br />$210.00</p>
           </div>
           <div>
            <img className="Fifth_Component_1_img" src={Card_03}/>
            <p>Chair <br /> Golden Easy Spot Chair.
                   <br />$210.00</p>
           </div>
           <div>
            <img className="Fifth_Component_1_img" src={Card_04}/>
            <p>Chair <br /> Golden Easy Spot Chair.
                   <br />$210.00</p>
           </div>

        </div>
    )
}
export {Fifth_Component}