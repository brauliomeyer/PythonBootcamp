import { featureCards } from '../../data/features';
import { SvgIcon } from '../SvgIcon';

export function FeaturesSection() {
  return (
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
  );
}
