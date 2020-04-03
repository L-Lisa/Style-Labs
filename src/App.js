import React from 'react'
import {Card} from "./Card"



export const App = () => {

  const cardArray =[

    {  
      className: "Unicorn",
      title: "Unicorn",
      emoji:" 🦄",
      txt:"Magic pony",
      btnTxt: "Buy one here",
      primarycolor:"pink",
      secondarycolor:"lightblue"
    },
  {  
    className: "lemon",
    title: "Lemon",
    emoji:" 🍋",
    txt:"This is a really tasty fruit",
    btnTxt: "order now",
    primarycolor:"lightgreen",
    secondarycolor:"lightblue"
  },
  {
    className: "rocket",
    title: "Rocket",
    emoji:" 🚀",  
    txt:"Join us into outer space",
    btnTxt: "order now",
    primarycolor:"grey",
    secondarycolor:"lightblue"
  },
  {
    className:"doggy",
    title:"Doggy",
    emoji:" 🐶",
    txt:"This is a really tasty fruit",
    btnTxt:"adopt me",
    primarycolor:"lightgreen",
    secondarycolor:"mustard"
  }


  ]
  return (
    <div className="cards-wrapper">
      <h1>Pretty Cards</h1>
      <section>
        {cardArray.map(cardItem => (
        <Card {...cardItem}/>
      ))}
      </section>  
    </div>
  ) 
}
