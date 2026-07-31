import { houseFeatures } from "@/mocks/homeData";

export default function HouseFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-rikyu-dark text-white">
      <div className="container-small-small mb-12">
        <h2 className="font-efont text-2xl md:text-3xl text-center tracking-[0.1em]">
          BUILDING A HOUSE
        </h2>
      </div>

      <div className="container-small-small">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rikyu-gray/30">
          {houseFeatures.map((feature) => (
            <a
              key={feature.id}
              href={feature.link}
              className="block group bg-rikyu-dark p-6 md:p-8"
            >
              <div className="img-scale aspect-[4/3] rounded overflow-hidden mb-5">
                <img
                  src={feature.image}
                  alt={feature.jaTitle}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-efont text-sm tracking-[0.15em] mb-1">{feature.enTitle}</p>
              <p className="text-xs text-rikyu-gray mb-4">{feature.jaTitle}</p>
              <p className="text-sm leading-[1.8] text-white/70 mb-5 line-clamp-4">
                {feature.description}
              </p>
              <span className="bt_more text-white inline-flex items-center gap-2 text-xs">
                More {feature.enTitle}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}