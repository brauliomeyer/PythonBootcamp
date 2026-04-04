import { featureCards } from '../data/features';
import { navigationItems } from '../data/navigation';
import { pricingTiers } from '../data/pricing';
import { scrollToSection } from '../../../shared/lib/dom';
import { SvgIcon } from './SvgIcon';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('#top')}
            className="text-lg font-semibold tracking-tight text-white"
          >
            CodeSnap
          </button>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => scrollToSection('#pricing')}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            View Pricing
          </button>
        </div>
      </header>

      <main id="top">
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
                <button
                  type="button"
                  onClick={() => scrollToSection('#pricing')}
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Start for Free
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('#features')}
                  className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  Explore Features
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl shadow-violet-900/30">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <div className="rounded-xl border border-slate-700 bg-[#0d1117] p-4 font-mono text-xs leading-6 text-slate-200 sm:text-sm">
                <p className="text-blue-300">const buildScreenshot = async () =&gt; {'{'}</p>
                <p className="pl-4 text-violet-300">const theme = 'github-dark';</p>
                <p className="pl-4 text-violet-300">const accent = 'blue-violet-gradient';</p>
                <p className="pl-4 text-slate-300">return exportImage({'{'} theme, accent {'}'});</p>
                <p className="text-blue-300">{'}'};</p>
              </div>
              <p className="mt-3 text-xs text-slate-400">Example screenshot preview</p>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">Everything you need to ship prettier snippets</h2>
            <p className="mt-3 text-slate-300">Designed for developers who want faster sharing without compromising visual quality.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 text-violet-200">
                  <SvgIcon iconPaths={feature.iconPaths} />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="border-y border-slate-800 bg-slate-900/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Simple pricing for every stage</h2>
            <p className="mt-3 text-slate-300">Start free, upgrade when your content engine grows.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`rounded-2xl border p-6 ${
                    tier.highlight
                      ? 'border-violet-400/50 bg-gradient-to-b from-violet-500/10 to-slate-900 shadow-lg shadow-violet-900/30'
                      : 'border-slate-800 bg-slate-950'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-white">{tier.price}</p>
                  <p className="mt-3 text-sm text-slate-300">{tier.blurb}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-200">
                    {tier.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => scrollToSection('#top')}
                    className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {tier.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
      >
        <p>© {new Date().getFullYear()} CodeSnap. Built for developers.</p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('#features')}
            className="transition hover:text-white"
          >
            Product
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#pricing')}
            className="transition hover:text-white"
          >
            Pricing
          </button>
          <button type="button" onClick={() => scrollToSection('#top')} className="transition hover:text-white">
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}
