import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Container as="section" className="py-section-gap-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <GlassCard
            key={t.name}
            className="p-8 relative"
            animate
            delay={i * 0.1}
          >
            <Quote className="text-primary mb-6 opacity-40" size={32} />
            <p className="font-body-lg text-body-lg italic mb-10 text-on-surface">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={`${t.name} profile`}
                className="w-12 h-12 rounded-full object-cover border border-surface-container-highest"
                loading="lazy"
              />
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-xs text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Container>
  );
}
