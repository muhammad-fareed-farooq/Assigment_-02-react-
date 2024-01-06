import {First_Component} from "./Components/first_Component"
import "./App.css"
import { Second_Component } from "./Components/Second_Component"
import { Third_Component } from "./Components/Third_Component"
import {Fourth_Componet} from "./Components/Fourth_Component"
import { Fifth_Component } from "./Components/Fifth_Component"
import { Sixth_Component } from "./Components/Sixth_Component"
import { Seventh_Component } from "./Components/Seventh_Component"
import { Eight_Component } from "./Components/Eight_Component"
import { Nine_Component } from "./Components/Nineth_Component"
import { Tenth_Component } from "./Components/Tenth_Component"
import Main_Component from "./Card_Details_Components/Main_Component"
import Card_Component from "./Components/card_component";
import image01 from './assets/pro-hm1-1.webp'
import image02 from './assets/pro-hm1-2.webp'
import image03 from './assets/pro-hm1-3.webp'
import image04 from './assets/pro-hm1-4.webp'
import image05 from './assets/pro-hm1-5.webp'
import image06 from './assets/pro-hm1-6.webp'
import image07 from './assets/pro-hm1-7.webp'
import image08 from './assets/pro-hm1-8.webp'
import { useState } from "react"







const App =()=>{
   
   const [ randerdata , setrenderdata] = useState(false)
   const [data , setdata] = useState()
   const arr =[
      {
         src:image01,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
      {
         src:image02,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
      {
         src:image03,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
      {
         src:image04,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
   ]
   const arr2 = [
      {
         src:image05,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
      {
         src:image06,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
      {
         src:image07,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      },
      {
         src:image08,
         title:"Chair",
         description : "Golden Easy Spot Chair.",
         price:"$210.00"
      }
   ]
   


    return(

      
     <div>

      {randerdata ? (
         <Main_Component/>
      
         ):(
            <div>
         <First_Component />
        <Second_Component />
        <Third_Component/>
        <Fourth_Componet />
        <div style={{display:"flex", justifyContent:"space-around"}}>
         <div>
            {arr.map((b)=>{
            return(
               <Card_Component
               src= {b.src}
               onclick={()=>{
                  setrenderdata(true)
                  setdata(b)
               }}
               title={b.title}
               description = {b.description}
               price = {b.price}
               />
            )
            })}
         </div>
        </div>
       
        <Sixth_Component />
        <Seventh_Component />
        <div style={{display:"flex"}}>
         <div>
            {arr.map((b,i)=>{
         return(
            <Card_Component
            src = {b.src}
            onclick = {()=>{
               setrenderdata(true)
               setdata(b)
            }}
            title = {b.title}
            description = {b.description}
            price = {b.price}
            />

         )
            })}
         </div>

        </div>

        <div style={{display:"flex", marginTop:"10px"}}>
         <div>
             {arr2.map((b ,i) => {
           return(
            <Card_Component 
              src = {b.src}
              onclick = {()=>{
               setrenderdata(true)
               setdata(b)
              }}
              title = {b.title}
              description = {b.description}
              price = {b.price}
            />
           )
             })}
         </div>
        </div>
            </div>
            
         )
      
      }
       
       
       
        <Tenth_Component/>
        

        


     </div>
    )
}

export default App