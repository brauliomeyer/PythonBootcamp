import { scrollToSection } from '../../../../shared/lib/dom';
import { Button } from '../../../../shared/ui/Button';
import { CodePreviewCard } from '../components/CodePreviewCard';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800" aria-label="Hero">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/30 to-fuchsia-500/20" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <div className="relative">
          <p className="mb-4 inline-block rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-200">
            Developer-first screenshot studio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Make your code screenshots look as good as your code.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
            CodeSnap helps developers capture, style, and share beautiful code screenshots in seconds with a VS Code-inspired interface and GitHub-friendly polish.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={() => scrollToSection('#pricing')}
              className="bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-white hover:opacity-90"
            >
              Start for Free
            </Button>
            <Button
              onClick={() => scrollToSection('#features')}
              className="border border-slate-700 bg-slate-900 px-5 py-3 text-slate-200 hover:border-slate-500 hover:text-white"
            >
              Explore Features
            </Button>
          </div>
        </div>

        <CodePreviewCard />
      </div>
    </section>
  );
}
