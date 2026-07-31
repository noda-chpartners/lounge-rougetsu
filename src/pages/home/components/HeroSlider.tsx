import { imageUrls } from "@/mocks/rougetuData";

export default function HeroSlider() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={imageUrls.hero}
          alt="Lounge狼月 月と狼"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rougetu-darker/60 via-rougetu-darker/40 to-rougetu-darker/80" />
      </div>

      <div className="relative z-10 text-center px-4">
        <p className="heading-en mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          Lounge
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-[0.15em] mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          狼月
        </h1>
        <div className="divider-gold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]" />
        <p className="text-rougetu-lightgray text-sm md:text-base tracking-[0.3em] opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
          月と狼が導く、大人の隠れ家
        </p>
        <p className="text-rougetu-gray text-xs md:text-sm tracking-[0.2em] mt-3 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
          島根県出雲市今市町
        </p>

        <div className="mt-10 opacity-0 animate-[fadeInUp_1s_ease-out_1.8s_forwards]">
          <a
            href="#concept"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#concept")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-gold"
          >
            ENTER
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-rougetu-gray uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-rougetu-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}