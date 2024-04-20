import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../constants/language";

export default function JourneyCt() {
  const { t, i18n } = useTranslation(["journey-part"]);
  return (
    <div className={`journey-ct `}>
      <p className="journey-title-1">
        {/* {t("journey on")} */}
        {i18n.language == LANGUAGE.ENGLISH ? (
          <>
            <span className="journey-title-1-custom">j</span>ourney on,
          </>
        ) : (
          "khởi bước hành trình"
        )}
      </p>
      <div className="journey-title-wrapper-2-3">
        <p className="journey-title-2">{t("together")}</p>
        <div className="journey-title-3">
          <span className="">
            {t("we")}
            {/* {i18n.language == LANGUAGE.ENGLISH ? "we" : "cùng"} */}
          </span>{" "}
          {/* {t("rise")} */}
          {i18n.language == LANGUAGE.ENGLISH
            ? // <div className="inline">
              //   r<div className="inline custom-font-inter">i</div>se
              // </div>
              "rise"
            : "vươn cao"}
        </div>
      </div>
    </div>
  );
}
