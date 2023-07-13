import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const clearClick = () => {
    let text = " ";
    setText(text);
    props.showAlert("Text cleared!", "success")
  };

  const RemoveExtraspaceClick = () => {
    let newText = text.replace(/  +/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces have been removed!", "success")
  };

  const reverseClick = () => {
    // Split the text into an array of words
    const words = text.trim().split(/\s+/);

    // Reverse the array of words
    const reversedWords = words.reverse();

    // Join the reversed words back into a single string
    let newText = reversedWords.join(" ");
    setText(newText);
    props.showAlert("Text is reversed!", "success")
  };

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
   // text.select();
    navigator.clipboard.writeText(text.value);
   // document.getSelection().removeAllRanges();
    props.showAlert("Copied text to clipboard!", "success")

  }

  const CapitalizeFirst=()=>{
    var words = text.split(' ');

    // Iterate over each word in the array
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      // Convert the first letter of the word to uppercase
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  
      // Replace the word in the array with the capitalized version
      words[i] = capitalizedWord;

  }
  var newText = words.join(' ');
 
  setText(newText);
  props.showAlert("First letters capitalized!", "success")
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(""); // to update the sendtence -> setText('new text')
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={RemoveExtraspaceClick}>Remove extra space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={reverseClick}>Reverse sentence</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={CapitalizeFirst}>Capitalize first Letter</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
