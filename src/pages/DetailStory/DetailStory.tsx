import { Link, useParams } from "react-router-dom";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import { Breadcrumb, ConfigProvider, message } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import { deviceType } from "../../utils/common";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../constants/language";

import { Loading } from "../../components/Loadings/Loadings";
import { useMutation } from "@tanstack/react-query";
import { serviceGetStory } from "../../services/Story";
import { PATH } from "../../constants/paths";
import { TEXT_DETAIL_STORY_ERROR } from "../../constants/error";
import { NAV } from "../../constants/navs";

export default function DetailStory() {
  const params = useParams<any>();
  const { i18n } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState<any>();
  const [loadingCustom, setLoadingCustom] = useState(false);
  const refChangeLanguage = useRef<any>(null);

  const configProvider = useMemo(() => {
    let style = {
      linkColor: "#E9B44A",
      itemColor: "#E9B44A",
      fontFamily: "Gill Sans",
      separatorColor: "#FFFFFFCC",
      linkHoverColor: "#FFFFFFCC",
    } as any;
    if (deviceType() == "desktop") {
      style.lastItemColor = "#FFFFFFCC";
    } else {
    }
    return style;
  }, []);

  const { mutate, error } = useMutation({
    mutationFn: serviceGetStory,
    onSuccess: ({ data }) => {
      setData(data);
      setTimeout(() => {
        setLoadingCustom(false);
      }, 100);
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: `${
          i18n.language == LANGUAGE.ENGLISH
            ? TEXT_DETAIL_STORY_ERROR.VIETNAM
            : TEXT_DETAIL_STORY_ERROR.ENGLISH
        }`,
      });
    },
  });

  useEffect(() => {
    if (refChangeLanguage.current) {
      clearTimeout(refChangeLanguage.current);
    }
    setLoadingCustom(true);
    refChangeLanguage.current = setTimeout(async () => {
      mutate({
        language_code: i18n.language,
        slug: params.slugPost,
      });
    }, 500);
  }, [i18n.language]);

  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: `${
          i18n.language == LANGUAGE.ENGLISH
            ? TEXT_DETAIL_STORY_ERROR.VIETNAM
            : TEXT_DETAIL_STORY_ERROR.ENGLISH
        }`,
      });
    }
  }, [error]);

  const itemsBreadcrumb = useMemo(() => {
    let items = [];
    if (deviceType() == "desktop") {
      items = [
        {
          title: (
            <Link
              to={`${
                i18n.language == LANGUAGE.ENGLISH ? PATH.HOME : PATH.TRANG_CHU
              }`}
            >
              {i18n.language == LANGUAGE.ENGLISH ? (
                "home"
              ) : (
                <span className="font-medium">trang chủ</span>
              )}
            </Link>
          ),
        },
        {
          title: (
            <Link
              to={`${
                i18n.language == LANGUAGE.ENGLISH
                  ? PATH.TOGETHER_WE_CREATE
                  : PATH.DONG_KIEN_TAO
              }`}
            >
              {i18n.language == LANGUAGE.ENGLISH ? (
                NAV.TOGETHER_WE_CREATE
              ) : (
                <span className="font-medium">{NAV.DONG_KIEN_TAO}</span>
              )}
            </Link>
          ),
        },
        {
          title: data?.title,
        },
      ];
    } else {
      items = [
        {
          title: (
            <Link
              to={`${
                i18n.language == LANGUAGE.ENGLISH ? PATH.HOME : PATH.TRANG_CHU
              }`}
            >
              {i18n.language == LANGUAGE.ENGLISH ? (
                "home"
              ) : (
                <span className="font-medium">trang chủ</span>
              )}
            </Link>
          ),
        },
        {
          title: (
            <Link
              to={`${
                i18n.language == LANGUAGE.ENGLISH
                  ? PATH.TOGETHER_WE_CREATE
                  : PATH.DONG_KIEN_TAO
              }`}
            >
              {i18n.language == LANGUAGE.ENGLISH ? (
                NAV.TOGETHER_WE_CREATE
              ) : (
                <span className="font-medium">{NAV.DONG_KIEN_TAO}</span>
              )}
            </Link>
          ),
        },
      ];
    }
    return items;
  }, [data]);

  const content = useMemo(() => {
    return (
      <div
        className="detail-post-content text-left pb-[4rem] "
        style={{
          textAlignLast: "left",
        }}
      >
        <h2
          style={{
            textAlign: "left",
          }}
          className="uppercase mb-[3rem] text-[3.2rem] md:text-[4.8rem] leading-[4rem] md:leading-[6.4rem]  font-medium mx-auto max-w-full"
        >
          {data?.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>
    );
  }, [data]);

  return (
    <>
      <Header></Header>
      <section
        id="detail-post"
        className=""
        style={{
          borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
        }}
      >
        {contextHolder}
        {loadingCustom ? (
          <div className="w-full h-[100vh] flex justify-center items-center">
            <div>
              <Loading></Loading>
            </div>
          </div>
        ) : (
          <div className="max-w-[1400px] mx-auto ct-custom">
            <div className="detail-post-breadcrumbs">
              <div className="">
                <ConfigProvider
                  theme={{
                    components: {
                      Breadcrumb: configProvider,
                    },
                  }}
                >
                  <Breadcrumb className="" items={itemsBreadcrumb} />
                </ConfigProvider>
              </div>
            </div>

            {content}
          </div>
        )}
      </section>
      <Footer></Footer>
    </>
  );
}
{
  /* <div className="max-w-[1400px] mx-auto ct-custom">
          <div className="detail-post-breadcrumbs">
            <div className="">
              <ConfigProvider
                theme={{
                  components: {
                    Breadcrumb: configProvider,
                  },
                }}
              >
                <Breadcrumb className="" items={itemsBreadcrumb} />
              </ConfigProvider>
            </div>
          </div>
          {i18n.language == LANGUAGE.ENGLISH ? (
            <ContentStory1></ContentStory1>
          ) : (
            <ContentStory1Vi></ContentStory1Vi>
          )}
        </div> */
}
