import { useEffect } from 'react';

/** Sets document.title per route for SEO / browser tab clarity in this SPA. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
