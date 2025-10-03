
import './App.css'
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './page/Navigation'


export default function App() {
  return (
    <>
      <BrowserRouter >
        <Navigation />
        <Routes>
          {/* Redirect / to /homepage */}
          <Route path="/" element={<Navigate to="/homepage" replace />} />

          {/* Homepage route */}
          <Route path="/homepage" element={<></>} />
        </Routes>
    </BrowserRouter >
    </>
  )
}

