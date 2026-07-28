import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import FeaturedWork from '@/components/home/FeaturedWork';
import TechStack from '@/components/home/TechStack';
import Evolution from '@/components/home/Evolution';
import Philosophy from '@/components/home/Philosophy';
import CommitToCode from '@/components/home/CommitToCode';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import DesignPlayground from '@/components/home/DesignPlayground';
import Testimonials from '@/components/home/Testimonials';
import Inquiries from '@/components/home/Inquiries';
import ConnectCTA from '@/components/home/ConnectCTA';
import { usePageTitle } from '@/hooks/usePageTitle';
import { site } from '@/data/portfolio';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  usePageTitle(site.title);

  // Handles the "navigate here then scroll" hand-off from useScrollToSection
  // when Contact Me / nav links are clicked from a different route.
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        // Wait a frame so layout has settled before measuring scroll position.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
      // Clear the state so refreshing/back doesn't re-trigger the scroll.
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
      <TechStack />
      <Evolution />
      <Philosophy />
      <CommitToCode />
      <ProcessTimeline />
      <DesignPlayground />
      <Testimonials />
      <Inquiries />
      <ConnectCTA />
    </>
  );
}
