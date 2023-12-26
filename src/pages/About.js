import React from "react";

function About(props) {
  return (
    <div class="col-lg-12 container px-4 py-2 my-5" style={{color: props.mode==='dark'?'white':'#092635'}}>
      <h1 class="display-5 fw-bold">About Us</h1>
      <div class="mx-auto">
        <p class="lead mb-4">
          TextUtils is a comprehensive web application designed to empower users
          with versatile text manipulation capabilities. With a simple and
          intuitive interface, it offers a diverse array of functionalities to
          modify text effortlessly. Users can input their text and instantly
          transform it to uppercase or lowercase, eliminating excess spaces,
          tabs, or line breaks to refine the formatting. Additionally, it
          provides features to capitalize sentences, convert text to title case,
          and perform character or word count analysis.
          <br />
          <br />
          This tool goes beyond basic alterations, enabling users to encode or
          decode text in various formats, such as URL encoding or base64
          encoding, enhancing data security or interoperability. Furthermore,
          TextUtils facilitates the extraction of specific sections from text
          using custom-defined patterns or regular expressions, aiding in data
          extraction tasks.
          <br />
          <br />
          Whether used by writers, programmers, or individuals handling textual
          data, TextUtils simplifies the often tedious process of text
          modification. Its multifaceted functionalities streamline text
          manipulation, boosting productivity and precision in handling diverse
          text-related tasks. From formatting adjustments to intricate text
          processing, TextUtils serves as a versatile and efficient solution for
          anyone seeking to manipulate text swiftly and accurately.
        </p>
      </div>
    </div>
  );
}

export default About;
