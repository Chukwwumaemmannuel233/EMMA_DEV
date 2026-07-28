import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { evolution } from '@/data/portfolio';

export default function Evolution() {
  return (
    <Container as="section" className="py-section-gap-lg">
      <div className="flex flex-col md:flex-row gap-14">
        <Reveal className="md:w-1/3">
          <h2 className="font-headline-lg text-headline-lg mb-4">Evolution</h2>
          <p className="text-on-surface-variant">The chronological expansion of my technical horizons.</p>
        </Reveal>

        <Reveal className="md:w-2/3 space-y-16" delay={0.15}>
          {evolution.map((item) => (
            <div key={item.year} className="flex gap-6">
              <span className="text-primary font-code shrink-0">{item.year}</span>
              <div>
                <h4 className="font-bold text-base mb-2">{item.title}</h4>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Container>
  );
}
