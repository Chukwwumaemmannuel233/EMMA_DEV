import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { connectCTA, connectOptions } from '@/data/portfolio';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Linkedin, Github, Download } from 'lucide-react';

const iconMap = { rocket: Rocket, mail: Mail, linkedin: Linkedin, github: Github, download: Download } as const;

/**
 * "Ready to Build Something Great?" — the homepage's contact decision point.
 * Presents all 5 contact options; "Start a Project" is the primary CTA and
 * is the only one that navigates to the dedicated /contact route.
 */
export default function ConnectCTA() {
  const primary = connectOptions.find((o) => o.primary)!;
  const secondary = connectOptions.filter((o) => !o.primary);

  return (
    <Container as="section" className="py-section-gap-lg mb-section-gap-md" id="connect">
      <Reveal className="glass-card p-10 md:p-14 rounded-[32px] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2" aria-hidden="true" />

        <h2 className="relative z-10 font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-8">
          {connectCTA.heading[0]} <br />
          <span className="text-primary">{connectCTA.heading[1]}</span>
        </h2>
        <p className="relative z-10 font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
          {connectCTA.description}
        </p>

        <div className="relative z-10 flex flex-wrap justify-center items-center gap-6">
          <Link
            to={primary.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary-fixed rounded-2xl font-headline-md text-base font-bold hover:scale-105 transition-transform"
          >
            <Rocket size={20} />
            {primary.label}
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {secondary.map((option) => {
              const Icon = iconMap[option.icon];
              return (
                <a
                  key={option.label}
                  href={option.href}
                  download={option.icon === 'download' ? true : undefined}
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label-md"
                >
                  <Icon size={16} />
                  {option.label}
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
