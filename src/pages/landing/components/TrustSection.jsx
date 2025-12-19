export default function TrustSection() {
  const partners = ["BTP-TODA", "PR-TODA", "LU-TODA", "CDO-TSO"];

  return (
    <section className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h3 className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">
          Trusted by associations across Cagayan de Oro
        </h3>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-30 grayscale contrast-200">
          {partners.map((p) => (
            <div key={p} className="font-black text-2xl tracking-tighter">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
