// import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  usePageTitle('Page Not Found | EMMA-DEV');

  return (
    <Container className="min-h-[70vh] flex flex-col items-center justify-center text-center py-section-gap-lg">
      <span className="text-primary font-code text-label-md mb-4 block">404 / NOT FOUND</span>
      <h1 className="font-headline-lg text-headline-lg mb-6">This page doesn't exist.</h1>
      <p className="text-on-surface-variant max-w-md mb-10">
        The page you're looking for may have moved or never existed. Let's get you back on track.
      </p>
      <Button to="/">Back Home</Button>
    </Container>
  );
}
