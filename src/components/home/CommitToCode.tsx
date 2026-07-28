import { useMemo } from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import GlassCard from '@/components/ui/GlassCard';
import { commitToCode } from '@/data/portfolio';

const WEEKS = 52;
const DAYS = 7;

function intensityClass(value: number): string {
  if (value > 0.9) return 'bg-primary';
  if (value > 0.7) return 'bg-primary/70';
  if (value > 0.5) return 'bg-primary/40';
  if (value > 0.3) return 'bg-primary/20';
  return 'bg-surface-container-highest';
}

/** Mock GitHub-style contribution heatmap — same generative pattern as the Stitch export's inline script. */
export default function CommitToCode() {
  const cells = useMemo(() => Array.from({ length: WEEKS * DAYS }, () => Math.random()), []);

  return (
    <section className="py-section-gap-lg bg-surface-container">
      <Container>
        <Reveal className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">{commitToCode.heading}</h2>
            <p className="text-on-surface-variant">{commitToCode.description}</p>
          </div>
          <div className="flex items-center gap-2 font-code text-xs text-on-surface-variant">
            Less
            <span className="w-3 h-3 bg-surface-container-highest rounded-sm" />
            <span className="w-3 h-3 bg-primary/20 rounded-sm" />
            <span className="w-3 h-3 bg-primary/40 rounded-sm" />
            <span className="w-3 h-3 bg-primary/70 rounded-sm" />
            <span className="w-3 h-3 bg-primary rounded-sm" />
            More
          </div>
        </Reveal>

        <GlassCard className="p-6 rounded-2xl overflow-x-auto" animate>
          <div className="flex gap-1 min-w-[800px]">
            <div className="grid grid-rows-7 grid-flow-col gap-1 w-full" role="img" aria-label="Code contribution activity heatmap">
              {cells.map((value, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${intensityClass(value)}`} />
              ))}
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
