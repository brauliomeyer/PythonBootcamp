import { pricingTiers } from '../../data/pricing';
import { scrollToSection } from '../../../../shared/lib/dom';
import { Button } from '../../../../shared/ui/Button';

export function PricingSection() {
  return (
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
              <Button
                onClick={() => scrollToSection('#top')}
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:opacity-90"
              >
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
