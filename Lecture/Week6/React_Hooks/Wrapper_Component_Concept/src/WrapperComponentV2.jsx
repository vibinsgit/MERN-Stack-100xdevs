//Wrapper component version-2
//real wrapper

function App() {

    return (
    <div>
        <CardWrapper>
            Hello World
        </CardWrapper>
        <CardWrapper>
            <TextComponent></TextComponent>
        </CardWrapper>
        <CardWrapper>
            <CardWrapper>
                <TextComponent></TextComponent>
            </CardWrapper>
        </CardWrapper>
    </div> );
}

function CardWrapper({ children }) {
    return (
    <div style={{border: "2px solid black", padding: 20}}>
        { children }
    </div> );
}

function TextComponent() {
    return (
        <div>
            Text Component Text
        </div>
    );
}

export default App;