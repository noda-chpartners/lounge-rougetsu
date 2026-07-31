import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { events } from "@/mocks/homeData";
import "swiper/css";

export default function EventSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-large-small mb-8">
        <div className="flex items-end justify-between">
          <h2 className="font-efont text-lg md:text-xl tracking-[0.15em] text-rikyu-dark">EVENT INFO</h2>
          <a href="#" className="bt_more text-rikyu-dark hidden md:flex items-center">
            More Event
          </a>
        </div>
      </div>

      <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-12">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.15}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 28 },
          }}
          navigation={{
            prevEl: ".event-prev",
            nextEl: ".event-next",
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <a href={event.link} className="block group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="img-scale aspect-[4/3]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {event.category && (
                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] px-3 py-1 tracking-wider">
                      {event.category}
                    </span>
                  )}
                </div>
                <h3 className="text-sm md:text-base font-serif text-rikyu-dark leading-relaxed mb-3 line-clamp-2">
                  {event.title}
                </h3>
                <dl className="space-y-1 text-xs text-rikyu-gray">
                  <div className="flex gap-2">
                    <dt className="font-normal whitespace-nowrap">開催日時 |</dt>
                    <dd>{event.date}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-normal whitespace-nowrap">開催場所 |</dt>
                    <dd className="line-clamp-1">{event.place}</dd>
                  </div>
                </dl>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile More Link */}
      <div className="container-large-small mt-6 md:hidden">
        <a href="#" className="bt_more text-rikyu-dark">More Event</a>
      </div>

      {/* Custom Arrows */}
      <div className="container-large-small mt-6 flex gap-3">
        <button className="event-prev w-10 h-10 border border-rikyu-dark rounded-full flex items-center justify-center text-rikyu-dark hover:bg-rikyu-dark hover:text-white transition-all">
          <i className="ri-arrow-left-line" />
        </button>
        <button className="event-next w-10 h-10 border border-rikyu-dark rounded-full flex items-center justify-center text-rikyu-dark hover:bg-rikyu-dark hover:text-white transition-all">
          <i className="ri-arrow-right-line" />
        </button>
      </div>
    </section>
  );
}