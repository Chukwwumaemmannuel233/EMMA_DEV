import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { playground } from '@/data/portfolio';

/** Horizontal, scroll-snap gallery of UI experiments. */
export default function DesignPlayground() {
  return (
    <section className="py-section-gap-lg overflow-hidden">
      <Container className="mb-10">
        <Reveal>
          <h2 className="font-headline-lg text-headline-lg mb-4">Design Playground</h2>
          <p className="text-on-surface-variant">UI experiments, custom components, and micro-interactions.</p>
        </Reveal>
      </Container>

      <div className="flex gap-6 overflow-x-auto pb-8 px-margin-mobile md:px-gutter no-scrollbar snap-x">
        {playground.map((item) => (
          <div
            key={item.title}
            className="min-w-[300px] md:min-w-[400px] aspect-[4/5] glass-card rounded-3xl p-1 snap-start group overflow-hidden"
          >
            <div className="w-full h-full rounded-2xl relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105 duration-700"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <p className="font-code text-xs text-primary mb-2">{item.tag}</p>
                <h5 className="font-headline-md text-headline-md">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
