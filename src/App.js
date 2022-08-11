import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Button from "./components/shared/Button"
import Home from "./pages/Home"
import Works from "./pages/Works"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Layouts from "./components/layouts/Layouts"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layouts />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/works" element={<Layouts />}>
          <Route index element={<Works />} />
        </Route>
        <Route path="/contact" element={<Layouts />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
