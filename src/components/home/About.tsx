import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { about } from '@/data/portfolio';

export default function About() {
  return (
    <Container as="section" className="py-section-gap-lg" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal className="order-2 lg:order-1">
          <h3 className="font-label-md text-primary mb-4 tracking-widest uppercase">{about.eyebrow}</h3>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">{about.heading}</h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.2}>
          <div className="aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden relative border border-white/5">
            <img
              alt="Professional Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={about.portraitImage}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40" />
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
