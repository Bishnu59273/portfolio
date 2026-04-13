import { AppRoutes } from "./Route.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
