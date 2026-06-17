import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-light">404</h1>
        <p className="text-slate-300">Page not found.</p>
        <button
          onClick={() => (window.location.href = '/')}
          className="px-4 py-2 rounded-lg bg-white text-slate-900"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
