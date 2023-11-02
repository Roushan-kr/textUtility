import React, { useState } from 'react';
// import copyText from "../function/copyText";

export default function TextForm(props) {
    const handleClick = async () => {
        // copyText("textForm"); // by using js to copy 

        // by using react 
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Text Copyed")

        } catch (err) {
            console.error("Unable to copy text: " + err);
        }
    };

    const handelToglClk = () => {
        // setText(text.toUpperCase())
        setText(text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase());
        console.log("i clicked ");
        props.showAlert("Text Case changed")
    }
    const handelCng = (event) => {
        setText(event.target.value)
        console.log("i changed");
        // console.log(text.split(" "))
    }
    const handelWCount =()=>{
        let textArr= text.split(" ")
        if(textArr[textArr.length]!==" "){
           return textArr.length-1
        }
    }   
    
    const handelClear =()=>{
        setText("")
        props.showAlert("Enter new text")

    }   
    
    
    const [text, setText] = useState("")


    return (
        <div className={`form-outline mb-4  bg-${props.mode} text-${props.mode === "light" ? "dark" : "white"}`}>
            <label className="form-label" htmlFor="textForm">Enter Your Text here</label>
            <textarea className="form-control" id="textForm" rows="4" value={text} onChange={handelCng}></textarea>
            <div className='text-center m-3'>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handelToglClk}>Change Case</button>
                <button className="btn btn-primary mx-2" onClick={handelClear}>Clear Text</button>
            </div>
            <div className='my-4'>
                <h3 className='text-center'>
                    Your text <small className="text-body-secondary">Sammery</small>
                </h3>
                <p> Total latter Enterd:- {text.length}</p>
                <p>Total Word Entered :- {handelWCount()}</p>
                <p>Time To Read:- {(handelWCount()/3.5).toFixed(2)} sec</p>
            </div>
        </div>
    );
}
