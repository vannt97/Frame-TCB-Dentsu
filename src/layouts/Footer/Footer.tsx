import { useTranslation } from "react-i18next";
import logoFB from "/assets/svg/facebook-icon.svg";
import logoYT from "/assets/svg/youtube-icon.svg";
import logoWEB from "/assets/svg/worldwide-global-icon.svg";
import { LANGUAGE } from "../../constants/language";
export default function Footer() {
  const { t, i18n } = useTranslation(["footer"]);
  return (
    <footer className="gap-[2.2rem] lg:gap-0 py-[2.5rem] lg:py-0 justify-between h-full lg:h-[92px] w-full ct-custom flex items-center flex-wrap">
      <p className="text-center lg:text-left w-full lg:w-auto leading-[2.8rem] order-2 lg:order-1">
        {t("text1")}
      </p>
      <div className="flex gap-[2.2rem] lg:gap-[5rem] order-1 lg:order-2 flex-wrap justify-center">
        <span className="order-2 lg:order-1">
          <a
            href={
              i18n.language == LANGUAGE.ENGLISH
                ? "https://www.capitaland.com/en/legal-notices/privacy-policy.html"
                : "https://www.capitaland.com/vn/vi/chinh-sach-rieng-t---cookies/chinh-sach-rieng-t.html"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("text2")}
          </a>
        </span>
        <ul className="order-1 lg:order-2 justify-center lg:justify-left flex w-full lg:w-auto gap-[1.2rem] lg:gap-[2.4rem]  flex-wrap">
          <li className="w-full lg:w-auto text-center">{t("text3")}</li>
          <li>
            <div className="flex gap-[2.4rem] items-center">
              <a
                href="https://www.facebook.com/CapitaLandVietnam"
                target="_blank"
              >
                <img loading="lazy" src={logoFB} alt="" />
              </a>
              {/* <a href="https://www.instagram.com/capitaland/" target="_blank">
              <img src={logoInsta} alt="" />
            </a> */}
              <a
                href="https://www.youtube.com/@CapitaLandinVietnam"
                target="_blank"
              >
                <img loading="lazy" src={logoYT} alt="" />
              </a>
              <a
                target="_blank"
                href={
                  i18n.language == LANGUAGE.ENGLISH
                    ? "https://www.capitaland.com/vn/en.html"
                    : "https://www.capitaland.com/vn/vi.html"
                }
              >
                <img loading="lazy" width={23} src={logoWEB} alt="" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
