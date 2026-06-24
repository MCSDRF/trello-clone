import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { BoardPage } from './pages/BoardPage';
import { Statistics } from './pages/Statistics';
import { Profile } from './pages/Profile';
import { initData } from './services/api';

function App() {
  useEffect(() => {
    initData();
  }, []);

  return (
    <BrowserRouter>
      <nav style={{ background: '#1a1a2e', color: 'white', padding: '16px 24px', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Доски</Link>
        <Link to="/stats" style={{ color: 'white', textDecoration: 'none' }}>Статистика</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Профиль</Link>
      </nav>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/board/:id" element={<BoardPage />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
