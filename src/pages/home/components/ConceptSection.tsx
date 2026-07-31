import { storeInfo, imageUrls } from "@/mocks/rougetuData";

export default function ConceptSection() {
  return (
    <section id="concept" className="section-padding bg-rougetu-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rougetu-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rougetu-gold/5 rounded-full blur-3xl" />

      <div className="container-lp relative z-10">
        <div className="text-center mb-16">
          <p className="heading-en mb-3">Concept</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em]">
            月と狼が紡ぐ空間
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border border-rougetu-border">
              <img
                src={imageUrls.concept}
                alt="Lounge狼月 店内"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rougetu-darker/40 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-serif text-rougetu-goldLight leading-relaxed">
              {storeInfo.concept}
            </p>
            <div className="w-12 h-px bg-rougetu-gold" />
            <div className="space-y-4 text-rougetu-lightgray leading-[1.9] text-[15px]">
              {storeInfo.conceptDetail.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <p className="text-sm text-rougetu-gray italic">
              "月の光に導かれ、狼のように自由に。"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}