import { disableMode, getCroppedCanvas } from "../../../utils/cropper";
import { deviceType, fileToBase64 } from "../../../utils/common";
import { captureElement } from "../../../utils/capture";

export default function NextStep3Btn({
  btnDownload,
  widthImageCapture,
  setBtnDownload,
  setLoading,
  setImgCaptureMobile,
  setWidthImageCapture,
  setStep,
}: {
  btnDownload: boolean;
  widthImageCapture: number;
  setBtnDownload: Function;
  setLoading: Function;
  setImgCaptureMobile: Function;
  setWidthImageCapture: Function;
  setStep: Function;
}) {
  const handleNextStep3 = async () => {
    let image = getCroppedCanvas({
      width: widthImageCapture,
      height: widthImageCapture,
    });
    (document.getElementById("img-capture") as HTMLImageElement).src =
      image as any;
    disableMode();

    if (deviceType() == "mobile") {
      setBtnDownload(true);
      setLoading(true);
      let file = (await captureElement(
        "crt-frame-cropper-capture",
        true
      )) as any;
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgCaptureMobile(event.target?.result as string);
        // event.target?.result as string
        setWidthImageCapture(
          Number(import.meta.env.VITE_IMAGE_CAPTURE_UPLOAD_FB_IMAGE)
        );
      };
      reader.readAsDataURL(file);
      // setImgCaptureMobile(window.URL.createObjectURL(file));

      // setImgCaptureMobile();
      // setWidthImageCapture(
      //   Number(import.meta.env.VITE_IMAGE_CAPTURE_UPLOAD_FB_IMAGE)
      // );
      setTimeout(() => {
        setStep(4);
      }, 2000);
    } else {
      setStep(3);
    }
  };
  return (
    <button
      disabled={btnDownload}
      onClick={handleNextStep3}
      className="btn-frame"
    >
      <img
        className="w-[25px] h-[25px] inline mr-5 scale-[-1]"
        src="./assets/svg/skip-icon.svg"
        alt=""
      />
      TIẾP TỤC
    </button>
  );
}
