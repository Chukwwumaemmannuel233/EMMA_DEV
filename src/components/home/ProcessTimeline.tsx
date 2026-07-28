import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import GlassCard from '@/components/ui/GlassCard';
import { processSteps } from '@/data/portfolio';

/** "Standard Operating Procedure" alternating vertical timeline. */
export default function ProcessTimeline() {
  return (
    <Container as="section" maxWidth="800px" className="py-section-gap-lg" id="process">
      <Reveal className="text-center mb-10">
        <h2 className="font-headline-lg text-headline-lg">Standard Operating Procedure</h2>
      </Reveal>

      <div className="relative space-y-16">
        <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        {processSteps.map((step, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal
              key={step.step}
              delay={i * 0.1}
              className={`relative flex flex-col ${
                reversed ? 'md:flex-row-reverse' : 'md:flex-row'
              } md:justify-between items-center gap-8`}
            >
              <div className={`md:w-[45%] ${reversed ? 'text-left' : 'text-right'} hidden md:block`}>
                <span className="font-code text-primary">{step.step}</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-primary border-4 border-surface z-10 hidden md:block" />
              <GlassCard className="md:w-[45%] p-6 rounded-2xl w-full">
                <span className="font-code text-primary md:hidden block mb-2">{step.step}</span>
                <h4 className="font-headline-md text-headline-md mb-3">{step.title}</h4>
                <p className="text-on-surface-variant">{step.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
