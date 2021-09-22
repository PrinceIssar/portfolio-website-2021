import './App.css';
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponent/AboutUs";
import Portfolio from "./Components/BodyComponent/Portfolio";
import Contact from "./Components/BodyComponent/Contact";
import Footer from "./Components/BodyComponent/Footer";



function App() {
  return (
      <div>
      {/*<h1> App Works well</h1>*/}
       <HeadersComponent/>
         <AboutUs/>
       <Portfolio/>
        <Contact/>
       <Footer/>
      </div>
  );
}

export default App;
