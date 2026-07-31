import { storeInfo } from "@/mocks/rougetuData";

export default function InstagramSection() {
  return (
    <section className="section-padding bg-rougetu-dark relative overflow-hidden">
      <div className="container-lp relative z-10">
        <div className="text-center mb-12">
          <p className="heading-en mb-3">Follow Us</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em]">
            Instagram
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-left text-rougetu-lightgray text-sm leading-relaxed mb-8">
            最新のイベント情報や店内の様子、限定メニューをInstagramで配信中。
            フォローして最新情報をチェックしてください。
          </p>

          <div className="glass-card p-8 md:p-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rougetu-gold/20 to-rougetu-gold/5 border border-rougetu-gold/30 flex items-center justify-center mb-5">
              <i className="ri-instagram-line text-2xl text-rougetu-gold w-8 h-8 flex items-center justify-center" />
            </div>
            <p className="text-rougetu-gray text-xs tracking-wider mb-2">公式アカウント</p>
            <p className="text-white font-serif text-xl mb-1">{storeInfo.instagram}</p>
            <p className="text-rougetu-gray text-xs mb-6">Lounge狼月 公式Instagram</p>
            <a
              href={storeInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              <i className="ri-instagram-line mr-2 w-5 h-5 flex items-center justify-center" />
              フォローする
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}