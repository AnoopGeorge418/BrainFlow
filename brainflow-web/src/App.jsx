import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Landing from "./pages/Landing.jsx"
import Login from "./pages/Login.jsx"
import Apps from "./pages/GetApps.jsx"
import SignUp from "./pages/SignUp.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/apps" element={<Apps />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
