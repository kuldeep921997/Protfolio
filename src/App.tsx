import { Provider } from "react-redux";
import { store } from "./app/store";
import Index from "./pages/Index";

/**
 * The theme is applied by an inline script in index.html so it lands before
 * first paint -- doing it in an effect here caused a light-mode flash, and
 * duplicated the logic that FloatingNav already owns. `duration-250` was also
 * not in Tailwind's scale, so it generated no CSS; `duration-300` is.
 */
function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background transition-colors duration-300 ease-out">
        <Index />
      </div>
    </Provider>
  );
}

export default App;
