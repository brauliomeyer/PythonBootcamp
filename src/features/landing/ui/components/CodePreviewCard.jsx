export function CodePreviewCard() {
  return (
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
  );
}
