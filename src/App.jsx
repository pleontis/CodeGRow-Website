import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage.jsx';
import PlaylistsPage from '@/pages/PlaylistsPage.jsx';
import BookPage from '@/pages/BookPage.jsx';
import PlaylistDetailPage from '@/pages/PlaylistDetailPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ProductPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <ScrollToTop /> {}
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding top to avoid content being hidden by fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlists" element={<PlaylistsPage />} />
            <Route path="/playlists/:id" element={<PlaylistDetailPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;