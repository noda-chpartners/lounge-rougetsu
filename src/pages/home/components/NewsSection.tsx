import { news, blogs, columns } from "@/mocks/homeData";

export default function NewsSection() {
  return (
    <>
      {/* NEWS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-single-small">
          <h2 className="font-efont text-lg md:text-xl tracking-[0.15em] text-rikyu-dark text-center mb-10">
            NEWS
          </h2>

          <div className="space-y-0">
            {news.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block group border-b border-rikyu-border hover-ani-left-right-bc"
              >
                <div className="flex items-start gap-4 py-4 px-3 -mx-3">
                  <p className="text-xs text-rikyu-gray font-efont whitespace-nowrap mt-0.5">
                    {item.date}
                  </p>
                  <p className="text-sm text-rikyu-dark font-serif line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#" className="bt_more text-rikyu-dark inline-flex items-center gap-2">
              More News
            </a>
          </div>
        </div>
      </section>

      {/* BLOG & COLUMN */}
      <section className="py-16 md:py-20 bg-rikyu-bg">
        <div className="container-large-small">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* BLOG */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-efont text-lg tracking-[0.15em] text-rikyu-dark">BLOG</h2>
                <a href="#" className="bt_more text-rikyu-dark text-xs hidden md:flex">
                  More Blog
                </a>
              </div>
              <div className="space-y-0">
                {blogs.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block group border-b border-rikyu-border hover-ani-opacity"
                  >
                    <div className="flex items-start gap-4 py-4">
                      <p className="text-xs text-rikyu-gray font-efont whitespace-nowrap mt-0.5">
                        {item.date}
                      </p>
                      <p className="text-sm text-rikyu-dark font-serif line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-4 md:hidden">
                <a href="#" className="bt_more text-rikyu-dark text-xs">More Blog</a>
              </div>
            </div>

            {/* COLUMN */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-efont text-lg tracking-[0.15em] text-rikyu-dark">COLUMN</h2>
                <a href="#" className="bt_more text-rikyu-dark text-xs hidden md:flex">
                  More Column
                </a>
              </div>
              <div className="space-y-0">
                {columns.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block group border-b border-rikyu-border hover-ani-opacity"
                  >
                    <div className="flex items-start gap-4 py-4">
                      <p className="text-xs text-rikyu-gray font-efont whitespace-nowrap mt-0.5">
                        {item.date}
                      </p>
                      <p className="text-sm text-rikyu-dark font-serif line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-4 md:hidden">
                <a href="#" className="bt_more text-rikyu-dark text-xs">More Column</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}