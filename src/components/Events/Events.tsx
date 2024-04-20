import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../constants/language";
import { PATH } from "../../constants/paths";
import { NAV } from "../../constants/navs";

const sessions = [
  {
    nameEN: NAV.TOGETHER_WE_CREATE,
    index: "01",
    img: "",
    link: PATH.TOGETHER_WE_CREATE,
    linkVI: PATH.DONG_KIEN_TAO,
    nameVI: NAV.DONG_KIEN_TAO,
    nameFooter: "Lumi Hanoi",
  },
  {
    nameEN: NAV.TOGETHER_WE_GIVE_BACK,
    index: "02",
    img: "",
    link: PATH.TOGETHER_WE_GIVE_BACK,
    linkVI: PATH.DONG_CHIA_SE,
    nameVI: NAV.DONG_SE_CHIA,
    nameFooter: "",
  },
  {
    nameEN: NAV.TOGETHER_WE_CELEBRATE,
    index: "03",
    img: "",
    link: PATH.TOGETHER_WE_CELEBRATE,
    linkVI: PATH.DONG_TON_VINH,
    nameVI: NAV.DONG_TON_VINH,
    nameFooter: "",
  },
];
export default function Events() {
  const { i18n } = useTranslation();
  const renderSessions = () => {
    return sessions.map((item, index) => {
      return (
        <div key={index} className="events-item">
          <Link
            className="flex h-full w-full"
            to={`${
              i18n.language == LANGUAGE.ENGLISH ? item.link : item.linkVI
            }`}
          >
            <p>
              {i18n.language == LANGUAGE.ENGLISH ? item.nameEN : item.nameVI}{" "}
              <span className="mt-[1rem] md:mt-0 inline-block">
                {item.index}
              </span>
            </p>
          </Link>
          <div className="events-item-bg"></div>
          <div className="absolute bottom-[32px] right-[22px] z-[10]">{item.nameFooter}</div>
        </div>
      );
    });
  };
  return (
    <section id="events" className="events">
      <div className="grid grid-cols-1 md:grid-cols-3">{renderSessions()}</div>
      {/* <div className="events-bg"></div> */}
    </section>
  );
}
