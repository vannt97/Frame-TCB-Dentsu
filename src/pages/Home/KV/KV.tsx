import { useMemo } from "react";
import { deviceType } from "../../../utils/common";

export default function KV() {
  const renderVideo = useMemo(() => {
    if (deviceType() == "mobile") {
      return (
        <video
          className="w-full aspect-[16/9]"
          preload="auto"
          muted={true}
          loop={true}
          playsInline
          autoPlay
        >
          <source src="/assets/videos/capitaland-mobile.mp4" type="video/mp4" />
        </video>
      );
    }
    return (
      <video
        className="w-full aspect-[16/9]"
        preload="auto"
        muted={true}
        loop={true}
        playsInline
        autoPlay
      >
        <source src="/assets/videos/capitaland.mp4" type="video/mp4" />
      </video>
    );
  }, []);
  return (
    <section id="kv">
      <div className="">{renderVideo}</div>
    </section>
  );
}
