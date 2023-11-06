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
        let textArr= text.split(/\s+/)
        // console.log(textArr)
        if(textArr[textArr.length]!==""){
            return textArr.length-1
        }
    }   
    
    const handelClear =()=>{
        setText("")
        props.showAlert("Enter new text")

    }   
    const handelSpace =()=>{
        setText(text.replace(/\s+/g, ' ').trim())
        props.showAlert("Extra spcace got removed")

    }   
    
    
    const [text, setText] = useState("")


    return (
        <div className={`form-outline mb-4 my-3 text-${props.mode === "light" ? "dark" : "white"}`}>
            <h3 className='m-2 text-center'style={{display:"none"}}>{props.heading}</h3>
            <label className="form-label mt-3" htmlFor="textForm">Enter Your Text here</label>
            <textarea className="form-control" id="textForm" rows="4" value={text} onChange={handelCng}></textarea>
            <div className='text-center m-3'>
                <button type="button" className="btn btn-primary" onClick={handleClick} disabled={text.length===0}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2 " onClick={handelToglClk} disabled={text.length===0}>Change Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handelClear} disabled={text.length===0}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handelSpace} disabled={text.length===0}>Renove Extra space</button>
                {/* onlinck need function not function call for function call put it inside a arrow function which behave as fucntion help in getting a function call */}
                {/* eg:-  onclick={callme("arg")} X(wrong) */}
                {/* for doing this onclick={()=>{callme("arg")}} */}

            </div>
            <div className='my-4'>
                <h3 className='text-center'>
                    Your text <small className="text-body-secondary">Sammery</small>
                </h3>
                <p> Total latter Enterd:- {text.length}</p>
                <p>Total Word Entered :- {handelWCount()}</p>
                <p>Time To Read:- {(handelWCount()/3.5).toFixed(2)} sec</p>
            </div>
            <div className='my-4'>
                <h3 className='text-center'>
                    Your text <small className="text-body-secondary">Preview</small>
                </h3>
                    <p>{text.length===0?"Nothing to Preview ":text}</p>
            </div>
        </div>
    );
}