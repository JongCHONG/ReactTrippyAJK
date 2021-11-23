import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { HotelContext, HotelContextProvider } from "./contexts/ContextHotel"

import Home from "./pages/Home"
import Hotels from "./pages/Hotels"
import HotelPage from "./pages/HotelPage"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"

const Body = styled.div`
  background-color: #D4F5F5;
  height: 1000px;
  color: #554348
`
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`
const Header = styled.div`
  width: 100%;
  background-color: #ABE7E7;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const H1 = styled.h1`
  margin: 0;
  padding: 10px;
`

const App = () => {
  return (
    <Body>
      <Container>
        <HotelContextProvider>
          <BrowserRouter>
            <Header>
              <H1>
                TrippyAJK
              </H1>
              <Nav />
            </Header>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotelpage" element={<HotelPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </HotelContextProvider>
      </Container>
    </Body>
  )
}

export default App