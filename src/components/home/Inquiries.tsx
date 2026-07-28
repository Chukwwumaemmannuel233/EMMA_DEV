import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { faqs } from '@/data/portfolio';
import { ChevronDown } from 'lucide-react';

/** FAQ accordion, built with native <details>/<summary> for accessibility (no JS needed). */
export default function Inquiries() {
  return (
    <Container as="section" maxWidth="800px" className="py-section-gap-lg">
      <Reveal>
        <h2 className="font-headline-lg text-center mb-10">Inquiries</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border border-white/5 rounded-2xl glass-card transition-all">
              <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer list-none">
                <span className="font-headline-md text-base">{faq.question}</span>
                <ChevronDown className="shrink-0 transition-transform group-open:rotate-180 text-primary" size={20} />
              </summary>
              <div className="p-5 pt-0 text-on-surface-variant">{faq.answer}</div>
            </details>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
