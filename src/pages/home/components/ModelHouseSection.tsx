import { modelHouses } from "@/mocks/homeData";

export default function ModelHouseSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-large-small">
        <h2 className="font-efont text-2xl md:text-3xl text-center tracking-[0.1em] text-rikyu-dark mb-12 md:mb-16">
          TWO <span className="text-rikyu-gray">MODEL HOUSE</span>
        </h2>

        <div className="space-y-12 md:space-y-16">
          {modelHouses.map((house, idx) => (
            <a
              key={house.id}
              href={house.link}
              className={`block group ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="w-full md:w-3/5 img-scale rounded-lg overflow-hidden">
                  <div className="aspect-[16/10]">
                    <img
                      src={house.image}
                      alt={house.jaTitle}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-2/5">
                  <p className="font-efont text-sm tracking-[0.15em] text-rikyu-gray mb-1">
                    {house.enTitle}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-rikyu-dark mb-4">
                    {house.jaTitle}
                  </h3>
                  <p className="text-sm md:text-base font-serif text-rikyu-dark leading-relaxed mb-6">
                    {house.description}
                  </p>
                  <span className="bt_more text-rikyu-dark inline-flex items-center gap-2">
                    More Model
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}