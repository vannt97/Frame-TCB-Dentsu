import { useMemo } from "react";
import useScroll from "../../hooks/useScroll.js";
import { deviceType } from "../../utils/common.js";

export default function ScrollToBottom() {
  const { scrollTop } = useScroll();
  const renderButton = useMemo(() => {
    if (deviceType() == "mobile") {
      if (window.scrollY > document.body.scrollHeight / 2) {
        return;
      } else {
        return (
          <button
            style={{
              background: "white",
            }}
            className="btn btn-arrow"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            <img
              className="rotate-90"
              src="/assets/svg/arrow-icon.svg"
              alt=""
            ></img>
          </button>
        );
      }
    } else {
      return;
    }
  }, [scrollTop]);
  return (
    <div className="fixed z-20 bottom-[10px] right-[10px]">
      {/* <button
        style={{
          background: "white",
        }}
        className="btn btn-arrow"
        onClick={() => {
          //   console.log("scroll body: ", document.body.scrollTop)
          //   console.log("window scroll: ", window.scrollY);
          window.scrollTo(0, document.body.scrollHeight);
        }}
      >
        <img
          className="rotate-90"
          src="/assets/svg/arrow-icon.svg"
          alt=""
        ></img>
      </button> */}
      {renderButton}
    </div>
  );
}
