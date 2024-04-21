import { Frames } from "../../../config/frame.js";

export default function CrtFrameCropperCapture({
  widthImageCapture,
  frameActive,
}: {
  widthImageCapture: number;
  frameActive: any;
}) {
  return (
    <div
      style={{
        width: widthImageCapture,
        aspectRatio: Frames[frameActive - 1].ratio,
      }}
      className="bg-white fixed top-[3000px]"
    >
      <div
        id="crt-frame-cropper-capture"
        className="crt-frame-cropper relative w-full h-full "
      >
        <img
          className="z-[2] absolute bottom-[1px] left-0 w-full h-full object-contain"
          id="img-capture"
          src=""
          alt=""
          crossOrigin="anonymous"
        />
        <img
          className="z-[3] absolute bottom-0 left-0 w-full h-full object-contain"
          src={`${Frames[frameActive - 1].linkFrame}`}
          alt=""
          crossOrigin="anonymous"
        />
        {/* <img
          className="z-[4] absolute bottom-0 left-0 w-full h-full object-contain"
          src="/assets/images/item-frame.png"
          alt=""
          crossOrigin="anonymous"
        /> */}
      </div>
    </div>
  );
}
