import { useEffect, useMemo, useRef, useState } from "react";
import { timelines } from "../../../mocks/timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../../constants/language";

export default function TimelineDesktop() {
  const [swiper, setSwiper] = useState<any>(null);
  const timeLineNext = useRef(null);
  const timeLinePrev = useRef(null);
  const [datas, setDatas] = useState<any[]>([]);
  const [MessageHidden, setMessageHidden] = useState({
    isShow: true,
    height: 0,
  });
  const [swiperMessage, setSwiperMessage] = useState<any>(null);
  const { i18n } = useTranslation();
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
              onMouseEnter={() => {
                setMessageHidden({
                  isShow: false,
                  height: document.querySelector(
                    `.swiper-message .swiper-slide:nth-child(${index + 1})`
                  )
                    ? (document.querySelector(
                        `.swiper-message .swiper-slide:nth-child(${index + 1})`
                      )?.clientHeight as number)
                    : 0,
                });
                swiperMessage.slideTo(index);
              }}
              onMouseLeave={() => {
                setMessageHidden({ isShow: true, height: 0 });
              }}
            >
              <div className="timeline-progress-circle-bg"></div>
              <span>
                {i18n.language == LANGUAGE.ENGLISH ? item.time : item.timeVi}
              </span>
              <span>{item.year}</span>
              <div className="timeline-progress-circle-pulse"></div>
            </div>
            <div className="timeline-progress-info">
              <img
                className="w-[72px] h-[72px]"
                loading="lazy"
                src={`${
                  i18n.language == LANGUAGE.ENGLISH ? item.image : item.imageVi
                }`}
                alt=""
              />
              <p
                className="font-bold uppercase"
                style={{
                  textWrap: "balance",
                }}
              >
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
          slidesPerView={2}
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
        >
          <button className="btn btn-arrow">
            <img src="/assets/svg/arrow-icon.svg" alt="" />
          </button>
        </div>
        <div
          ref={timeLinePrev}
          className="timeline-progress-btn timeline-progress-prev"
        >
          <button className="btn btn-arrow scale-[-1] translate-x-px">
            <img src="/assets/svg/arrow-icon.svg" alt="" />
          </button>
        </div>
      </>
    );
  }, [datas, i18n.language]);

  const messageSliders = () => {
    return timelines.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="text-center mx-[2rem] md:mx-[4rem] text-grey-3-color">
            {i18n.language == LANGUAGE.ENGLISH ? item.message : item.messageVI}
          </div>
        </SwiperSlide>
      );
    });
  };

  const renderSwiperMessage = useMemo(() => {
    return (
      <Swiper
        style={{
          opacity: `${MessageHidden.isShow ? "0" : "1"}`,
          // display: `${isMessageHidden ? "none" : "block"}`,
        }}
        onInit={(swiper) => {
          setSwiperMessage(swiper);
        }}
        className="swiper-message"
        slidesPerView={1}
        modules={[]}
        pagination={{ clickable: false, dynamicBullets: false }}
        allowTouchMove={false}
        // speed={1000}
        // longSwipes={false}
        // shortSwipes={true}
      >
        {messageSliders()}
      </Swiper>
    );
  }, [MessageHidden.isShow, i18n.language]);
  return (
    <div className="timeline-progress">
      <div className="mx-[6rem] 2xl:mx-[10rem] relative">{renderSwiper}</div>
      <div className="-translate-y-[2rem] relative">
        {renderSwiperMessage}
        <p
          style={{
            transition: "all 0.3s",
            top: `${
              MessageHidden.isShow ? "0%" : `${MessageHidden.height + 27}px`
            }`,
          }}
          className="absolute top-[0%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-yellow-color text-center"
        >
          {i18n.language == LANGUAGE.ENGLISH
            ? "The schedule may be subject to change depending on the circumstances"
            : "Lịch trình có thể được thay đổi tuỳ theo điều kiện thực tế"}
        </p>
      </div>
    </div>
  );
}
