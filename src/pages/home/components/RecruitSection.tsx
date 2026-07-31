import { recruitInfo, imageUrls } from "@/mocks/rougetuData";

export default function RecruitSection() {
  const position = recruitInfo.positions[0];

  return (
    <section id="recruit" className="section-padding bg-rougetu-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.05),_transparent_70%)]" />

      <div className="container-lp relative z-10">
        <div className="text-center mb-16">
          <p className="heading-en mb-3">Recruit</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em]">
            スタッフ募集
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg border border-rougetu-border">
              <img
                src={imageUrls.staff}
                alt="スタッフ募集"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rougetu-darker/60 to-transparent" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rougetu-gold/20 flex items-center justify-center">
                  <i className="ri-user-add-line text-rougetu-gold w-5 h-5 flex items-center justify-center" />
                </div>
                <div>
                  <h3 className="text-white font-serif">{position.title}</h3>
                  <p className="text-rougetu-gray text-xs">{position.type}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-rougetu-border">
                  <span className="text-rougetu-gray text-sm">給与</span>
                  <span className="text-rougetu-gold font-display text-lg">{position.wage}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-rougetu-border">
                  <span className="text-rougetu-gray text-sm">勤務時間</span>
                  <span className="text-white text-sm">{position.hours}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {position.benefits.map((b, i) => (
                  <span
                    key={i}
                    className="text-[11px] tracking-wider bg-rougetu-gold/10 text-rougetu-goldLight border border-rougetu-gold/20 px-3 py-1.5 rounded"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <p className="text-rougetu-lightgray text-sm leading-[1.9]">
                {recruitInfo.message.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <div className="text-center">
              <p className="text-rougetu-gray text-xs mb-4">{recruitInfo.contact}</p>
              <a href="#contact" className="btn-gold">
                応募する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}