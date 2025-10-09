import BlogCard from "@/components/blogCard";
import DividerPattern from "@/components/dividerPattern";
import HeadingPattern from "@/components/headingDivider";
import SimpleLineDivider from "@/components/simpleLineDivider";

import blog_sample_data from "../config/sampleBlog";

const listDownItem = [
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='lucide lucide-code-xml pointer-events-none size-4 text-muted-foreground' aria-hidden='true'><path d='m18 16 4-4-4-4'></path><path d='m6 8-4 4 4 4'></path><path d='m14.5 4-5 16'></path></svg>",
    description: "A person who loves to build, break, rebuild",
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-map-pin pointer-events-none size-4 text-muted-foreground' aria-hidden='true'><path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'></path><circle cx='12' cy='10' r='3'></circle></svg>",
    description: "Delhi, India",
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-mail pointer-events-none size-4 text-muted-foreground' aria-hidden='true'><path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'></path><rect x='2' y='4' width='20' height='16' rx='2'></rect></svg>",
    description: "krsnoit100@gmail.com",
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-globe pointer-events-none size-4 text-muted-foreground' aria-hidden='true'><circle cx='12' cy='12' r='10'></circle><path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'></path><path d='M2 12h20'></path></svg>",
    description: "krsna.site",
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-phone pointer-events-none size-4 text-muted-foreground' aria-hidden='true'><path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'></path></svg>",
    description: "+91 8090500668",
  },
];
export default function Home() {
  return (
    <>
      <div className="max-w-screen border-y border-slate-200 mt-2">
        <div className=" max-w-3xl  mx-auto border-x border-slate-200 p-3 text-md relative z-20">
          <div className="flex items-right justify-end gap-4">
            <div className="text-gray-500">Portfolio</div>
            <div className="text-gray-500">Blogs</div>
            <div className="text-gray-500">Components</div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 relative z-10 h-64 border-x border-slate-200">
        <div
          className="absolute inset-0 z-0 h-64"
          style={{
            background: `linear-gradient(270deg, #FFECB3 0%, #FFE0B2 20%, #FFCDD2 40%, #F8BBD9 60%, #E1BEE7 80%, #D1C4E9 100%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="fleur-de-leah-regular text-black font-light italic text-6xl">
            Built it now{" "}
          </h1>
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-screen border-t border-slate-200 text-center">
        <div className="relative z-10 mx-auto flex max-w-3xl border-x border-slate-200">
          <div className="shrink-0 border-r border-slate-200 flex items-center justify-center pt-1">
            <img
              src="./profile.jpeg"
              alt="Profile"
              className="size-40 rounded-full ring-1 ring-slate-300 ring-offset-2 ring-offset-white select-none"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex items-end pb-1 pl-4 bg-[repeating-linear-gradient(315deg,rgba(100,116,139,0.2)_0,rgba(100,116,139,0)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] h-24">
              <div className="ibm-plex-mono-regular text-xs text-slate-500 select-none">
                text-3xl text-slate-950 font-medium
              </div>
            </div>

            <div className="border-t border-slate-200">
              <h1 className="font-bold flex  pl-4 text-3xl">Krishna seth</h1>
              <div className="border-t border-slate-200  pl-4">
                <p className="ibm-plex-mono-regular flex text-md tracking-tighter text-gray-500 select-none">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DividerPattern />
      <div className="max-w-3xl mx-auto p-4 relative z-10 border-x border-b border-slate-200">
        {listDownItem.map((item, index) => (
          <div key={index} className="pb-1">
            <div className="flex items-center gap-4 mb-2">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-slate-200 ring-1 ring-offset-1 ring-slate-200 ring-offset-background bg-gray-200"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              ></div>
              <p className="ibm-plex-mono-medium text-md text-black tracking-tighter">
                <a href="https://krsna.site">{item.description}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <DividerPattern />
      <HeadingPattern heading="About" />
      <div className="max-w-3xl mx-auto p-4 relative z-10 border-x border-b border-slate-200">
        <div className="mt-1">
          <p className="ibm-plex-mono-regular text-sm  mb-4">
            Hello, World! I am Krishna Seth — a Full Stack Developer passionate
            about creating efficient, scalable, and user-friendly web
            applications.
          </p>
          <p className="ibm-plex-mono-regular text-sm  mb-4">
            With experience in full stack development, I specialize in building
            high-quality applications using technologies like React, Next.js,
            Node.js, TypeScript, and modern front-end and back-end tools. I
            enjoy solving complex problems and delivering solutions that make a
            difference.
          </p>
          <p className="ibm-plex-mono-regular text-sm  mb-4">
            Based in Delhi, India, I love exploring new technologies,
            contributing to open-source projects, and turning innovative ideas
            into reality through personal and collaborative work.
          </p>
          <p className="ibm-plex-mono-regular text-sm ">
            Let's connect and collaborate on exciting projects!
          </p>
        </div>
      </div>
      <DividerPattern />
      <div className="max-w-3xl mx-auto p-4 relative z-10 border-x border-b border-slate-200 text-center">
        <img
          className="w-full h-auto"
          src="http://ghchart.rshah.org/a-s-t-e-y-a"
          alt="GitHub contribution chart"
        />
      </div>
      <HeadingPattern heading="Stack" />
      <div className="max-w-3xl mx-auto  relative z-10 border-x border-b border-slate-200">
        <div className="p-4 bg-[radial-gradient(rgba(100,116,139,0.05)_1px,transparent_0)] bg-[size:10px_10px] bg-center">
          <ul className="flex flex-wrap gap-4 select-none">
            <li className="flex">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TypeScript"
              >
                <img
                  alt="TypeScript icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg"
                />
                <span className="sr-only">TypeScript</span>
              </a>
            </li>
            <li className="flex">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JavaScript"
              >
                <img
                  alt="JavaScript icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/js.svg"
                />
                <span className="sr-only">JavaScript</span>
              </a>
            </li>
            <li className="flex">
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Node.js"
              >
                <img
                  alt="Node.js icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/nodejs.svg"
                />
                <span className="sr-only">Node.js</span>
              </a>
            </li>
            <li className="flex">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="React"
              >
                <img
                  alt="React icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/react.svg"
                />
                <span className="sr-only">React</span>
              </a>
            </li>
            <li className="flex">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Next.js"
              >
                <img
                  alt="Next.js icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-light.svg"
                  className="block dark:hidden"
                />
                <img
                  alt="Next.js icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-dark.svg"
                  className="hidden dark:block"
                />
                <span className="sr-only">Next.js</span>
              </a>
            </li>
            <li className="flex">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tailwind CSS"
              >
                <img
                  alt="Tailwind CSS icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg"
                />
                <span className="sr-only">Tailwind CSS</span>
              </a>
            </li>
            <li className="flex">
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Git"
              >
                <img
                  alt="Git icon"
                  loading="lazy"
                  width="32"
                  height="32"
                  src="https://assets.chanhdai.com/images/tech-stack-icons/git.svg"
                />
                <span className="sr-only">Git</span>
              </a>
            </li>
            {/* Add more as needed */}
          </ul>
        </div>
      </div>
      <DividerPattern />
      <HeadingPattern heading="Blog" />
      <SimpleLineDivider />
      <div className="md:grid md:grid-cols-2 max-w-3xl border-x mx-auto  border-slate-200">
        {blog_sample_data.map((item, index) => (
          <BlogCard
            key={index}
            img={item.img}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}
