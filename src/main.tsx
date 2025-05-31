import "./styles/global.css";
import "./styles/balloon.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

import { HeroUIProvider } from "@heroui/react";

import { AuthProvider } from "./hooks/useAuth/authContext";
import AppRoutes from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <AuthProvider>
          <Toaster richColors />
          <AppRoutes />
        </AuthProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
);
