import { voices } from "@/mocks/homeData";

export default function VoiceSection() {
  return (
    <section className="py-16 md:py-24 bg-rikyu-bg">
      <div className="container-small-small mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-efont text-lg md:text-xl tracking-[0.15em] text-rikyu-dark">VOICE</h2>
          <p className="text-sm text-rikyu-gray leading-relaxed max-w-xl">
            家づくりの過程や住み心地、こだわりのポイントなど、リアルな体験談をぜひご覧ください。
            <br className="hidden md:block" />
            これから家を建てる皆さまにとって、理想の住まいづくりのヒントが見つかるはずです。
          </p>
        </div>
      </div>

      <div className="container-small-small">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {voices.map((voice) => (
            <a key={voice.id} href={voice.link} className="block group">
              <div className="img-scale aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img
                  src={voice.image}
                  alt={voice.client}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-rikyu-gray mb-2">{voice.client}</p>
              <h3 className="text-sm md:text-base font-serif text-rikyu-dark leading-relaxed line-clamp-3">
                {voice.title}
              </h3>
            </a>
          ))}
        </div>
      </div>

      <div className="container-small-small mt-10">
        <a href="#" className="bt_more text-rikyu-dark inline-flex items-center gap-2">
          More Voice
        </a>
      </div>
    </section>
  );
}