import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { NewsDetailPage } from './components/NewsDetailPage';
import { ActivityDetailPage } from './components/ActivityDetailPage';
import { CafeDetailPage } from './components/CafeDetailPage';
import { AllNewsPage } from './components/AllNewsPage';
import { AllEventsPage } from './components/AllEventsPage';
import { AllFancafePage } from './components/AllFancafePage';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'news-detail' && <NewsDetailPage onNavigate={handleNavigate} />}
      {currentPage === 'activity-detail' && <ActivityDetailPage onNavigate={handleNavigate} />}
      {currentPage === 'cafe-detail' && <CafeDetailPage onNavigate={handleNavigate} />}
      {currentPage === 'all-news' && <AllNewsPage onNavigate={handleNavigate} />}
      {currentPage === 'all-events' && <AllEventsPage onNavigate={handleNavigate} />}
      {currentPage === 'all-fancafe' && <AllFancafePage onNavigate={handleNavigate} />}
      {currentPage === 'news' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'events' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'fancafe' && <HomePage onNavigate={handleNavigate} />}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
