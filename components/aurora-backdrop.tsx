export function AuroraBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="orbit-ring left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 opacity-60" />
      <div className="orbit-ring left-[62%] top-[-12rem] h-[30rem] w-[30rem] opacity-40" />
      <div className="absolute right-[8%] top-[14%] h-2 w-2 rounded-full bg-aurora shadow-[0_0_24px_6px_rgb(69_227_196_/_0.55)]" />
      <div className="absolute left-[10%] top-[62%] h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_20px_5px_rgb(167_139_250_/_0.45)]" />
      <div className="absolute bottom-[12%] right-[18%] h-px w-32 bg-gradient-to-r from-transparent via-aurora/50 to-transparent" />
      <div className="absolute bottom-[22%] left-[4%] h-px w-24 bg-gradient-to-r from-transparent via-violet/50 to-transparent" />
    </div>
  );
}
