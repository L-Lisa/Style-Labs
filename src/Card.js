import React, { useState } from "react"


export const Card = props => {
    const [showComponent, setShowComponent]= useState(false)


const onClick = () => {
    setShowComponent(true)
}
 return (

    <div>
        {!showComponent ? (
            <div className="main-card" style={{ backgroundColor: props.primarycolor }} >
                <div style={{ backgroundColor: props.secondarycolor }} className="header">
                    <span className="title-txt">{props.title}</span>
                    <span className="emoji" aria-hidden="true">{props.emoji}</span>
                </div>
                <section  className="card-body">
                    {props.txt}
                    <button onClick = {onClick}>
                        <p className="btntxt">{props.btnTxt} </p>
                    </button>
                </section>
            </div>

        ): (
        <section className="component-wrapper">
            <div className="component">
                <section style={{ backgroundColor: props.secondarycolor }} className="component-header transform">
                   <h1 className="component-header-txt"> {props.title}</h1>
                </section>
                <div style={{ backgroundColor: props.primarycolor }} className="component-emoji transform">
                    <span className="emoji-fig" >{props.emoji}</span>
                </div>
            </div>
        </section>
        )}
    </div>
    )
}
