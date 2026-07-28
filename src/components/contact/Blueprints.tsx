import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { contactPage } from '@/data/portfolio';
import { BadgeCheck } from 'lucide-react';

/** "Previous Blueprints" code-preview + "Guaranteed Scalability" bento pair. */
export default function Blueprints() {
  const { blueprints, scalability } = contactPage;

  return (
    <Container as="section" className="mb-section-gap-lg">
      <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-panel rounded-xl overflow-hidden group">
          <div className="p-6 pb-0">
            <h4 className="font-headline-md text-headline-md text-on-background mb-2">{blueprints.heading}</h4>
            <p className="font-body-md text-on-surface-variant">{blueprints.description}</p>
          </div>
          <div className="relative h-64 mt-6 bg-[#0E0E11] border-t border-white/10 group-hover:bg-[#131316] transition-colors">
            <pre className="absolute inset-0 opacity-20 p-6 font-code text-code text-primary overflow-hidden select-none whitespace-pre-wrap">
              {blueprints.code}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl flex flex-col items-center justify-center text-center p-6 border-brand-accent/20">
          <BadgeCheck className="text-brand-accent mb-3" size={36} />
          <h4 className="font-headline-md text-[20px] text-on-background mb-2 leading-tight">{scalability.heading}</h4>
          <p className="font-body-md text-on-surface-variant">{scalability.description}</p>
        </div>
      </Reveal>
    </Container>
  );
}
