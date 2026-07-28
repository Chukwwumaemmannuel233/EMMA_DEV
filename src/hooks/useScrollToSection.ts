import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Smoothly scrolls to an in-page anchor (e.g. "#connect").
 * If we're not currently on the homepage, it navigates there first and
 * then scrolls once the page has mounted (see Home.tsx's effect that
 * reads location.state.scrollTo).
 */
export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (hash: string) => {
      const id = hash.replace('#', '');

      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.replaceState(null, '', `#${id}`);
        }
        return;
      }

      navigate('/', { state: { scrollTo: id } });
    },
    [location.pathname, navigate],
  );
}
