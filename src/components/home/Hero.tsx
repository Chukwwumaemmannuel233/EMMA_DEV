import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import { hero, heroBadges } from '@/data/portfolio';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-gradient">
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex flex-wrap gap-4 mb-8">
            {heroBadges.map((badge) => (
              <Badge key={badge.label} pulse={badge.pulse} variant={badge.pulse ? 'primary' : 'neutral'}>
                {badge.label}
              </Badge>
            ))}
          </div>

          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6">
            {hero.heading[0]} <br />
            <span className="text-primary">{hero.heading[1]}</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10">{hero.description}</p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('#work')}>View My Work</Button>
            <Button variant="secondary" onClick={() => scrollToSection('#connect')}>
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative rounded-2xl overflow-hidden glass-card p-2">
            <img alt="Hero Composition" className="w-full rounded-xl" src={hero.heroImage} loading="eager" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
