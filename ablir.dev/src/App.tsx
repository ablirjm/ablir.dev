
import './App.css'
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { ReactNode } from 'react';
import Homepage from './page/Homepage/Homepage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  typography: {
    fontFamily: '"IndochineNF", "Roboto Slab", "Helvetica", "Arial", sans-serif',
  },
});
const AppThemeProvider = ({ children } : { children: ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}


export default function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter >
          <Routes>
            {/* Redirect / to /homepage */}
            <Route path="/" element={<Navigate to="/homepage" replace />} />

            {/* Homepage route */}
            <Route path="/homepage" element={<Homepage/>} />
          </Routes>
      </BrowserRouter >
    </AppThemeProvider>
    </>
  )
}

