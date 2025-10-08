export default function HeadingPattern({ heading }: { heading?: string }) {
  return (
    <div className="max-w-screen h-10 border border-slate-200">
      <div className="max-w-3xl border-x border-slate-200 mx-auto pl-4">{heading && <h2 className="text-3xl font-bold">{heading}</h2>}</div>
    </div>
  );
}
