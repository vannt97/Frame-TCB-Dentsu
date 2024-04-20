import { shareFB } from "../../../utils/share";

export default function ShareFacebookBtn({
  linkShare,
  btnDownload,
}: {
  linkShare: string;
  btnDownload: boolean;
}) {
  const shareFBHandler = async () => {
    console.log("linkshare: ", linkShare);
    shareFB(
      1,
      {
        hashtag: "#CapitaLand30YearsInVietnam",
        linkShare: "",
        metaThumbnail: linkShare,
        metaAuthor: "",
        metaTitle: "30 năm khởi bước hành trình, ta cùng vươn cao",
        metaDescription:
          "Xin được dành dịp đặc biệt này để tri ân tất cả các cộng sự, nhân viên đã cùng đồng hành trong trong chặng đường trở thành nhà phát triển bất động sản được tin chọn. Hãy cùng đổi Avatar kỷ niệm cột mốc đặc biệt này nhé.",
      },
      (response: any) => {
        console.log("response: ", response);
      }
    );
  };

  return (
    <button
      disabled={btnDownload || (linkShare == "" ? true : false)}
      onClick={shareFBHandler}
      className="btn-frame"
    >
      <img
        className="w-[25px] h-[25px] inline mr-5"
        src="./assets/svg/share-icon.svg"
        alt=""
      />
      chia sẻ
    </button>
  );
}
