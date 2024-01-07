// STYLE IMPORT
import '../Style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// LIBRARY IMPORT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// PAGE IMPORT
import Dashboard from "./Pages/Dashboard"
import Charts from './Pages/Charts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/chart' element={<Charts />}></Route>
      </Routes>
    </Router>
  )
}

export default App