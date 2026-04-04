import { scrollToSection } from '../../../../shared/lib/dom';
import { Button } from '../../../../shared/ui/Button';

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
    >
      <p>© {new Date().getFullYear()} CodeSnap. Built for developers.</p>
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => scrollToSection('#features')}
          className="px-0 py-0 font-normal text-slate-400 hover:text-white"
        >
          Product
        </Button>
        <Button
          onClick={() => scrollToSection('#pricing')}
          className="px-0 py-0 font-normal text-slate-400 hover:text-white"
        >
          Pricing
        </Button>
        <Button onClick={() => scrollToSection('#top')} className="px-0 py-0 font-normal text-slate-400 hover:text-white">
          Back to Top
        </Button>
      </div>
    </footer>
  );
}
