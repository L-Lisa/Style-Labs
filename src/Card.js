import React, { useState } from "react"


export const Card = props => {
    const [showComponent, setShowComponent]= useState(false)

    const onClick = ()=> {
        setShowComponent(true)
    }

    return (
<div>
       {!showComponent ? ( 

        <div className="main-card">
            <div className="header">
                <span className="title-txt">{props.title}</span>
                <span className="emoji" aria-label="click to like">{props.emoji}</span>
            </div>
            <main className="card-body">
                {props.txt}
                <button onClick={onClick}><p className="btnTxt">{props.btnTxt} </p></button>
            </main>
        </div>
    
 ) : ( 
      
         <div className="component">
            <div className="component-header">
              {props.title}  
            </div>
                <div className="component-emoji">
                    <span aria-label="click to like">{props.emoji}</span>
                </div>
            </div>

     ) } 
</div>
   ) } 
    