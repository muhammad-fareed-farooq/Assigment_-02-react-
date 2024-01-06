import React from 'react'
import {One_Component} from './One_Component'
import { Tow_Component } from './Tow_Component'
import { Three_Component } from './Three_Component'
import { Three_Component_Text } from './Three_Component_Text'
import { Four_Component } from './Four_Component'
import { Five_Component } from './Five_Component'
import { Six_Component } from './Six_Component'



const Main_Component = () => {
  return (
    <div>
      <One_Component/>
      <Tow_Component/>
      <Three_Component_Text/>
      <Four_Component/>
      <Five_Component/>
      <Six_Component/>
    </div>
  )
}

export  default Main_Component

