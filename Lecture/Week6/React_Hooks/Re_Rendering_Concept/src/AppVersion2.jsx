//Minimizing the re-rendering process

import React, { Fragment } from "react"
import { useState } from "react"

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title= "I am title1" />
      <Header title= "I am title2" />
      <Header title= "I am title3" />
      <Header title= "I am title4" />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Default title");

  function updateTitle() {
    setTitle("My new title is " + Math.random());
  }

  return <div>
      <button onClick={ updateTitle }>Update the title</button>
      <Header title={ title } />
  </div>
}

//Object destructuring syntax
function Header( { title } ) {
  return <div>
    { title }
  </div>
}

/* function Header(props) {
  return <div>
    { props.title }
  </div>
} */

export default App
