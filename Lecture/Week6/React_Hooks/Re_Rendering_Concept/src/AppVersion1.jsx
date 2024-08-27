import React, { Fragment } from "react"
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("Default title");

  function updateTitle() {
    setTitle("My new title is " + Math.random());
  }

  return (
    <div>
      <button onClick={ updateTitle }>Update the title</button>
      <Header title={ title } />
      <Header title= "I am title1" />
      <Header title= "I am title2" />
      <Header title= "I am title3" />
      <Header title= "I am title4" />
    </div>
  );
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