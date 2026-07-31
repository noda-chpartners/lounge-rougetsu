import { storeInfo, imageUrls } from "@/mocks/rougetuData";

export default function AccessSection() {
  return (
    <section id="access" className="section-padding bg-rougetu-dark relative overflow-hidden">
      <div className="container-lp relative z-10">
        <div className="text-center mb-16">
          <p className="heading-en mb-3">Access & Info</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em]">
            店舗情報
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-sm tracking-[0.2em] text-rougetu-gold mb-8 font-display uppercase">
              Information
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-rougetu-gray text-xs tracking-wider mb-1">店名</p>
                <p className="text-white font-serif text-lg">{storeInfo.name}</p>
                <p className="text-rougetu-gray text-xs font-display tracking-[0.2em]">{storeInfo.nameEn}</p>
              </div>
              <div className="h-px bg-rougetu-border" />
              <div>
                <p className="text-rougetu-gray text-xs tracking-wider mb-1">住所</p>
                <p className="text-white text-sm leading-relaxed">{storeInfo.address}</p>
              </div>
              <div className="h-px bg-rougetu-border" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-rougetu-gray text-xs tracking-wider mb-1">電話番号</p>
                  <a
                    href={`tel:${storeInfo.phone}`}
                    className="text-white text-sm hover:text-rougetu-gold transition-colors"
                  >
                    {storeInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-rougetu-gray text-xs tracking-wider mb-1">業種</p>
                  <p className="text-white text-sm">ラウンジバー</p>
                </div>
              </div>
              <div className="h-px bg-rougetu-border" />
              <div>
                <p className="text-rougetu-gray text-xs tracking-wider mb-2">営業時間</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-rougetu-lightgray">平日</span>
                    <span className="text-white">{storeInfo.hours.weekday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rougetu-lightgray">土日祝</span>
                    <span className="text-white">{storeInfo.hours.weekend}</span>
                  </div>
                  <div className="flex justify-between text-rougetu-gold">
                    <span>定休日</span>
                    <span>{storeInfo.hours.closed}</span>
                  </div>
                </div>
              </div>
              <div className="h-px bg-rougetu-border" />
              <div>
                <p className="text-rougetu-gray text-xs tracking-wider mb-2">席数</p>
                <p className="text-white text-sm">
                  全{storeInfo.seats.total}席（カウンター{storeInfo.seats.counter}席 / {storeInfo.seats.table}）
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-1 overflow-hidden rounded-lg">
              <iframe
                src={storeInfo.mapEmbedUrl}
                title="Lounge狼月 地図"
                className="w-full h-[300px] md:h-[360px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg border border-rougetu-border">
              <img
                src={imageUrls.interior}
                alt="Lounge狼月 店内"
                className="w-full h-[200px] md:h-[240px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rougetu-darker/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}