import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Hotels from "./pages/Hotels"
import HotelPage from "./pages/HotelPage"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotelpage" element={<HotelPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App