import { ChangeEventHandler } from "react";

export default function UploadImageBtn({
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
        id="crt-frame-input-upload"
        accept="image/*"
      />
      <label className={`btn-frame`} htmlFor="crt-frame-input-upload">
        <img
          className="w-[25px] h-[25px] inline mr-5"
          src="./assets/svg/upload-icon.svg"
          alt=""
        />
        Chọn hình
      </label>
    </>
  );
}
