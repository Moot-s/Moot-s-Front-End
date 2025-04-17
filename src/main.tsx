import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import './styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import AuthPage from './presentation/pages/Auth/Auth.component.tsx';
import LandingPage from './presentation/pages/Landing/LandingPage.component.tsx';
import Google from './presentation/pages/OAuth/Google/GoogleOAuth.component.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/connect/google/redirect" element={<Google />} />
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
)
