//memo to minimize the re-rendering

import React, { Fragment } from "react"
import { memo } from "react"
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

//Minimize the re-render using memo
const Header = memo(function ( { title } ) {
  return <div>
    { title }
  </div>
});

export default App