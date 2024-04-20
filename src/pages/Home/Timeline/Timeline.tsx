import { useTranslation } from "react-i18next";
import { deviceType } from "../../../utils/common";
import TimelineDesktop from "./TimelineDesktop";
import TimelineMobile from "./TimeLineMobile";
import { LANGUAGE } from "../../../constants/language";

export default function Timeline() {
  const { i18n } = useTranslation(["home"]);
  const renderContent = () => {
    if (deviceType() == "desktop") {
      return <TimelineDesktop />;
    } else {
      return <TimelineMobile />;
    }
  };
  return (
    <section id="timeline" className={`timeline`}>
      {i18n.language == LANGUAGE.ENGLISH ? (
        <h2 className="">
          Celebrating <span>30 YEARS TOGETHER</span>
        </h2>
      ) : (
        <h2>
          HÀNH TRÌNH <span>30 NĂM TẠI VIỆT NAM</span>
        </h2>
      )}
      {renderContent()}
    </section>
  );
}
