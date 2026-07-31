import {
  bottleKeep,
  draftBeerAddon,
  imageUrls,
  includedDrinks,
  pricing,
} from "@/mocks/rougetuData";

export default function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-rougetu-darker relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rougetu-gold/3 rounded-full blur-3xl" />

      <div className="container-lp relative z-10">
        <div className="text-center mb-16">
          <p className="heading-en mb-3">Menu & Course</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em]">
            料金・コース
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <p className="text-center text-rougetu-gold text-sm tracking-[0.25em] mb-8">
          {pricing.setLabel}（{pricing.duration}）
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-[800px] mx-auto">
          <div className="glass-card p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-rougetu-gold/10 rounded-bl-full" />
            <p className="text-rougetu-gray text-sm tracking-wider mb-2">MEN</p>
            <p className="text-4xl md:text-5xl font-display text-rougetu-gold mb-1">
              {pricing.men.toLocaleString()}
              <span className="text-lg ml-1 text-rougetu-lightgray">円</span>
            </p>
            <p className="text-rougetu-gray text-xs mt-2">男性</p>
          </div>
          <div className="glass-card p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-rougetu-gold/10 rounded-bl-full" />
            <p className="text-rougetu-gray text-sm tracking-wider mb-2">WOMEN</p>
            <p className="text-4xl md:text-5xl font-display text-rougetu-gold mb-1">
              {pricing.women.toLocaleString()}
              <span className="text-lg ml-1 text-rougetu-lightgray">円</span>
            </p>
            <p className="text-rougetu-gray text-xs mt-2">女性</p>
          </div>
        </div>

        <div className="glass-card p-6 md:p-8 max-w-[800px] mx-auto mb-8">
          <p className="text-center text-rougetu-gold text-xs tracking-[0.2em] mb-5">
            SET DRINK
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {includedDrinks.map((drink) => (
              <li
                key={drink}
                className="border border-rougetu-border rounded py-3 px-2 text-center text-sm text-rougetu-lightgray"
              >
                {drink}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-10">
          <div className="glass-card p-6 md:p-8 text-center border-rougetu-gold/40">
            <p className="text-rougetu-gold text-xs tracking-[0.2em] mb-3">OPTION</p>
            <h3 className="text-lg font-serif text-white mb-4">{draftBeerAddon.label}</h3>
            <p className="text-3xl font-display text-rougetu-gold">
              ＋{draftBeerAddon.price.toLocaleString()}
              <span className="text-sm text-rougetu-gray ml-1">円</span>
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 text-center">
            <p className="text-rougetu-gold text-xs tracking-[0.2em] mb-3">
              {bottleKeep.duration}
            </p>
            <h3 className="text-lg font-serif text-white mb-4">{bottleKeep.label}</h3>
            <div className="flex justify-center gap-6 sm:gap-10">
              <p className="text-rougetu-lightgray text-sm">
                男性
                <span className="block text-xl font-display text-white mt-1">
                  {bottleKeep.men.toLocaleString()}円
                </span>
              </p>
              <p className="text-rougetu-lightgray text-sm">
                女性
                <span className="block text-xl font-display text-white mt-1">
                  {bottleKeep.women.toLocaleString()}円
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-rougetu-gray text-xs mb-12">{pricing.note}</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-lg border border-rougetu-border bg-rougetu-dark">
            <img
              src={imageUrls.menu}
              alt="Lounge狼月の料金表"
              className="w-full aspect-square object-contain"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-rougetu-border">
            <img
              src={imageUrls.concept}
              alt="Lounge狼月のテーブル席"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-rougetu-border">
            <img
              src={imageUrls.interior}
              alt="Lounge狼月の店内"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
