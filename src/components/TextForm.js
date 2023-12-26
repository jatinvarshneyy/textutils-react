import React, { useState } from "react";

export default function TextForm(props) {
  // Converts the text to uppercase and updates the displayed text.
  const handleUppercaseClick = () => {
    let uppercaseFinalText = text.toUpperCase();
    setText(uppercaseFinalText);
    props.showAlert("Your text converted to uppercase successfully !", "success")
  };

  // Converts the text to lowercase and updates the displayed text.
  const handleLowercaseClick = () => {
    let lowercaseFinalText = text.toLowerCase();
    setText(lowercaseFinalText);
    props.showAlert("Your text converted to lowercase successfully !", "success")
  };

  // Clears the displayed text.
  const handleClearClick = () => {
    let clearFinalText = "";
    setText(clearFinalText);
    props.showAlert("Your text cleared successfully !", "success")
  };

  // Handles extra spaces in the text and updates the displayed text.
  const handleExtraSpacesClick = () => {
    let finalText = text.split(/[ ]+/);
    setText(finalText.join(" "));
    props.showAlert("All the extra spaces have been removed successfully !", "success")
  };

  // Copies the displayed text to the clipboard.
  const handleCopyTextClick = () => {
    window.navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success")
  };

  // Handles changes in the input/text area value.
  const handleOnChange = (event) => {
    console.log("OnChange was Clicked.");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="mx-auto text-left">
        <label className="block fs-3 fw-bold my-3 textformLabel" style={{color: props.mode==='dark'?'white':'#092635'}}>{props.textboxLabel}</label>

        <textarea value={text} className="form-control" id="textPlay" placeholder="Write the text here..." style={{backgroundColor: props.mode==='dark'?'#092635':'white', color: props.mode==='dark'?'white':'#092635'}} onChange={handleOnChange} rows="10" />
      </div>

      <div className="alert alert-success my-2">
        <span className="mx-3">{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} Words</span>
        <span className="mx-3">{text.length} Characters</span>
      </div>

      <button onClick={handleUppercaseClick} disabled={text.length===0} type="button" className="btn btn-outline-danger border border-secondary shadow-sm my-2 me-2">Uppercase</button>
      <button onClick={handleLowercaseClick} disabled={text.length===0} type="button" className="btn btn-outline-danger border border-secondary shadow-sm m-2">Lowercase</button>
      <button onClick={handleClearClick} disabled={text.length===0} type="button" className="btn btn-outline-danger border border-secondary shadow-sm m-2">Clear Text</button>
      <button onClick={handleExtraSpacesClick} disabled={text.length===0} type="button" className="btn btn-outline-danger border border-secondary shadow-sm m-2">Remove Extra Spaces</button>
      <button onClick={handleCopyTextClick} disabled={text.length===0} type="button" className="btn btn-outline-danger border border-secondary shadow-sm m-2">Copy Text</button>

      <div class="p-3 mb-4 rounded-3">
        <div class="py-1">
          <h1 class="fs-4 fw-bold" style={{color: props.mode==='dark'?'white':'#092635'}}>Preview your text :</h1>
          <p class="col-md-8 fs-5" style={{color: props.mode==='dark'?'white':'#092635'}}>{text.length>0?text:"Enter something to preview your text."}</p>
        </div>
      </div>
    </div>
  );
}