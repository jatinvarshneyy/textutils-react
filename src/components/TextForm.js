import React, { useState } from "react";

export default function TextForm() {
  // Converts the text to uppercase and updates the displayed text.
  const handleUppercaseClick = () => {
    let uppercaseFinalText = text.toUpperCase();
    setText(uppercaseFinalText);
  };

  // Converts the text to lowercase and updates the displayed text.
  const handleLowercaseClick = () => {
    let lowercaseFinalText = text.toLowerCase();
    setText(lowercaseFinalText);
  };

  // Clears the displayed text.
  const handleClearClick = () => {
    let clearFinalText = "";
    setText(clearFinalText);
  };

  // Handles extra spaces in the text and updates the displayed text.
  const handleExtraSpacesClick = () => {
    let finalText = text.split(/[ ]+/);
    setText(finalText.join(" "));
  };

  // Copies the displayed text to the clipboard.
  const handleCopyTextClick = () => {
    let text = document.getElementById("textPlay");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Handles changes in the input/text area value.
  const handleOnChange = (event) => {
    console.log("OnChange was Clicked.");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <label htmlFor="Enter the text to analyze" className="block text-2xl mb-5 mt-10 font-bold text-left leading-6 text-gray-900 textformLabel">Enter the text to analyze :</label>

        <div className="mt-2">
          <textarea id="textPlay" name="textPlay" value={text} rows="10" placeholder="Enter the text to use the utilities..." onChange={handleOnChange} className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"></textarea>
        </div>

        <div role="alert" className="relative my-3 w-full p-3 text-base text-center text-dark rounded-lg font-regular bg-gradient-to-tr from-slate-200 to-gray-200">
          <div className="text-center float-center">
            <ul className="flex list-disc list-inside gap-6 hover:text-bold mx-5">
              <li className="hover:font-semibold">
                {text.split(" ").length} Words
              </li>
              <li className="hover:font-semibold">{text.length} Characters</li>
            </ul>
          </div>
        </div>

        <div class="divide-x mx-auto divide-gray-800 text-center">
          {/* Uppercase Button */}
          <button class="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/20 active:bg-gray-900/20" onClick={handleUppercaseClick} type="button">Uppercase</button>

          {/* Lowercase Button */}
          <button class="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/20 active:bg-gray-900/20" onClick={handleLowercaseClick} type="button">Lowercase</button>
          
          {/* Remove Extra Space Button */}
          <button class="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/20 active:bg-gray-900/20" onClick={handleExtraSpacesClick} type="button">Remove Extra Spaces</button>
          
          {/* Clear Text Button */}
          <button class="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/20 active:bg-gray-900/20" onClick={handleClearClick} type="button">Clear Text</button>
          
          {/* Copy Text Button */}
          <button class="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg rounded-l-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/20 active:bg-gray-900/20" onClick={handleCopyTextClick} type="button">Copy Text</button>
        </div>
      </div>
    </>
  );
}