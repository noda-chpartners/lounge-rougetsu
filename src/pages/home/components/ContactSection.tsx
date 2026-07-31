import { storeInfo } from "@/mocks/rougetuData";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-rougetu-darker relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rougetu-gold/5 rounded-full blur-[100px]" />

      <div className="container-lp relative z-10">
        <div className="text-center mb-16">
          <p className="heading-en mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em]">
            お問い合わせ
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-left md:text-center text-rougetu-lightgray text-sm leading-relaxed mb-12">
            ご予約・お問い合わせはお電話またはInstagram DMから承ります。
            <br />
            貸切パーティーやイベントのご相談もお気軽にどうぞ。
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href={`tel:${storeInfo.phone}`}
              className="glass-card p-6 md:p-8 text-center hover:border-rougetu-gold/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-rougetu-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-rougetu-gold/20 transition-colors">
                <i className="ri-phone-line text-rougetu-gold text-xl w-6 h-6 flex items-center justify-center" />
              </div>
              <p className="text-rougetu-gray text-xs tracking-[0.2em] uppercase mb-2">
                Telephone
              </p>
              <p className="text-white text-lg font-display tracking-wide">
                {storeInfo.phone}
              </p>
              <p className="text-rougetu-gray text-xs mt-3">
                お電話でのご予約はこちら
              </p>
            </a>

            <a
              href={storeInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 md:p-8 text-center hover:border-rougetu-gold/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-rougetu-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-rougetu-gold/20 transition-colors">
                <i className="ri-instagram-line text-rougetu-gold text-xl w-6 h-6 flex items-center justify-center" />
              </div>
              <p className="text-rougetu-gray text-xs tracking-[0.2em] uppercase mb-2">
                Instagram DM
              </p>
              <p className="text-white text-lg font-display tracking-wide">
                {storeInfo.instagram}
              </p>
              <p className="text-rougetu-gray text-xs mt-3">
                DMでのお問い合わせはこちら
              </p>
            </a>

            <div className="glass-card p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-full bg-rougetu-gold/10 flex items-center justify-center mx-auto mb-5">
                <i className="ri-time-line text-rougetu-gold text-xl w-6 h-6 flex items-center justify-center" />
              </div>
              <p className="text-rougetu-gray text-xs tracking-[0.2em] uppercase mb-2">
                Business Hours
              </p>
              <p className="text-white text-sm">
                平日・土日祝 {storeInfo.hours.weekday}
              </p>
              <p className="text-rougetu-gold text-xs mt-2">
                定休日：{storeInfo.hours.closed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}