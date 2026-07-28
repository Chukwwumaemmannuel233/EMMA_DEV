import Container from '@/components/ui/Container';
import ContactHero from '@/components/contact/ContactHero';
import InquiryForm from '@/components/contact/InquiryForm';
import Blueprints from '@/components/contact/Blueprints';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Start a Project | ARCHITECT.LOG');
  return (
    <>
      <Container className="relative pt-32 pb-section-gap-lg grid grid-cols-1 lg:grid-cols-12 gap-x-12">
        <ContactHero />
        <InquiryForm />
      </Container>
      <Blueprints />
    </>
  );
}
