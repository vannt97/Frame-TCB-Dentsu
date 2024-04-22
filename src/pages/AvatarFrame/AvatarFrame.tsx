import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { captureElement } from "../../utils/capture.js";
import "cropperjs/dist/cropper.css";
import {
  activeModeMove,
  disableMode,
  getCroppedCanvas,
  uploadImageToCrop,
} from "../../utils/cropper.js";
import { useMutation } from "@tanstack/react-query";
import { serviceUploadImage } from "../../services/uploadImage/index.js";
import { serviceRemoveBg } from "../../services/removeBg/index.js";
import { message } from "antd";
import {
  deviceType,
  fileToBase64,
  reduceSizeCustom,
  validationSingleFile,
} from "../../utils/common.js";
import { downloadFile } from "../../utils/download.js";
import ProcessBar from "./ProcessBar/ProcessBar.js";
import ShareFacebookBtn from "./ShareFacebookBtn/ShareFacebookBtn.js";
import CrtFrameCropperCapture from "./CrtFrameCropperCapture/CrtFrameCropperCapture.js";
import UploadImageAgainBtn from "./UploadImageAgainBtn/UploadImageAgainBtn.js";
import UploadImageBtn from "./UploadImageBtn/UploadImageBtn.js";
import NextStep3Btn from "./NextStep3Btn/NextStep3Btn.js";
import { Frames } from "../../config/frame.js";
import ScrollToBottom from "../../components/ScrollToBottom/ScrollToBottom.js";
// import { Helmet } from "react-helmet";
export default function AvatarFrame() {
  const [step, setStep] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const [btnDownload, setBtnDownload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [linkShare, setLinkShare] = useState("");
  const [base64InputUploadFile, setBase64InputUploadFile] = useState("");
  const [imgCaptureMobile, setImgCaptureMobile] = useState("");
  const [widthImageCapture, setWidthImageCapture] = useState(
    Number(import.meta.env.VITE_IMAGE_CAPTURE_DOWNLOAD_IMAGE)
  );
  const [frameActive, setFrameActive] = useState<any>(null);

  const [isLabelMobile, setIsLabelMobile] = useState(true);
  // api UploadImage
  const { mutate: mutateUploadImage, isPending: isPendingUploadImage } =
    useMutation({
      mutationFn: serviceUploadImage,
      onSuccess: (data) => {
        console.log("api UploadImage data upload image: ", data);

        setLinkShare(data.url);
        setLoading(false);
        setBtnDownload(false);
        setWidthImageCapture(
          Number(import.meta.env.VITE_IMAGE_CAPTURE_DOWNLOAD_IMAGE)
        );
        setTimeout(() => {
          setIsLabelMobile(false);
        }, 3000);
      },
      onError: (err) => {
        messageApi.open({
          type: "error",
          content: `Xử lý không thành công ${err.message}`,
        });
        setLoading(false);
        setBtnDownload(false);
        setWidthImageCapture(
          Number(import.meta.env.VITE_IMAGE_CAPTURE_DOWNLOAD_IMAGE)
        );
      },
    });
  // api RemoveBg
  const { mutate: mutateRemoveBg, isPending: isPendingRemoveBg } = useMutation({
    mutationFn: serviceRemoveBg,
    onSuccess: (data) => {
      console.log("api RemoveBg data: ", data);
      uploadImageToCrop(
        "crt-frame-cropper-js",
        "" as unknown as FileList,
        {
          isImage: true,
          url: "data:image/png;base64," + data.base64,
        },
        Frames[frameActive - 1].ratio
      );
      setStep(2);
      setLoading(false);
      setBtnDownload(false);
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: `Xử lý không remove background thành công`,
      });
      uploadImageToCrop(
        "crt-frame-cropper-js",
        "" as unknown as FileList,
        {
          isImage: true,
          url: base64InputUploadFile,
        },
        Frames[frameActive - 1].ratio
      );
      setStep(2);
      setLoading(false);
      setBtnDownload(false);
    },
  });

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    setBtnDownload(true);
    setLoading(true);
    const errorFile = validationSingleFile(e.target.files, "image", true);
    if (!errorFile) {
      if (!e.target.files) return;
      let base64 = await fileToBase64(e.target.files);
      setBase64InputUploadFile(base64);
      //
      // import.meta.env.VITE_IS_REMOVE_BG
      // Window.IS_REMOVE_BG
      if ((Window as any).IS_REMOVE_BG == 0) {
        uploadImageToCrop(
          "crt-frame-cropper-js",
          e.target.files as FileList,
          {
            isImage: false,
            url: "",
          },
          Frames[frameActive - 1].ratio
        );
        setStep(3);
        setLoading(false);
        setBtnDownload(false);
        return;
      } else {
        if (import.meta.env.VITE_REDUCE_SIZE === 1) {
          let file = await reduceSizeCustom(
            e.target.files,
            import.meta.env.VITE_HEIGHT_MULTIPLIED_WIDTH
          );
          mutateRemoveBg({
            File: file,
          });
        } else {
          mutateRemoveBg({
            File: e.target.files[0],
          });
        }
      }
    } else {
      messageApi.open({
        type: "error",
        content: errorFile,
      });
      setBtnDownload(false);
    }
  };

  const handleDownLoad = async () => {
    try {
      setBtnDownload(true);
      setLoading(true);
      let base64 = (await captureElement(
        "crt-frame-cropper-capture",
        false
      )) as string;

      setTimeout(() => {
        downloadFile(base64, "avatar");
        setLoading(false);
        setBtnDownload(false);
        // setWidthImageCapture(
        //   Number(import.meta.env.VITE_IMAGE_CAPTURE_UPLOAD_FB_IMAGE)
        // );
        // setStep(4);
      }, 2000);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: JSON.stringify(err),
      });
    }
  };

  const handleBackStep3 = () => {
    (document.getElementById("img-capture") as HTMLImageElement).src = "";
    if (deviceType() == "mobile") {
      // window.URL.revokeObjectURL(imgCaptureMobile);
      setImgCaptureMobile("");
    }
    activeModeMove();
    setStep(3);
  };

  const handleBackStep1 = () => {
    (document.getElementById("img-capture") as HTMLImageElement).src = "";
    if (deviceType() == "mobile") {
      // window.URL.revokeObjectURL(imgCaptureMobile);
      setImgCaptureMobile("");
    }
    setStep(1);
  };

  useEffect(() => {
    async function uploadImg() {
      setBtnDownload(true);
      setLoading(true);

      let file = (await captureElement(
        "crt-frame-cropper-capture",
        true
      )) as File;
      console.log("file upload: ", file);
      setTimeout(() => {
        mutateUploadImage({ file });
      }, 1000);
    }
    //
    // if (
    //   step == 4 &&
    //   widthImageCapture == import.meta.env.VITE_IMAGE_CAPTURE_UPLOAD_FB_IMAGE
    // ) {
    //   uploadImg();
    // }
  }, [step, widthImageCapture]);

  const Btns = useMemo(() => {
    let jsx = <></>;
    switch (step) {
      case 2: {
        jsx = (
          <>
            <div className="flex justify-between ">
              <button onClick={handleBackStep1} className="btn-frame">
                <img
                  className="w-[25px] h-[25px] inline mr-5 "
                  src="/assets/svg/skip-icon.svg"
                  alt=""
                />
                trở lại
              </button>
              <UploadImageBtn
                btnDownload={btnDownload}
                handleUploadImage={handleUploadImage}
              />
            </div>
          </>
        );
        break;
      }
      case 3: {
        jsx = (
          <div className="flex justify-between ">
            <UploadImageAgainBtn
              btnDownload={btnDownload}
              handleUploadImage={handleUploadImage}
            />
            <NextStep3Btn
              btnDownload={btnDownload}
              widthImageCapture={widthImageCapture}
              setBtnDownload={setBtnDownload}
              setLoading={setLoading}
              setImgCaptureMobile={setImgCaptureMobile}
              setWidthImageCapture={setWidthImageCapture}
              setStep={setStep}
              setIsLabelMobile={setIsLabelMobile}
            ></NextStep3Btn>
          </div>
        );
        break;
      }
      case 4: {
        jsx = (
          <div className="flex justify-between ">
            <button
              disabled={btnDownload}
              onClick={handleBackStep3}
              className="btn-frame"
            >
              <img
                className="w-[25px] h-[25px] inline mr-5 "
                src="/assets/svg/skip-icon.svg"
                alt=""
              />
              trở lại
            </button>
            {deviceType() == "mobile" ? (
              <></>
            ) : (
              <>
                <button
                  disabled={btnDownload}
                  onClick={handleDownLoad}
                  className="btn-frame"
                >
                  <img
                    className="w-[25px] h-[25px] inline mr-5"
                    src="/assets/svg/download-icon.svg"
                    alt=""
                  />
                  tải hình
                </button>
              </>
            )}
          </div>
        );
        break;
      }
      // case 5: {
      //   jsx = (
      //     <div className="flex justify-between ">
      //       <button
      //         disabled={btnDownload}
      //         onClick={handleBackStep1}
      //         className="btn-frame"
      //       >
      //         <img
      //           className="w-[25px] h-[25px] inline mr-5 "
      //           src="./assets/svg/skip-icon.svg"
      //           alt=""
      //         />
      //         thực hiện lại
      //       </button>
      //       <ShareFacebookBtn linkShare={linkShare} btnDownload={btnDownload} />
      //     </div>
      //   );
      //   break;
      // }
      default: {
        jsx = (
          <>
            <div className="flex justify-center ">
              <button
                onClick={() => {
                  if (frameActive) {
                    setStep(2);
                  } else {
                    messageApi.open({
                      type: "error",
                      content: `Vui Lòng Chọn Frame Ở Trên`,
                    });
                  }
                }}
                className="btn-frame"
              >
                <img
                  className="w-[25px] h-[25px] inline mr-5 scale-[-1]"
                  src="/assets/svg/skip-icon.svg"
                  alt=""
                />
                TIẾP TỤC
              </button>
            </div>
          </>
        );
      }
    }
    return jsx;
  }, [step, btnDownload, frameActive]);

  const renderLoading = useMemo(() => {
    if (isPendingRemoveBg || isPendingUploadImage || loading) {
      return (
        <div className="z-[15] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
          <span className="loader"></span>
        </div>
      );
    }
    return "";
  }, [isPendingRemoveBg, isPendingUploadImage, loading]);

  const labelMobile = useMemo(() => {
    return (
      <>
        {imgCaptureMobile ? (
          <>
            <img
              srcSet={imgCaptureMobile}
              src={imgCaptureMobile}
              alt=""
              className={`z-[4] absolute bottom-0 left-0 w-full h-full object-contain `}
            />
            {/* <div className="z-[10] pointer-events-none absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              <p
                className={`${
                  isLabelMobile ? "" : "hidden"
                } crt-frame-label-mobile bg-grey-2-color py-2 px-6 text-black`}
              >
                Ấn giữ vào hình để tải hình về máy
              </p>
            </div> */}
          </>
        ) : (
          <></>
        )}
      </>
    );
  }, [isLabelMobile, imgCaptureMobile]);

  const renderFrameDemo = useMemo(() => {
    return Frames.map((item, index) => {
      return (
        <div key={index}>
          <div
            onClick={() => {
              setFrameActive(item.id);
            }}
            className={`cursor-pointer crt-frame-avatar-item ${
              item.id == frameActive ? "active" : ""
            }`}
          >
            <img className="h-full object-cover" src={item.linkFrame} alt="" />
          </div>
          <div
            style={{
              textWrap: "balance",
            }}
            className="text-black text-center"
          >
            {deviceType() == "desktop" ? item.caption : item.captionMobile}
          </div>
        </div>
      );
    });
  }, [frameActive]);

  useEffect(() => {
    if (step == 2) {
      (
        document.querySelector(".crt-frame-cropper") as HTMLElement
      )?.setAttribute(
        "style",
        `aspect-ratio: ${Frames[frameActive - 1].ratio}`
      );
    }
  }, [step]);

  const renderGuide = useMemo(() => {
    if (step == 3) {
      if (deviceType() == "mobile") {
        return (
          <p
            style={{
              textWrap: "balance",
            }}
            className="text-center mt-[2.5rem]   text-black"
          >
            Dùng ngón tay để phóng to/thu nhỏ/căn chỉnh khung hình
          </p>
        );
      }

      if (deviceType() == "desktop") {
        return (
          <p
            style={{
              textWrap: "balance",
            }}
            className="text-center mt-[2.5rem]   text-black"
          >
            Dùng chuột để phóng to/thu nhỏ/căn chỉnh khung hình
          </p>
        );
      }
    }
    if (step == 4) {
      if (deviceType() == "mobile") {
        return (
          <p
            style={{
              textWrap: "balance",
            }}
            className="text-center mt-[2.5rem]   text-black"
          >
            Ấn giữ vào hình để tải hình về máy
          </p>
        );
      }
    }
    return;
  }, [step]);
  return (
    <section className="crt-frame">
      {contextHolder}
      {renderGuide}
      {step == 1 ? (
        <>
          <p
            style={{
              textWrap: "balance",
            }}
            className="text-center mt-[2.5rem] md:mt-[0rem] mb-[2.5rem] text-black"
          >
            Chọn một trong những khung ảnh sau{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mx-[2.5rem] crt-frame-avatar ">
            {renderFrameDemo}
          </div>
        </>
      ) : (
        ""
      )}

      <div className="crt-frame-ct">
        {step == 1 ? (
          ""
        ) : (
          <div className="relative overflow-hidden">
            <div className="crt-frame-cropper overflow-hidden">
              <div
                id="crt-frame-cropper-js"
                className="crt-frame-cropper-js w-full h-full"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${Frames[frameActive - 1].linkFrame})`,
                }}
                className="crt-frame-cropper-border"
              ></div>
              <div className="absolute h-[1px] w-full bottom-0 left-0 bg-white"></div>
              <div className="absolute h-[1px] w-full top-0 left-0 bg-white"></div>
              {renderLoading}
              {labelMobile}
            </div>
            {/* {step == 4 ? (
              <p className="text-center text-black mb-[1.5rem] ">
                Truy cập vào Facebook để đổi avatar ngay nhé!
              </p>
            ) : (
              <p className="mb-[2rem]"></p>
            )} */}
            <CrtFrameCropperCapture
              frameActive={frameActive}
              widthImageCapture={widthImageCapture}
            />
          </div>
        )}
        {Btns}
      </div>
      {step == 1 ? <ScrollToBottom /> : ""}
    </section>
  );
}
