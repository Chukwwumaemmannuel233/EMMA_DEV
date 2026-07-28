import { contactPage } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { AtSign, Share2, Code, ArrowUpRight } from 'lucide-react';

const iconMap = { 'at-sign': AtSign, share: Share2, code: Code } as const;

/** Left column of the /contact page: badge, headline, description, "Ways to Connect". */
export default function ContactHero() {
  return (
    <div className="lg:col-span-5 mb-10 lg:mb-0">
      <header className="lg:sticky lg:top-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-label-md text-label-md text-secondary-fixed">{contactPage.badge}</span>
          </div>

          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-8 leading-none tracking-tight">
            {contactPage.heading[0]} <br />
            {contactPage.heading[1]}
            <br />
            <span className="text-primary italic">{contactPage.heading[2]}</span>
            {contactPage.heading[3]}
          </h1>

          <div className="space-y-6 max-w-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {contactPage.description}
            </p>

            <div className="pt-8 border-t border-white/5">
              <h3 className="font-label-md text-label-md text-on-background mb-4 uppercase tracking-widest">
                Ways to Connect
              </h3>
              <div className="flex flex-col gap-4">
                {contactPage.waysToConnect.map((way) => {
                  const Icon = iconMap[way.icon];
                  return (
                    <a
                      key={way.label}
                      href={way.href}
                      className="flex items-center gap-3 group text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                      <Icon size={20} />
                      <span className="font-label-md text-label-md">{way.label}</span>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    </div>
  );
}
