import React, { useState } from 'react'



export default function TextForm(props) {
    const [text,setText] = useState("");    
    
    const HandleUpper = () => {

        setText(text.toUpperCase());
        props.showAlert("Changed to Uppercase","success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const HandleLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Changed to Lowercase","success");
    }

    const HandleCapital = () => {
        if(text==="") return;
        let s = text[0].toUpperCase();
        for(let i=0;i<text.length-1;i++){
            if(text[i]===" "){
                s+=text[i+1].toUpperCase();
            }
            else{
                s+=text[i+1];
            }
            console.log(s,text[i])
        }
        setText(s);
        props.showAlert("Capitalised each word","success");
    }

    const HandleClear = () => {
        setText('')
        props.showAlert("Cleared all text","danger");
    }
    return (
        <div>
            <h2 className={`text-${props.mode}`}>Enter text</h2>
            <div className="mb-3">
                <h2 style={{color : props.mode === 'light'?'black':'white'}}>Enter your text</h2>
                <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} onChange = {handleOnChange} id="exampleFormControlTextarea1" style = {{backgroundColor : props.mode === 'light'?'white':'#121212'}} value = {text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={HandleUpper}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={HandleLower}>Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={HandleCapital}>Capitalise</button>
            <button className="btn btn-primary mx-1" onClick={HandleClear}>Clear</button>
        </div>
  )
}
