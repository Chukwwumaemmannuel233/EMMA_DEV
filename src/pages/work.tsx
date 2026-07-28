import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import ProjectCard from '@/components/work/ProjectCard';
import BuildingNowBanner from '@/components/work/BuildingNowBanner';
import { moreProjects, featuredProject, buildingNow } from '@/data/portfolio';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ArrowLeft } from 'lucide-react';

export default function Work() {
  usePageTitle('All Work | ARCHITECT.LOG');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(moreProjects.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? moreProjects : moreProjects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  return (
    <Container className="pt-28 md:pt-32 pb-section-gap-lg">
      <Reveal className="mb-10 md:mb-12">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 md:mb-4">
          All Work
        </h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
          Every project, from {featuredProject.title} to the rest — {moreProjects.length} and counting.
        </p>
      </Reveal>

      {categories.length > 2 && (
        <Reveal className="mb-8 md:mb-10 -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0">
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar snap-x pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`selection-tag shrink-0 snap-start whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md ${
                  activeCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} variant="grid" delay={i * 0.05} />
        ))}
      </Reveal>

      {filtered.length === 0 && (
        <p className="text-on-surface-variant text-center py-20">No projects in this category yet.</p>
      )}

      {buildingNow && <BuildingNowBanner title={buildingNow.title} description={buildingNow.description} />}
    </Container>
  );
}