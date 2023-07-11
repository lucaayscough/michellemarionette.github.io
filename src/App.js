import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./styles/fonts.css"
import "./App.css"
import Portfolio from "./Portfolio.js"
import PortfolioItem from "./PortfolioItem.js"

function App() {
  return(
    <main>
      <BrowserRouter>
        <h1><center><Link to="/">LUCA AYSCOUGH</Link></center></h1>

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/Portfolio/:id" element={<PortfolioItem />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
