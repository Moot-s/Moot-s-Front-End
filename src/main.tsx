import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import './styles/global.css'
import './styles/balloon.css'
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/routes';
import { AuthProvider } from './hooks/useAuth/authContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
