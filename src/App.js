import './index.css'
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";



function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Main />
                <Section />
            </div>
        </div>
    );
}

export default App;
