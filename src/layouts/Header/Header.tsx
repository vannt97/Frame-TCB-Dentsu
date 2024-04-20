import { Link, useHistory, useParams } from "react-router-dom";
import logo from "/assets/svg/logo.svg";
import { Modal } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../hooks/useWindowSize";
import { LANGUAGE } from "../../constants/language";
import NavbarMobile from "./NavbarMobile/NavbarMobile.js";
import { PATH } from "../../constants/paths.js";

const NAVS = [
  {
    nameEN: "Journey On",
    nameVI: "Khởi Bước Hành Trình",
    link: PATH.HOME,
    linkVI: PATH.TRANG_CHU,
  },
  {
    nameEN: "Together We Create",
    nameVI: "Đồng Kiến Tạo",
    link: PATH.TOGETHER_WE_CREATE,
    linkVI: PATH.DONG_KIEN_TAO,
  },
  {
    nameEN: "Together We Give Back",
    nameVI: "Đồng Sẻ Chia",
    link: PATH.TOGETHER_WE_GIVE_BACK,
    linkVI: PATH.DONG_CHIA_SE,
  },
  {
    nameEN: "Together We Celebrate",
    nameVI: "Đồng Tôn Vinh",
    link: PATH.TOGETHER_WE_CELEBRATE,
    linkVI: PATH.DONG_TON_VINH,
  },
];

export default function Header() {
  const history = useHistory();
  const [showNavBar, setShowNavBar] = useState(false);
  const [isModalSignIn, setModalSignIn] = useState(false);
  const { i18n } = useTranslation();
  const [isMobile, setMobile] = useState(false);
  const { width } = useWindowSize();
  const refBtnLanguage = useRef<HTMLButtonElement>();
  const params = useParams<any>();
  useEffect(() => {
    if (width) {
      if (width < 1024) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
  }, [width]);

  const changeLanguage = () => {
    if (!refBtnLanguage.current) return;
    let nav = NAVS.find((item) => {
      return (
        item.linkVI == history.location.pathname ||
        item.link == history.location.pathname
      );
    });

    if (nav) {
      
      window.history.pushState(
        null,
        "",
        `${i18n.language == LANGUAGE.ENGLISH ? nav.linkVI : nav.link}`
      );
    } else {
      if (params?.slugPost) {
        window.history.pushState(
          null,
          "",
          `${i18n.language == LANGUAGE.ENGLISH ? PATH.TRANG_CHU : PATH.HOME}/${
            params.slugPost
          }`
        );
      } else {
        window.history.pushState(
          null,
          "",
          `${i18n.language == LANGUAGE.ENGLISH ? PATH.TRANG_CHU : PATH.HOME}`
        );
      }
    }

    if (refBtnLanguage.current.dataset.lang == LANGUAGE.ENGLISH) {
      i18n.changeLanguage(LANGUAGE.VIETNAM);
    } else {
      i18n.changeLanguage(LANGUAGE.ENGLISH);
    }
  };

  const getLang = (pathName: string) => {
    return pathName.split("/")[1];
  };

  useEffect(() => {
    if (getLang(history.location.pathname) == LANGUAGE.ENGLISH) {
      i18n.changeLanguage(LANGUAGE.ENGLISH);
    } else {
      i18n.changeLanguage(LANGUAGE.VIETNAM);
    }
  }, [history.location.pathname]);

  const btnChangeLanguage = () => {
    return (
      <button
        ref={(node) => {
          refBtnLanguage.current = node as HTMLButtonElement;
        }}
        onClick={changeLanguage}
        className="btn btn-2"
        data-lang={
          i18n.language == LANGUAGE.ENGLISH
            ? LANGUAGE.ENGLISH
            : LANGUAGE.VIETNAM
        }
      >
        {i18n.language == LANGUAGE.ENGLISH ? "vn" : LANGUAGE.ENGLISH}
      </button>
    );
  };

  const renderNav = useMemo(() => {
    return NAVS.map((item, index) => {
      let isActive =
        window.location.pathname ==
        `${i18n.language == LANGUAGE.ENGLISH ? item.link : item.linkVI}`
          ? "active"
          : "";
      return (
        <li
          key={index}
          className={`header-nav__item relative h-full flex items-center justify-center ${isActive}`}
        >
          <div className="h-full flex items-center relative px-8 w-full justify-center">
            <Link
              className=""
              to={`${
                i18n.language == LANGUAGE.ENGLISH ? item.link : item.linkVI
              }`}
            >
              {i18n.language == LANGUAGE.ENGLISH ? item.nameEN : item.nameVI}
            </Link>
          </div>
        </li>
      );
    });
  }, [i18n.language]);

  const groupBtn = useMemo(() => {
    return (
      <>
        <div className="header-sign-in gap-[1.8rem]">
          {/* <button
            className="btn btn-1"
            onClick={() => {
              setModalSignIn(true);
            }}
          >
            sign in / sign up
          </button> */}
          {isMobile ? "" : btnChangeLanguage()}
        </div>

        <div className="header-grip-lines grid grid-cols-2 gap-10 lg:hidden">
          {isMobile ? btnChangeLanguage() : ""}
          <img
            onClick={() => {
              if (!showNavBar) {
                document.body.style.overflow = "hidden";
              } else {
                document.body.style.overflow = "";
              }
              setShowNavBar(!showNavBar);
            }}
            src="/assets/svg/grip-lines-icon.svg"
            alt=""
          />
        </div>
      </>
    );
  }, [isMobile, showNavBar, i18n.language]);

  useEffect(() => {
    document.body.className = i18n.language;
  }, [i18n.language]);

  return (
    <header className="header relative">
      <div className="z-[10] relative flex justify-between items-center ct-custom h-[72px] w-full header-container">
        <div className="header-icon">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="h-full relative">
          <ul
            className={` header-nav h-full relative items-center text-[1.4rem] xl:text-[1.8rem]`}
          >
            {renderNav}
          </ul>
        </div>
        {groupBtn}
      </div>
      {isMobile ? (
        <>
          {showNavBar ? (
            <>
              <NavbarMobile Navs={NAVS} setModalSignIn={setModalSignIn} />
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      <Modal
        width={500}
        onCancel={() => {
          setModalSignIn(false);
        }}
        open={isModalSignIn}
        footer={null}
        className="header-signin-modal"
      >
        <div className="">
          <p className="mb-[2rem] text-center text-white text-[1.8rem] leading-[2.8rem]">
            <b>Please use your facebook account </b>
            <b className="block">to sign in or sign up</b>
          </p>
          <div className="w-[100%] md:w-[65%] mx-auto">
            <button className="btn btn-signin flex items-center justify-center gap-[1rem] w-full mb-[2rem]">
              <img loading="lazy" src="./assets/svg/facebook2-icon.svg" alt="" />
              <span>Continue with Facebook</span>
            </button>
            <button
              onClick={() => {
                setModalSignIn(false);
              }}
              className="btn btn-3 w-full capitalize"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}
