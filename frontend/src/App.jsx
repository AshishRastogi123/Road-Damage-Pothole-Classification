import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import UploadSection from "./components/UploadSection";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/uploadSection" element={<UploadSection />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
