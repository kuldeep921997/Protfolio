import { Provider } from "react-redux";
import { store } from "./app/store";
import Index from "./pages/Index";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const basename = import.meta.env.BASE_URL;

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background transition-colors duration-250 ease-out">
        <Index />
      </div>
    </Provider>
  );
}

export default App;
