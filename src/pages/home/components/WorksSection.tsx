import { works } from "@/mocks/homeData";

export default function WorksSection() {
  return (
    <section className="py-16 md:py-24 bg-rikyu-dark text-white">
      <div className="container-small-small mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-efont text-lg md:text-xl tracking-[0.15em]">WORKS</h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-xl">
            リキュー建築設計事務所が手掛けた、実際の施工事例をご案内しています。
            <br className="hidden md:block" />
            各事例の詳細な内容も記載していますので、これから注文住宅づくりをお考えの方はぜひご覧ください。
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {works.map((work) => (
          <div key={work.id}>
            <div className="container-small">
              <div className="common-ani-line bg-rikyu-gray/40" />
            </div>
            <a href={work.link} className="block group">
              <div className="container-small py-8 md:py-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Text */}
                  <div className="md:w-2/5">
                    <p className="text-xs text-rikyu-gray mb-2">
                      <span className="inline-block border border-rikyu-gray px-2 py-0.5 mr-2">
                        {work.city}
                      </span>
                      {work.client}
                    </p>
                    <h3 className="font-serif text-lg md:text-xl text-white mb-4">{work.title}</h3>
                    <dl className="space-y-1 text-xs text-rikyu-gray">
                      <div className="flex gap-2">
                        <dt className="font-normal whitespace-nowrap">敷地面積 |</dt>
                        <dd>{work.siteArea}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="font-normal whitespace-nowrap">延床面積 |</dt>
                        <dd>{work.floorArea}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Images */}
                  <div className="md:w-1/2 flex gap-3">
                    <div className="img-scale w-3/5 aspect-[4/3] rounded overflow-hidden">
                      <img
                        src={work.image1}
                        alt={work.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="img-scale w-2/5 aspect-[4/3] rounded overflow-hidden">
                      <img
                        src={work.image2}
                        alt={work.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="container-small">
          <div className="common-ani-line bg-rikyu-gray/40" />
        </div>
      </div>

      <div className="container-small text-center mt-12">
        <a href="#" className="bt_more text-white inline-flex items-center gap-2">
          More Works
        </a>
      </div>
    </section>
  );
}