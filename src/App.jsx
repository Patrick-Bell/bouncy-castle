import './App.css'
import { Route, Routes } from "react-router"
import Home from './components/Pages/Home'
import SafetyPage from './components/Legal/Risk'
import RiskAssessmentPage from './components/Legal/Terms'
import FAQPage from './components/FAQ/FAQ'
import SpeedDial from './components/SpeedDial/SpeedDial'
import Products from './components/Catalogue/Products'
import DynamicProductPage from './components/Catalogue/DynamicProductPage'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/terms-and-conditions' element={<SafetyPage />} />
      <Route path='/risk-assessments' element={<RiskAssessmentPage />} />
      <Route path='/frequently-asked-questions' element={<FAQPage />} />
      <Route path='/bouncy-castles' element={<Products />} />
      <Route path='/bouncy-castle/:id' element={<DynamicProductPage />} />
      </Routes>

      <SpeedDial />
    </>
  )
}

export default App
