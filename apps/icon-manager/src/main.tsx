import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FiltersProvider } from "./components/filters.provider.tsx";
import { IconsProvider } from "./components/icons.provider.tsx";
import { ThemeProvider } from "./components/theme.provider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <IconsProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </IconsProvider>
    </ThemeProvider>
  </StrictMode>
);
