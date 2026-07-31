import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { aboutItems } from "@/mocks/homeData";
import "swiper/css";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-large-small mb-8 flex items-end justify-between">
        <h2 className="font-efont text-lg md:text-xl tracking-[0.15em] text-rikyu-dark">ABOUT US</h2>
        <div className="hidden md:flex gap-3">
          <button className="about-prev w-10 h-10 bg-rikyu-dark rounded-full flex items-center justify-center text-white hover:bg-rikyu-gray transition-colors">
            <i className="ri-arrow-left-line" />
          </button>
          <button className="about-next w-10 h-10 bg-rikyu-dark rounded-full flex items-center justify-center text-white hover:bg-rikyu-gray transition-colors">
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>

      <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-12">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.2}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1280: { slidesPerView: 3.8, spaceBetween: 28 },
          }}
          navigation={{
            prevEl: ".about-prev",
            nextEl: ".about-next",
          }}
        >
          {aboutItems.map((item) => (
            <SwiperSlide key={item.id}>
              <a href={item.link} className="block group">
                <div className="img-scale aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.jaTitle}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-efont text-sm tracking-[0.15em] text-rikyu-gray mb-1">
                      {item.enTitle}
                    </p>
                    <p className="text-xs text-rikyu-gray">{item.jaTitle}</p>
                  </div>
                  <span className="bt_more text-rikyu-dark text-xs flex-shrink-0">
                    More {item.enTitle.split(" ")[0]}
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}