import './App.css';
import Header from "./comment/Header";
import Hero from "./comment/Hero";
import Choose from "./comment/Choose";
import About from "./comment/About";
import Fresh from "./comment/Fresh";
import Best from "./comment/Best";
import Special from "./comment/Special";
import Happy from "./comment/Happy";
import CTA from "./comment/CTA";
import Footer from "./comment/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Choose/>
            <About/>
            <Fresh/>
            <Best/>
            <Special/>
            <Happy/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default App;