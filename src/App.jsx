
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import AIService from './pages/AIService'
import Projects from './pages/Projects'
import MLService from './pages/MLService'
import IotService from './pages/IotService'
import AppService from './pages/AppService'
import WebService from './pages/WebService'
import UiUxServices from './pages/UiUx'
import BackendServices from './pages/BackendServices'
import EcommerceServices from './pages/EcommerceServices'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollTop from "./components/ScrollTop";

function App() {

  return (
    <>
      <Router>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/ai-service" element={<AIService />} />
          <Route path="/machine-learning-service" element={<MLService />} />
          <Route path="/iot-service" element={<IotService />} />
          <Route path="/app-service" element={<AppService />} />
          <Route path="/web-service" element={<WebService />} />
          <Route path="/backend-service" element={<BackendServices />} />
          <Route path="/uiux-service" element={<UiUxServices />} />
          <Route path="/ecommerce-service" element={<EcommerceServices />} />
          <Route path="/contact" element={<ContactUs />}></Route >
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
