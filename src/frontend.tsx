import { App } from "@/components/app/App";
import { ThemeProvider } from "@/context/theme.provider";
import "@/global.css";
import { useTheme } from "@/hooks/useTheme";
import { setup } from "goober";
import { shouldForwardProp } from "goober/should-forward-prop";
import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";

setup(
  createElement,
  undefined,
  useTheme,
  shouldForwardProp((prop) => !prop.startsWith("$")),
);

const elem = document.getElementById("root")!;

const app = (
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
