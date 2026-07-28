import { Hammer } from 'lucide-react';

interface BuildingNowBannerProps {
  title: string;
  description: string;
}

/** Full-width notice, not a grid card — sits below the project grid on /work. */
export default function BuildingNowBanner({ title, description }: BuildingNowBannerProps) {
  return (
    <div className="mt-12 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
      <Hammer className="text-primary shrink-0 mt-0.5" size={20} />
      <div>
        <p className="font-headline-md text-sm text-on-surface mb-1">{title}</p>
        <p className="text-on-surface-variant text-sm">{description}</p>
      </div>
    </div>
  );
}