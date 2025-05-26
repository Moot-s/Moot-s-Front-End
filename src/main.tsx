import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import './styles/global.css'
import './styles/balloon.css'
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/routes';
import { AuthProvider } from './hooks/useAuth/authContext';
import { Toaster } from 'sonner';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <AuthProvider>
          <Toaster richColors/>
          <AppRoutes />
        </AuthProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
