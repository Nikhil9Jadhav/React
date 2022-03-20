import "./App.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MatchPage } from "./pages/MatchPage"
import { TeamPage } from "./pages/TeamPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />}></Route>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />}></Route>
          MatchPage
        </Routes>
      </Router>
    </div>
  )
}

export default App
