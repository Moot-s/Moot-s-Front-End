import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import './styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import NavBarComponent from './presentation/components/NavBarComponent/NavBar.component.tsx';
import AuthPage from './presentation/pages/Auth/Auth.component.tsx';
import LandingPage from './presentation/pages/Landing/landingPage.component.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <NavBarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage/>} />
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
)
