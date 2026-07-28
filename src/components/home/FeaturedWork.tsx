import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Chip from '@/components/ui/Chip';
import ProjectCard from '@/components/work/ProjectCard';
import { featuredProject, moreProjects, HOMEPAGE_PROJECT_LIMIT } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';

export default function FeaturedWork() {
  const previewProjects = moreProjects.slice(0, HOMEPAGE_PROJECT_LIMIT);
  const hasMore = moreProjects.length > HOMEPAGE_PROJECT_LIMIT;

  return (
    <Container as="section" className="py-section-gap-lg" id="work">
      <Reveal className="mb-10">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Featured Works</h2>
        <div className="w-20 h-1 bg-primary" />
      </Reveal>

      <div className="grid grid-cols-1 gap-20">
        {/* Project One — case study layout */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="glass-card p-2 rounded-3xl overflow-hidden group">
              <img
                alt={`${featuredProject.title} case study`}
                className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                src={featuredProject.image}
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="text-primary font-code text-label-md mb-4 block">{featuredProject.tag}</span>
            <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">
              {featuredProject.title}
            </h3>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-6">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
            <a
            
              className="inline-flex items-center gap-2 font-bold text-primary group"
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Case Study
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* More Work — always exactly HOMEPAGE_PROJECT_LIMIT cards, on every
            screen size. "View All Work" is a real button below the row, not
            a card pretending to be a project. */}
        {previewProjects.length > 0 && (
          <div>
            <span className="text-on-surface-variant font-code text-label-md mb-6 block">02 / MORE WORK</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {previewProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} variant="grid" delay={i * 0.1} />
              ))}
            </div>
            

            {hasMore && (
              <div className="flex justify-center mt-10">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-on-surface font-label-md text-sm font-bold hover:bg-white/5 hover:border-primary/30 transition-colors"
                >
                  View All Work
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}