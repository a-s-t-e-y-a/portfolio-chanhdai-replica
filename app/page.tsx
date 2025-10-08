import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-screen border border-slate-200">
        <div className=" max-w-3xl  mx-auto border-x border-slate-200 p-4 text-sm relative z-20">
          <div className="flex items-right justify-end gap-4">
            <div className="text-gray-500">Portfolio</div>
            <div className="text-gray-500">Blogs</div>
            <div className="text-gray-500">Components</div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 relative z-10 h-69 border-x border-slate-200">
        <div
          className="absolute inset-0 z-0 h-69"
          style={{
            background: `linear-gradient(270deg, #FFECB3 0%, #FFE0B2 20%, #FFCDD2 40%, #F8BBD9 60%, #E1BEE7 80%, #D1C4E9 100%)`,
          }}
        />
      </div>
      <div className="relative z-20 mx-auto max-w-screen border-t border-slate-200 text-center">
        <div className="relative z-10 mx-auto flex max-w-3xl border-x border-slate-200">
          <div className="shrink-0 border-r border-slate-200 flex items-center justify-center pt-1">
            <img
              src="./profile.jpg"
              alt="Profile"
              className="size-42 rounded-full ring-1 ring-slate-300 ring-offset-2 ring-offset-white select-none"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex items-end pb-1 pl-4 bg-[repeating-linear-gradient(315deg,rgba(100,116,139,0.1)_0,rgba(100,116,139,0)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] h-24">
              <div className="ibm-plex-mono-regular text-xs text-slate-500 select-none">
                text-3xl text-slate-950 font-medium
              </div>
            </div>

            <div className="border-t border-slate-200">
              <h1 className="font-bold flex  pl-4 text-3xl">Krishna seth</h1>
              <div className="border-t border-slate-200 py-1 pl-4">
                <p className="ibm-plex-mono-regular flex  text-sm text-gray-500 select-none">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end pb-1 pl-4 bg-[repeating-linear-gradient(315deg,rgba(100,116,139,0.1)_0,rgba(100,116,139,0)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] h-10 border border-slate-200"></div>
      <div className="max-w-3xl mx-auto p-4 relative z-10 border-x border-b border-slate-200">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-slate-200 ring-1 ring-offset-1 ring-slate-200  ring-offset-background bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-code-xml pointer-events-none size-4 text-muted-foreground"
                aria-hidden="true"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <p className="ibm-plex-mono-medium text-lg text-black tracking-tighter">
              <a href="https://krsna.site">krsna.site</a>
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}
