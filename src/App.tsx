import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white flex flex-col transition ease-in-out duration-500">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes will be added as we create more components */}
        </Routes>
      </main>
      <Footer className="transition ease-in-out duration-500" />
    </div>
  );
}

export default App;
