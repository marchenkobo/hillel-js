import './App.scss'
import './components/header/Header.scss'
import './components/home/Home.scss'

import Header from "./components/header/Header.jsx";
import Contacts from "./components/Contacts.jsx";
import About from "./components/About.jsx";
import Home from "./components/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  return (
    <>
        <ErrorBoundary>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    </>
  )
}

export default App
