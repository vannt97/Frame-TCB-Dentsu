import JourneyCt from "../../../components/JourneyCt/JourneyCt";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../../constants/language";

export default function JourneyOurStory() {
  const { t, i18n } = useTranslation(["together-we-create"]);
  return (
    <section id="journey-30y" className="journey-30y">
      <div className="journey-30y-frame-2"></div>
      {/* <div className="journey-30y-frame-3"></div> */}
      <div className="grid grid-cols-1  items-center ">
        <div className="journey-30y-left lg:justify-center justify-start flex">
          <div className="ct-custom-left">
            <JourneyCt />
          </div>
        </div>
        <div className="journey-30y-right">
          <div className="ct-custom-right grid grid-cols-1 gap-[1.6rem]">
            {i18n.language == LANGUAGE.VIETNAM ? (
              <p className="font-bold ">Đồng kiến tạo</p>
            ) : (
              ""
            )}
            <p className="">{t("journey.desc1")}</p>
            <p className="font-bold">{t("journey.desc2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
