import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import JourneyOurStory from "./JourneyOurStory/JourneyOurStory";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../constants/language";
import { useMutation } from "@tanstack/react-query";
import { serviceGetStories } from "../../services/Story";
import { Loading } from "../../components/Loadings/Loadings";
import { message } from "antd";
import { TEXT_DETAIL_STORY_ERROR } from "../../constants/error";

export default function OurStory() {
  let { i18n } = useTranslation();
  const [loadingCustom, setLoadingCustom] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  const [dataStories, setDataStories] = useState<any[]>();
  const refChangeLanguage = useRef<any>(null);

  // const renderPosts2 = () => {
  //   return posts.map((item, index) => {
  //     return (
  //       <div key={index} className="posts-item ct-custom">
  //         <Link to={`/${i18n.language}/${item.link}`}>
  //           <img src={item?.img} alt="" />
  //           <p
  //             title={
  //               i18n.language == LANGUAGE.ENGLISH ? item?.title : item?.titleVI
  //             }
  //           >
  //             {i18n.language == LANGUAGE.ENGLISH ? item?.title : item?.titleVI}
  //           </p>
  //           <label
  //             title={
  //               i18n.language == LANGUAGE.ENGLISH ? item?.desc : item?.descVI
  //             }
  //           >
  //             {i18n.language == LANGUAGE.ENGLISH ? item?.desc : item?.descVI}
  //           </label>
  //           <span>
  //             {i18n.language == LANGUAGE.ENGLISH ? "read more" : "XEM THÊM"}
  //           </span>
  //         </Link>
  //       </div>
  //     );
  //   });
  // };

  const { mutate } = useMutation({
    mutationFn: serviceGetStories,
    onSuccess: ({ data }) => {
      setDataStories([...data]);
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
      mutate(i18n.language);
    }, 500);
  }, [i18n.language]);

  const renderStories = useMemo(() => {
    return dataStories?.map((item: any, index: number) => {
      return (
        <div key={index} className="posts-item ct-custom">
          <Link to={`/${i18n.language}/${item?.slug}`}>
            <img src={item?.thumbnail} alt="" />
            <p>{item?.title}</p>
            <label>{item?.description}</label>
            <span>
              {i18n.language == LANGUAGE.ENGLISH ? "read more" : "XEM THÊM"}
            </span>
          </Link>
        </div>
      );
    });
  }, [dataStories]);

  const LoadingComponent = useMemo(() => {
    return (
      <>
        <section className="min-h-[700px] w-full"></section>
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <div>
            <Loading />
          </div>
        </div>
      </>
    );
  }, []);

  return (
    <>
      <Header></Header>
      <section id="our-story">
        {contextHolder}
        <JourneyOurStory />
        <div className="relative">
          {loadingCustom ? (
            LoadingComponent
          ) : (
            <>
              {(dataStories as [])?.length > 0 ? (
                <section className="relative posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  {renderStories}
                  <div className="posts-frame"></div>
                </section>
              ) : (
                <section
                  style={{
                    borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
                  }}
                  className="min-h-[700px] w-full"
                ></section>
              )}
            </>
          )}
          {/* <section className="relative posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {renderPosts2()}
          </section> */}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
