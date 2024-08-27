//Wrapper component version-3
//Example of Wrapper components

function App() {

    return (
        <div style={{display: "flex"}}>
            <Card>
                I am Card 1
            </Card>
            <Card>
                <div>
                    I am Card 2
                </div>
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div style={{
            border: "2px solid black",
            padding: 10,
            margin: 20
        }}>
            { children }
        </div>
    );
}

export default App;