import { storeInfo } from "@/mocks/rougetuData";

export default function Footer() {
  return (
    <footer id="contact" className="bg-rougetu-darker border-t border-rougetu-border">
      <div className="container-lp py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-2xl font-serif text-white tracking-[0.15em] mb-2">狼月</p>
            <p className="text-xs font-display text-rougetu-gray tracking-[0.3em] uppercase mb-4">
              {storeInfo.nameEn}
            </p>
            <p className="text-rougetu-gray text-sm leading-relaxed">
              {storeInfo.concept}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-rougetu-gold mb-4 font-display uppercase">
              Information
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-rougetu-lightgray">{storeInfo.address}</p>
              <a
                href={`tel:${storeInfo.phone}`}
                className="block text-rougetu-lightgray hover:text-rougetu-gold transition-colors"
              >
                TEL: {storeInfo.phone}
              </a>
              <p className="text-rougetu-gray text-xs">
                {storeInfo.hours.weekday}（{storeInfo.hours.closed}定休）
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-rougetu-gold mb-4 font-display uppercase">
              Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "CONCEPT", href: "#concept" },
                { label: "MENU", href: "#menu" },
                { label: "ACCESS", href: "#access" },
                { label: "RECRUIT", href: "#recruit" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-rougetu-lightgray text-sm hover:text-rougetu-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={storeInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rougetu-lightgray text-sm hover:text-rougetu-gold transition-colors inline-flex items-center gap-2"
              >
                <i className="ri-instagram-line w-4 h-4 flex items-center justify-center" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-rougetu-border mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-rougetu-gray text-xs tracking-wider">
            © {new Date().getFullYear()} Lounge狼月 All Rights Reserved.
          </p>
          <p className="text-rougetu-gray text-[10px]">
            島根県出雲市今市町 / ラウンジバー
          </p>
        </div>
      </div>
    </footer>
  );
}