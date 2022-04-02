
import './App.css';
import Header from "./components/header/header"
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Faq from "./components/faq/Faq"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ContactUs from './components/contactUs/ContactUs';
import SingleEvent from './components/singleEvent/SingleEvent';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" exact element={<Home/>}></Route>
    <Route path="/about" exact element={<About/>}/>
    <Route path="/faq" exact element={<Faq/>}/>
    <Route path="/contactus" exact element={<ContactUs/>}/>
    <Route path="/event/:index" exact element={<SingleEvent/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
