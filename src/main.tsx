import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import './styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPageComponent from './presentation/pages/landingPage/landingPage.component.tsx';
import NavBarComponent from './presentation/components/navbar/NavBar.component.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <NavBarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageComponent />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
)
