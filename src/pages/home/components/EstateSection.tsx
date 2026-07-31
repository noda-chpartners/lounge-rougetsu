export default function EstateSection() {
  return (
    <section className="bg-rikyu-bg">
      <div className="container-large-small py-16 md:py-20">
        {/* Real Estate */}
        <a href="#" className="block group mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="w-full md:w-2/5 img-scale rounded-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="https://rikyu-home.com/wp-content/themes/mgm_rikyu/images/top-estate-item-img.webp?2025"
                  alt="分譲地情報"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-efont text-lg md:text-xl tracking-[0.15em] text-rikyu-dark mb-1">
                Real Estate
                <span className="text-sm ml-2 text-rikyu-gray">分譲地情報</span>
              </h2>
              <p className="text-sm text-rikyu-dark leading-relaxed mt-4">
                家づくりは「土地探し」から。リキューでは、家を建てるプロの視点で厳選した土地情報をご紹介しています。理想の暮らしに合わせた土地選びをお手伝いしますので、初めての方も安心してご相談ください。
              </p>
              <div className="mt-4">
                <span className="bt_more text-rikyu-dark inline-flex items-center gap-2">
                  More Real Estate
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="common-ani-line bg-rikyu-border" />

      <div className="container-large-small py-16 md:py-20">
        {/* Renovation */}
        <a
          href="https://renovation.rikyu-home.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="w-full md:w-2/5 img-scale rounded-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="https://rikyu-home.com/wp-content/themes/mgm_rikyu/images/top-renovation-item-img.webp"
                  alt="リノベーション"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-efont text-lg md:text-xl tracking-[0.15em] text-rikyu-dark mb-1">
                Renovation
                <span className="text-sm ml-2 text-rikyu-gray">リノベーション</span>
              </h2>
              <p className="text-sm text-rikyu-dark leading-relaxed mt-4">
                「こんな空間が欲しい」と気になりだしたら、リノベーションのタイミングかもしれません。私たちは、新築住宅で培ったノウハウで、お客様が思い描いた理想の居場所を実現できます。
              </p>
              <div className="mt-4">
                <span className="bt_more text-rikyu-dark inline-flex items-center gap-2">
                  More Renovation
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}