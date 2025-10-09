export default function BlogCard({
  title,
  date,
  img
}: Readonly<{
  title: string;
  date: string;
  img: string;
}>) {
  return (
    <>
      <div className="p-2 border-slate-200 border-l">
        <img
          className="rounded-xl"
          width="1200"
          height="630"
          src={img}
          alt="blog image"
        />
        <div className="p-1">
          <h3 className="text-lg font-medium mb-2">
            {title}
          </h3>
          <p className="text-gray-700 mb-4">
            {date} &nbsp;|&nbsp; 5 min read
          </p>
        </div>
      </div>
    </>
  );
}
