import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Button from "./components/shared/Button"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button text={"Download Resume"} />}>
          <Route path="about" element={<Button text={"sjsjs"} />} />
          <Route path="works" element={<Button text={"sjsjs"} />} />
          <Route path="contact" element={<Button text={"sjsjs"} />} />
          <Route path="*" element={<Button text={"sjsjs"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
