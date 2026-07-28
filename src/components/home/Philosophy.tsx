import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { philosophy } from '@/data/portfolio';

export default function Philosophy() {
  return (
    <Container as="section" className="py-section-gap-lg" id="philosophy">
      <Reveal className="mb-12 text-center">
        <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-6">
          {philosophy.heading[0]}
          <span className="italic text-primary">{philosophy.heading[1]}</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {philosophy.description}
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {philosophy.pillars.map((pillar) => (
          <div key={pillar.title} className="space-y-4">
            <h4 className="font-headline-md text-headline-md text-on-surface">{pillar.title}</h4>
            <p className="text-on-surface-variant">{pillar.description}</p>
          </div>
        ))}
      </Reveal>
    </Container>
  );
}
