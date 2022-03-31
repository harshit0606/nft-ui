
import './App.css';
import Header from "./components/header/header"
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Faq from "./components/faq/Faq"
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}/>
    <Route path="faq" element={<Faq/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
