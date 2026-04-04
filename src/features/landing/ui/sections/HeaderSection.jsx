import { navigationItems } from '../../data/navigation';
import { scrollToSection } from '../../../../shared/lib/dom';
import { Button } from '../../../../shared/ui/Button';

export function HeaderSection() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Button onClick={() => scrollToSection('#top')} className="px-0 py-0 text-lg tracking-tight text-white">
          CodeSnap
        </Button>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="px-0 py-0 font-normal text-slate-300 hover:text-white"
            >
              {item.label}
            </Button>
          ))}
        </nav>
        <Button
          onClick={() => scrollToSection('#pricing')}
          className="bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:opacity-90"
        >
          View Pricing
        </Button>
      </div>
    </header>
  );
}
