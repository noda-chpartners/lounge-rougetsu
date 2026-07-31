import { studios } from "@/mocks/homeData";

export default function StudioSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-small-small">
        <h2 className="font-efont text-2xl md:text-3xl text-center tracking-[0.1em] text-rikyu-dark mb-12 md:mb-16">
          HOUSE STUDIO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {studios.map((studio) => (
            <div key={studio.id}>
              <a href={studio.link} className="block group">
                <div className="img-scale rounded-lg overflow-hidden mb-4">
                  <div className="aspect-[16/11]">
                    <img
                      src={studio.image}
                      alt={studio.jaTitle}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </a>
              <div className="flex items-end justify-between">
                <div>
                  <a href={studio.link} className="block group">
                    <p className="font-efont text-sm tracking-[0.15em] text-rikyu-dark mb-1">
                      {studio.enTitle}
                    </p>
                    <p className="text-xs text-rikyu-gray">{studio.jaTitle}</p>
                  </a>
                </div>
                <div className="text-right">
                  <a
                    href={`tel:${studio.tel.replace(/-/g, "")}`}
                    className="block font-efont text-lg md:text-xl text-rikyu-dark mb-2 hover:text-rikyu-gray transition-colors"
                  >
                    Tel.{studio.tel}
                  </a>
                  <a href={studio.link} className="bt_more text-rikyu-dark text-xs">
                    More Studio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}