import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../../constants/language";
import Footer from "../../Footer/Footer.js";

export default function NavbarMobile({ Navs, setModalSignIn }: any) {
  const { i18n } = useTranslation();

  const renderNavs = useMemo(() => {
    return (Navs as any[]).map((item, index) => {
      let isActive =
        window.location.pathname ==
        `${i18n.language == LANGUAGE.ENGLISH ? item.link : item.linkVI}`
          ? "text-yellow-color"
          : "";
      return (
        <li
          key={index}
          className={isActive}
          onClick={() => {
            document.body.style.overflow = "";
          }}
        >
          <Link
            to={`${
              i18n.language == LANGUAGE.ENGLISH ? item.link : item.linkVI
            }`}
          >
            {i18n.language == LANGUAGE.ENGLISH ? item.nameEN : item.nameVI}
          </Link>
        </li>
      );
    });
  }, [Navs, i18n.language]);
  return (
    <div className="z-[20] pt-[72px] fixed top-0 left-0 min-h-[100vh] w-[100%] bg-black-color-2">
      <ul className="text-[2.4rem] leading-[3.6rem] font-semibold text-center mt-[3rem] flex flex-col gap-[2.6rem]">
        {renderNavs}
      </ul>
      <div className="text-center mt-[5rem] mb-[4rem]">
        {/* <button
          className="btn btn-3"
          onClick={() => {
            setModalSignIn(true);
          }}
        >
          sign in / sign up
        </button> */}
      </div>
      <Footer />
    </div>
  );
}
