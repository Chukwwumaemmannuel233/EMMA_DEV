import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Work from '@/pages/work'; 
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Alias so either naming convention from the brief resolves correctly */}
        <Route path="/start-project" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/work" element={<Work />} />
      </Route>
    </Routes>
  );
}
