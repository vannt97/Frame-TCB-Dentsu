import { useTranslation } from "react-i18next";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import Events from "../../components/Events/Events";
import KV from "./KV/KV";
import JourneyHome from "./JourneyHome/JourneyHome";
import Timeline from "./Timeline/Timeline";
import VideoKv from "./VideoKv/VideoKv.js";

import { LANGUAGE } from "../../constants/language";

// import { lazy } from "react";
// const KV = lazy(() => import("./KV/KV"));
// const JourneyHome = lazy(() => import("./JourneyHome/JourneyHome"));
// const VideoKv = lazy(() => import("./VideoKv/VideoKv.js"));
// const Timeline = lazy(() => import("./Timeline/Timeline"));
// const Events = lazy(() => import("../../components/Events/Events"));
export default function Home() {
  const { t, i18n } = useTranslation(["home"]);

  return (
    <>
      <Header></Header>
      <section id="home">
        <KV />
        <JourneyHome t={t} />
        <VideoKv />
        <section id="agenda" className="agenda">
          <div className="agenda-bg"></div>
          <div className="agenda-frame"></div>
          <h3
            className={`agenda-title ${
              i18n.language == LANGUAGE.ENGLISH ? "" : LANGUAGE.VIETNAM
            }`}
          >
            {i18n.language == LANGUAGE.ENGLISH ? (
              <p className="relative z-[2] leading-[4rem] lg:leading-normal">
                OUR 30-YEAR <span>MILESTONES</span>
              </p>
            ) : (
              <div className="relative z-[2] mx-[2rem] leading-[4rem] lg:leading-normal ">
                <p className="inline-block">DẤU ẤN</p>{" "}
                <span>
                  HÀNH TRÌNH <p className="block sm:inline">30 NĂM</p>
                </span>
              </div>
            )}
          </h3>
          {i18n.language == LANGUAGE.ENGLISH ? (
            ""
          ) : (
            <p className="font-medium uppercase text-black-color text-center mb-[2rem]">
              Hành trình 30 năm tại việt nam
            </p>
          )}
          <div className="ct-custom text-left md:text-center text-grey-3-color mb-[4rem]">
            <p>{t("agenda.desc")}</p>
          </div>
          <div className="ct-custom relative z-[4] mb-[6rem]">
            <div className="agenda-img-swiper"></div>
          </div>

          <div className="agenda-line"></div>
        </section>
        <Timeline />
        <Events />
      </section>
      <Footer></Footer>
    </>
  );
}

{
  /* <div className="flex relative flex-wrap">
            <div className="w-[100%] lg:w-[38%] order-2 lg:order-1">
              <div
                className={`agenda-desc ${
                  i18n.language == LANGUAGE.ENGLISH ? "" : LANGUAGE.VIETNAM
                }`}
              >
                <div className="ct-custom-left h-full relative">
                  <p>{t("agenda.desc")}</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[62%] order-1 lg:order-2">
              <div className="agenda-img">
                <div className="ct-custom-right h-full">
                  <div className="agenda-img-swiper"></div>
                </div>
              </div>
            </div>
          </div> */
}
{
  /* <div className="agenda-line"></div> */
}

{
  /* <div className="relative lg:absolute flex justify-center lg:justify-end bottom-0 right-0">
                    <button className="btn btn-arrow scale-[-1] translate-x-px">
                      <img src="/assets/svg/arrow-icon.svg" alt="" />
                    </button>
                    <button className="btn btn-arrow">
                      <img src="/assets/svg/arrow-icon.svg" alt="" />
                    </button>
                  </div> */
}
{
  /* <h3 className="">
                    {t("agenda.title-1")}
                    <span>{t("agenda.title-2")}</span>
                  </h3> */
}
