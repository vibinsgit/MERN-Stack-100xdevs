//Wrapper component version-1

function App() {

  return <div>
  <CardWrapper innerComponent={<TextComponent1 />} />
  <CardWrapper innerComponent={<TextComponent2 />} />
  </div>
}

function CardWrapper({ innerComponent }) {
  return <div style={{border: "2px solid black", padding: "10px", margin: "5px"}}>
    { innerComponent }
  </div>
}

function TextComponent1() {
  return <div>
    Hello World
  </div>
}

function TextComponent2() {
  return <div>
    Hello world 2
  </div>
}

export default App

