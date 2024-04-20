import { TFunction } from "i18next";
import JourneyCt from "../../../components/JourneyCt/JourneyCt";
import { lazy } from "react";
interface propsJourney {
  t: TFunction<[string], undefined>;
}
export default function JourneyHome(props: propsJourney) {
  return (
    <section id="journey" className="journey">
      <div className="grid grid-cols-1 items-center">
        <div className="journey-left flex items-center lg:justify-center justify-start ">
          <div className="ct-custom-left">
            <JourneyCt />
          </div>
        </div>
        <div className="journey-right">
          <div className="ct-custom-right">
            <p className="journey-desciption-1 font-bold">{props.t("journey.desc-1")}</p>
            <p className="journey-desciption-2">{props.t("journey.desc-2")} <span className="lg:inline block lg:mt-0 mt-[1.6rem]">{props.t("journey.desc-3")}</span></p>
            <p className="journey-desciption-2">{props.t("journey.desc-4")} <span className="lg:inline block lg:mt-0 mt-[1.6rem]">{props.t("journey.desc-5")}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
