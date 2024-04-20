export default function CrtFrameCropperCapture({
  widthImageCapture,
}: {
  widthImageCapture: number;
}) {
  return (
    <div
      style={{
        width: widthImageCapture,
      }}
      className=" aspect-square bg-white fixed top-[3000px]"
    >
      <div
        id="crt-frame-cropper-capture"
        className="crt-frame-cropper relative w-full h-full "
      >
        <img
          className="z-[1] absolute bottom-0 left-0 w-full h-full object-contain"
          src="/assets/images/bg-frame.png"
          alt=""
          crossOrigin="anonymous"
        />
        <img
          className="z-[2] absolute bottom-[1px] left-0 w-full h-full object-contain"
          id="img-capture"
          src=""
          alt=""
          crossOrigin="anonymous"
        />
        <img
          className="z-[3] absolute bottom-0 left-0 w-full h-full object-contain"
          src="/assets/images/bg-frame-border.png"
          alt=""
          crossOrigin="anonymous"
        />
        <img
          className="z-[4] absolute bottom-0 left-0 w-full h-full object-contain"
          src="/assets/images/item-frame.png"
          alt=""
          crossOrigin="anonymous"
        />
      </div>
    </div>
  );
}
