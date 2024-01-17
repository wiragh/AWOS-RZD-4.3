// STYLE IMPORT
import '../Style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';

// LIBRARY IMPORT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// PAGE IMPORT
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  )
}

export default App