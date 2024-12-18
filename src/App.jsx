import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Section1 from './Components/Page/Page'
import PersonalForm from './Components/PersonalForm/PersonalForm'
import DietForm from './Components/DietForm/DietForm'
import WorkoutPlan from './Components/Page/WorkoutPlan'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DietPlan from './Components/Page/DietPlan'
import ScrollToTop from './Components/ScrollToTop'
import OurBenifits from './Components/Benifits/OurBenifits'

function App() {

  return (
    <>
     {/* <Section1 className/> */}
     {/* <PersonalForm/> */}
     {/* <DietForm/> */}
     
     <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Section1/>}></Route>
        <Route path='/DietPlan' element={<DietPlan/>}></Route>
        <Route path='/WorkoutPlan' element={<WorkoutPlan/>}></Route>
        <Route path='/DietForm' element={<DietForm/>}></Route>
        <Route path="/PersonalForm" element={<PersonalForm />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
