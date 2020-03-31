import React, {useState} from 'react'
import {Card} from "Card"

export const App = () => {

  const cardArray=[ 
    
    {
      className:"lemon",
      title:"Lemon",
      emoji:" 🍋",
      txt:"This is a really tasty fruit",
      btnTxt:"order now"
    },
     
     
    {
      className:"rocket",
      title:"Rocket", 
      emoji:" 🚀",
      txt:"Join us into the outer space",
      btnTxt:"book seat"
    },
    
    {
      classNameﬂ:"doggy",
      title:"Doggy",
      emoji:" 🐶",
      txt:"This is a really tasty fruit",
      btnTxt:"adopt me"
    }
  ]
  
  return (
    <div>
      <h1>Pretty Cards!</h1>
      <section>

        {cardArray.map(cardItem => (
          <Card {...cardItem}/>
        ))}
      </section>
    </div>
  ) 
}
