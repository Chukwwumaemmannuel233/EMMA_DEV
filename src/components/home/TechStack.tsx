import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import GlassCard from '@/components/ui/GlassCard';
import { techStack } from '@/data/portfolio';
import { Layers, Server, Cloud } from 'lucide-react';

const iconMap = { layers: Layers, server: Server, cloud: Cloud } as const;

const colorMap = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', dot: 'bg-primary' },
  tertiary: { bg: 'bg-tertiary/10', text: 'text-tertiary', dot: 'bg-tertiary' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', dot: 'bg-secondary' },
} as const;

export default function TechStack() {
  return (
    <section className="py-section-gap-lg bg-surface-container-lowest" id="expertise">
      <Container>
        <Reveal className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-lg mb-4">The Engine Room</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            A curated selection of technologies I leverage to build modern digital products.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((category, i) => {
            const Icon = iconMap[category.icon];
            const colors = colorMap[category.color];
            return (
              <GlassCard key={category.title} className="p-7" animate delay={i * 0.1}>
                <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={colors.text} size={18} />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
