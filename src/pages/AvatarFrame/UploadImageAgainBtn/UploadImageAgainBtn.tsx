import { ChangeEventHandler } from "react";

export default function UploadImageAgainBtn({
  btnDownload,
  handleUploadImage,
}: {
  btnDownload: boolean;
  handleUploadImage: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <input
        disabled={btnDownload}
        onChange={handleUploadImage}
        hidden
        type="file"
        name=""
        id="crt-frame-input-upload-change"
        accept="image/png, image/jpeg"
      />
      <label className="btn-frame" htmlFor="crt-frame-input-upload-change">
        <img
          className="w-[25px] h-[25px] inline mr-5"
          src="/assets/svg/upload-icon.svg"
          alt=""
        />
        đổi hình
      </label>
    </>
  );
}
