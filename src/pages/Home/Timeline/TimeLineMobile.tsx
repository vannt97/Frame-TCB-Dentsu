import { useEffect, useMemo, useRef, useState } from "react";
import { timelines } from "../../../mocks/timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LANGUAGE } from "../../../constants/language";
import { useTranslation } from "react-i18next";

export default function TimelineMobile() {
  const [swiper, setSwiper] = useState<any>(null);
  const [swiperMessage, setSwiperMessage] = useState<any>(null);
  const timeLineNext = useRef(null);
  const timeLinePrev = useRef(null);
  const [datas, setDatas] = useState<any[]>([]);
  const { i18n } = useTranslation();
  const handleNext = () => {
    if (!swiperMessage) return;
    swiperMessage.slideNext();
  };
  const handlePrev = () => {
    if (!swiperMessage) return;
    swiperMessage.slidePrev();
  };
  useEffect(() => {
    setDatas(timelines);
  }, [swiper]);

  const renderTimeLine = () => {
    let content = timelines.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="timeline-progress-item">
            <div
              className="timeline-progress-circle"
              // onMouseEnter={() => {
              //   setMessage(item.message);
              // }}
              // onMouseLeave={() => {
              //   setMessage("");
              // }}
            >
              <span>
                {i18n.language == LANGUAGE.ENGLISH ? item.time : item.timeVi}
              </span>
              <span>{item.year}</span>
            </div>
            <div className="timeline-progress-info">
              <img
                loading="lazy"
                className="w-[72px] h-[72px]"
                src={`${
                  i18n.language == LANGUAGE.ENGLISH ? item.image : item.imageVi
                }`}
                alt=""
              />
              <p className="font-bold uppercase">
                {i18n.language == LANGUAGE.ENGLISH ? item.nameEN : item.nameVI}
              </p>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return content;
  };

  const renderSwiper = useMemo(() => {
    return (
      <>
        <div className="timeline-progress-line"></div>
        <Swiper
          onInit={(swiper) => {
            setSwiper(swiper);
          }}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: timeLineNext.current,
            prevEl: timeLinePrev.current,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: false, dynamicBullets: false }}
          allowTouchMove={false}
          speed={1000}
          longSwipes={false}
          shortSwipes={true}
        >
          {datas.length > 0 ? <>{renderTimeLine()}</> : <></>}
        </Swiper>
        <div
          ref={timeLineNext}
          className="timeline-progress-btn timeline-progress-next"
          onClick={handleNext}
        >
          <button className="btn btn-arrow">
            <img loading="lazy" src="/assets/svg/arrow-icon.svg" alt="" />
          </button>
        </div>
        <div
          ref={timeLinePrev}
          className="timeline-progress-btn timeline-progress-prev"
          onClick={handlePrev}
        >
          <button className="btn btn-arrow scale-[-1] translate-x-px">
            <img loading="lazy" src="/assets/svg/arrow-icon.svg" alt="" />
          </button>
        </div>
      </>
    );
  }, [datas, i18n.language]);

  const messageSliders = () => {
    return timelines.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="text-center mx-[2rem] md:mx-[4rem]">
            {i18n.language == LANGUAGE.ENGLISH ? item.message : item.messageVI}
          </div>
        </SwiperSlide>
      );
    });
  };

  const renderSwiperMessage = useMemo(() => {
    return (
      <Swiper
        onInit={(swiper) => {
          setSwiperMessage(swiper);
        }}
        slidesPerView={1}
        modules={[]}
        pagination={{ clickable: false, dynamicBullets: false }}
        allowTouchMove={false}
        speed={1000}
        longSwipes={false}
        shortSwipes={true}
      >
        {messageSliders()}
      </Swiper>
    );
  }, [i18n.language]);

  return (
    <div className="timeline-progress mobile">
      <div className="mx-[5rem] md:mx-[10rem] relative">{renderSwiper}</div>
      <div className="text-center -translate-y-[5rem] text-grey-3-color">
        {renderSwiperMessage}
      </div>
      <p className="-translate-y-[2rem] ct-custom text-yellow-color text-center pb-[4rem]">
        {i18n.language == LANGUAGE.ENGLISH
          ? "The schedule may be subject to change depending on the circumstances"
          : "Lịch trình có thể được thay đổi tuỳ theo điều kiện thực tế"}
      </p>
    </div>
  );
}
