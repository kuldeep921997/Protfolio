import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Navigation } from './components/layout/Navigation';
import { AppRoutes } from './routes/AppRoutes';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  // Get base path for GitHub Pages
  const basename = import.meta.env.BASE_URL;

  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-150 ease-in-out">
          <Navigation />
          <main>
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

