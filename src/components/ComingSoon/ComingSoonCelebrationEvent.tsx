import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../constants/language";
import { PATH } from "../../constants/paths";

export default function ComingSoonCelebrationEvent() {
  const { t, i18n } = useTranslation(["together-we-celebrate"]);
  return (
    <section className="coming-soon coming-soon-celebratione-event">
      <img
        className="h-[100vh] lg:h-auto xl:h-[100vh] object-cover"
        src="/assets/images/kv-coming-celebration-event-x2.png"
        alt=""
        
      />
      <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[4] w-full lg:w-[1000px]">
        <div className="coming-soon-desc  relative px-[2rem] md:px-0 text-center opacity-[0.8] mb-[2rem]">
          <p className="absolute -top-[40px] left-[50%] -translate-x-[50%] w-full mb-[1rem] font-bold">
            {i18n.language == LANGUAGE.VIETNAM ? "Đồng tôn vinh" : ""}
          </p>
          {t("comming-soon.desc1")}
        </div>
        <p className="coming-soon-text px-[2rem] md:px-0 font-bold">
          {t("comming-soon.desc2")}
        </p>

        {i18n.language == LANGUAGE.ENGLISH ? (
          <>
            <h3 className="coming-soon-title">coming</h3>
            <span className="coming-soon-title-2">soon</span>
          </>
        ) : (
          <>
            {/* <h3 className="text-[3.6rem] leading-[4.8rem] font-medium mb-[3rem]">
              ĐỪNG BỎ LỠ
            </h3> */}
          </>
        )}

        <div className="flex items-center justify-center">
          <Link
            className="btn btn-3 inline-block "
            to={`${
              i18n.language == LANGUAGE.ENGLISH ? PATH.HOME : PATH.TRANG_CHU
            }`}
          >
            {i18n.language == LANGUAGE.ENGLISH ? (
              "back to home"
            ) : (
              <>
                <span className="font-medium">VỀ TRANG CHỦ</span>
              </>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
